import { Wrapper, Logo, Header, SubHeader, Projects } from "./styled";
import logo from "../svg/Shape.svg";

const Main = ({ title }) => {
    return (
        <Wrapper>
            <Logo src={logo} />
            <Header>{title}</Header>
            <SubHeader>My recent projects</SubHeader>
            <Projects></Projects>
        </Wrapper>
    );
};

export default Main;