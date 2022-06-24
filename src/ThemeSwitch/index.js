import { useState } from "react";
import { lightTheme, darkTheme} from "../theme";
import { Wrapper, Caption, Container, IconBody, Sun } from "./styled";


const ThemeSwitch = () => {
  /*  const [themeState, setThemeState] = useState({
        state: lightTheme,
    });

    setThemeState({
        state: darkTheme,
    }); */


    ;
    return (
        <>
            <Wrapper>
                <Caption>DARK MODE OFF</Caption>
                <Container>
                    <IconBody>
                        <Sun />
                    </IconBody>
                </Container>
            </Wrapper>
        </>
    )
};
export default ThemeSwitch;