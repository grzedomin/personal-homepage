import { Wrapper, Caption, Container, IconBody, Sun } from "./styled";

const ThemeSwitch = ({ toggleTheme, themeState }) => {
    return (
        <Wrapper>
            <Caption>{themeState === "light" ? "DARK MODE OFF" : "DARK MODE ON"}</Caption>
            <Container onClick={() => toggleTheme()}>
                <IconBody iconTransition={themeState === "dark"}>
                    <Sun />
                </IconBody>
            </Container>
        </Wrapper>
    )
};
export default ThemeSwitch;