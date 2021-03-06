import { Wrapper, Caption, Email, Description, Icons, IconLink } from "./styled";
import { ReactComponent as GitHub } from "../svg/GitHub.svg";
import { ReactComponent as Facebook } from "../svg/Facebook.svg";
import { ReactComponent as LinkedIn } from "../svg/LinkedIN.svg";
import { ReactComponent as Instagram } from "../svg/Instagram.svg";

const Footer = () => (
    <Wrapper>
        <Caption>LET'S TALK!</Caption>
        <Email href="mailto:grze.domin98@gmail.com">grze.domin98@gmail.com</Email>
        <Description>
            I'm looking forward to grow up in Front-End languages and skills in proffesional company. If you are interested and want to hire me, feel free to contact me via e-mail or LinkedIn. I'm always open for the new challenges and new job opportunities.
        </Description>
        <Icons>
            <IconLink href="https://github.com/grzedomin" target="_blank"> <GitHub /> </IconLink>
            <IconLink href="https://www.facebook.com/grzegorz.domin.1" target="_blank"> <Facebook /> </IconLink>
            <IconLink href="https://www.linkedin.com/in/grzegorzdomin98" target="_blank"> <LinkedIn /> </IconLink>
            <IconLink href="https://www.instagram.com/grzes.domin/" target="_blank"> <Instagram /> </IconLink>
        </Icons>
    </Wrapper>
);
export default Footer;