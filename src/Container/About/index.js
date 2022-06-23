import { Wrapper, Image, Content, Caption, Header, Description, Button, ButtonIcon } from "./styled";
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
                <Button href="mailto:grze.domin98@gmail.com">
                    <ButtonIcon />
                    Hire Me
                </Button>
            </Content>
        </Wrapper>
    );
};

export default About;