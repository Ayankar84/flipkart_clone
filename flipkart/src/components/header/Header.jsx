import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const StyledHeader = styled(AppBar)`
        background: #2874f0;
        height: 55px;
    `;

    const Component = styled(Box)`
        margin-left: 12%;
        line-height: 0;
    `;

    const SubHeading = styled(Typography)`
        font-size: 10px;
        font-style: italic;
        cursor:pointer;
        :hover{
            text-decoration: underline;
        }
    `;

    const PlusImage = styled('img')({
        width: 10,
        height: 10,
        margin: 1
    })

    const CustomButtonWrapper = styled(Box)`
        margin-left: 5%;
    `

    return (
        <StyledHeader>
            <Toolbar style={{"minHeight": "55px"}}>
                <Component>
                    <img src={logoURL} alt="Logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>
                            Explore<Box component="span" style={{ color: '#FFE500' }}> Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;