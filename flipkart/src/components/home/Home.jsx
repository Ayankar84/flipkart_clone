import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Component = styled(Box)`
    padding: 10px;
    background: #F1F1F1
`

const Home = () => {
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home;