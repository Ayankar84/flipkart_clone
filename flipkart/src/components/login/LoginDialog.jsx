import { Alert, Box, Button, Dialog, Snackbar, TextField, Typography, styled } from "@mui/material"
import { useRef } from "react";
import { useState } from "react";
import { handelLogin, handelSignup } from "../../Service/api";

const LoginDialog = ({ open, setOpen }) => {

    const [alrt, setAlrt] = useState({
        status: "error",
        open: false,
        message: "Done"
    })

    const [account, setAccount] = useState(
        {
            view: "login"
        }
    )

    const signup = useRef(
        {
            name: "",
            username: "",
            email: "",
            password: "",
            mobile: ""
        }
    )

    const login = useRef(
        {
            username: "",
            password: ""
        }
    )


    const Component = styled(Box)`
        height: 70vh;
        width: 90vh;
    `;

    const Wrapper = styled(Box)`
        height: 82.5%;
        display: flex;
        flex-direction: column;
        padding: 25px 35px;
        flex: 1;
        & > div, & > button, & > p {
            margin-top: 20px
        }
    `;

    const Image = styled(Box)`
        background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
        height: 82.5%;
        width: 33%;
        padding: 40px 35px;
        & > p, & > h5 {
            color: #fff;
            font-weight: 600;
        }
    `;

    const LoginButton = styled(Button)`
        text-transform: none;
        background: #FB641B;
        color: #fff;
        height 48px;
        border-redious: 2px;
        :hover{
            background: #FB641B;
        }
    `;

    const OtpButton = styled(Button)`
        text-transform: none;
        background: #fff;
        color: #2874f0;
        height 48px;
        border-redious: 2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    `;

    const Text = styled(Typography)`
        font-size: 12px;
        color: #878787
    `;

    const CreateAccount = styled(Typography)`
        font-size: 14px;
        text-align:center;
        color: #2874f0;
        cursor: pointer;
        font-weight: 600
    `;
    const ComponentBox = styled(Box)`
        display: flex;
        height: 100%
    `;


    const handelSignupData = (e) => {
        signup.current[e.target.name] = e.target.value;
    }
    const handelLoginData = (e) => {
        login.current[e.target.name] = e.target.value;
    }
    
    const loginUser = async()=>{
        try{
            const {token} = await handelLogin(login.current)
            console.log(token)
        }catch(e){
            console.log(e.message);
        }
    }

    const signupUser = async () => {
        try {
            const resData = await handelSignup(signup.current);
            const {data, error} = resData;
            if(data){
                setAccount({ ...account, view: "login" });
                setAlrt({
                    status: "success",
                    open: true,
                    message: data
            })
            }else{
                setAlrt({
                    status: "error",
                    open: true,
                    message: error
            })
            }
            console.log(resData);
        } catch (e) {
            console.log("error: ", e.message)
        }
    }

    return (
        <Dialog open={open} onClose={() => {
            setOpen(false);
            setAccount({ view: "login" })
        }} PaperProps={{ sx: { maxWidth: "unset" } }}>
            <Component>

          {/* This is alert part */}
                <Snackbar
                    open={alrt.open}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={()=>{setAlrt({...alrt, open:false})}}
                >
                    <Alert variant="filled" severity={alrt.status} >
                        {alrt.message}
                    </Alert>
                </Snackbar>
          {/* This is alert part */}

                <ComponentBox>
                    <Image>
                        <Typography variant="h5">{account.view === "login" ? "Login" : "Looks like you're new here!"}</Typography>
                        <Typography style={{ "marginTop": "20px" }}>{account.view === "login" ? "Get access to your Orders, Wishlist and Recommendations" : "Sign up with your mobile number to get started"}</Typography>
                    </Image>
                    {account.view === "login" ?
                        <Wrapper>
                            <TextField name="username" variant="standard" label="Enter Username" onChange={(e)=>{handelLoginData(e)}}/>
                            <TextField type="password" name="password" variant="standard" label="Enter Password" onChange={(e)=>{handelLoginData(e)}}/>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={loginUser}>Login</LoginButton>
                            <Typography style={{ "textAlign": "center" }}>OR</Typography>
                            <OtpButton>Request OTP</OtpButton>
                            <CreateAccount onClick={() => { setAccount({ ...account, view: "signup" }) }}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper style={{ "padding": "0 35px" }}>
                            <TextField variant="standard" onChange={(e) => { handelSignupData(e) }} name="name" label="Enter Fullname" />
                            <TextField variant="standard" onChange={(e) => { handelSignupData(e) }} name="username" label="Enter Username" />
                            <TextField type="email" variant="standard" onChange={(e) => { handelSignupData(e) }} name="email" label="Enter Email" />
                            <TextField type="password" variant="standard" onChange={(e) => { handelSignupData(e) }} name="password" label="Enter Password" />
                            <TextField type="number" variant="standard" onChange={(e) => { handelSignupData(e) }} name="mobile" label="Enter mobile" />
                            <LoginButton onClick={signupUser} >Continue</LoginButton>
                            <CreateAccount onClick={() => { setAccount({ ...account, view: "login" }) }}>Existing User? Log in</CreateAccount>
                        </Wrapper>
                    }
                </ComponentBox>
            </Component>
        </Dialog>


    )
}
export default LoginDialog;