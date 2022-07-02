import Repositories from "./Repositories";
import { Wrapper, Header, SubHeader, Icon } from "./styled";

const Portfolio = ({ title }) => {
    return (
        <Wrapper>
            <Icon />
            <Header>{title}</Header>
            <SubHeader>My recent projects</SubHeader>
            <Repositories />
        </Wrapper>
    );
};
export default Portfolio;