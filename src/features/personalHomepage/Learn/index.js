import { Wrapper, Header, Content, List, Item, Marker } from "./styled";
import { skillsToLearn } from "./skillsToLearn";

const Learn = ({ title }) => (
    <Wrapper>
        <>
            <Header>{title}</Header>
            <Content>
                <List>
                    {skillsToLearn.map(skill =>
                        <Item key={skill}>
                            <Marker />{skill}
                        </Item>
                    )}
                </List>
            </Content>
        </>
    </Wrapper>
);
export default Learn;