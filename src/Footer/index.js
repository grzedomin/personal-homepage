import { Wrapper, Caption, Email, Description, Icons } from "./styled";
import { ReactComponent as GitHub } from "../svg/GitHub.svg";
import { ReactComponent as Facebook } from "../svg/Facebook.svg";
import { ReactComponent as LinkedIn } from "../svg/LinkedIN.svg";
import { ReactComponent as Instagram } from "../svg/Instagram.svg";

const Footer = () => (
    <Wrapper>
        <Caption>LET'S TALK!</Caption>
        <Email href="mailto:grze.domin98@gmail.com">grze.domin98@gmail.com</Email>
        <Description>
            I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
        </Description>
        <Icons>
            <GitHub />
            <Facebook />
            <LinkedIn />
            <Instagram />
        </Icons>
    </Wrapper>
);
export default Footer;