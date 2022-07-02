import { Wrapper, Header, SubHeader, ErrorIcon, Button } from "./styled";


const LoadingError = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went wrong...</Header>
        <SubHeader>
            Sorry, failed to load Github projects. <br />
            You can check them directly on Github.
        </SubHeader>
        <Button href="https://github.com/grzedomin" target="_blank">Go to Github</Button>
    </Wrapper>
);
export default LoadingError;