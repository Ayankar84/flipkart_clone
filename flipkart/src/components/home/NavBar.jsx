import { Box, Typography, styled } from "@mui/material"
import { navData } from "../../constants/data";

const NavBar = () => {

    const Container = styled(Box)`
        padding: 12px 8px;
        text-align: center;
    `
    const Text = styled(Typography)`
        font-size: 14px;
        font-weight: 600;
        font-family: inherit;
    `
    const showData = navData.map((ele) => {
        return (
            <Container>
                <img src={ele.url} alt="nav" style={{"width": "64px"}} />
                <Text>{ele.text}</Text>
            </Container>
        )
    })


    const Component = styled(Box)`
        display: flex;
        justify-content: space-between;
        margin: 55px 130px 0 130px;
    `

    return (
        <Component>
            {showData}
        </Component>
    )
}

export default NavBar;