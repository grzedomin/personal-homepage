import { StyledSpinner, LoadingInfo } from "./styled";

const Loading = () => (
    <>
        <LoadingInfo>Please wait, projects are being loaded...</LoadingInfo>
        <StyledSpinner />
    </>
);
export default Loading;