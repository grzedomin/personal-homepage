import { Wrapper, Image, Content, Caption, Header, Description, Button, ButtonIcon } from "./styled";
import Photo from "./images/Photo.png"
import { aboutStrings} from "./aboutStrings";

const About = () => {
    return (
        <Wrapper>
            <Image src={Photo} alt="Grzegorz Domin" />
            <Content>
                <Caption>{aboutStrings.label}</Caption>
                <Header>
                    {aboutStrings.name}
                </Header>
                <Description>
                   {aboutStrings.description}
                </Description>
                <Button href="mailto:grze.domin98@gmail.com">
                    <ButtonIcon />
                    {aboutStrings.buttonLabel}
                </Button>
            </Content>
        </Wrapper>
    );
};
export default About;