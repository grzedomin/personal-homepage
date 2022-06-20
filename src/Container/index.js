import About from "./About";
import ThemeSwitch from "./ThemeSwitch";
import { Wrapper } from "./styled";

const Container = () => {

    return (

        <Wrapper>
            <>
                <ThemeSwitch />
                <About />
            </>
        </Wrapper>

    )
};

export default Container;