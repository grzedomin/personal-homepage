import Repositories from "./Repositories";
import { Wrapper, Logo, Header, SubHeader, Repos } from "./styled";
import logo from "../svg/Shape.svg";

const Main = ({ title }) => {
    return (
        <Wrapper>
            <Logo src={logo} />
            <Header>{title}</Header>
            <SubHeader>My recent projects</SubHeader>
            <Repositories />
        </Wrapper>
    );
};
export default Main;