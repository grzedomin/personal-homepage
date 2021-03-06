import { Wrapper, Caption, Container, IconBody, Sun } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectThemeState, toggleTheme } from "../themeSlice";

const ThemeSwitch = () => {
    const { isLightTheme } = useSelector(selectThemeState);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Caption>{isLightTheme ? "DARK MODE OFF" : "DARK MODE ON"}</Caption>
            <Container onClick={() => dispatch(toggleTheme())}>
                <IconBody iconTransition={!isLightTheme}>
                    <Sun />
                </IconBody>
            </Container>
        </Wrapper>
    )
};
export default ThemeSwitch;