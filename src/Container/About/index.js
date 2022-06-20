import { Wrapper, Image, Content, Caption, Header, Description } from "./styled";
import Photo from "../../images/Photo.png"

const About = () => {

    return (
        <Wrapper>
            <Image src={Photo} alt="" />
            <Content>
                <Caption>THIS IS</Caption>
                <Header>
                    Grzegorz Domin
                </Header>
                <Description>
                    👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
                </Description>
            </Content>
        </Wrapper>
    );
};

export default About;