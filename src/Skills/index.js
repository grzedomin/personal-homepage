import { Wrapper, Header, Content, List, Item, Marker } from "./styled";
import { skillsList } from "./skillsList";

const Skills = () => (
    <Wrapper>
        <>
            <Header>My skillset includes</Header>
            <Content>
                <List>
                    {skillsList.map(skill =>
                        <Item key={skill}>
                            <Marker />{skill}
                        </Item>
                    )}
                </List>
            </Content>
        </>
    </Wrapper>
);
export default Skills;