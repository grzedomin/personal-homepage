import { Wrapper, Header, SubHeader, ErrorIcon } from "./styled";


const LoadingError = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went wrong...</Header>
        <SubHeader>
            Sorry, failed to load Github projects. <br />
            You can check them directly on Github.
        </SubHeader >
    </Wrapper>
);
export default LoadingError;