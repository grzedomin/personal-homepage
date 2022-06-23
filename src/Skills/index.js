import { Wrapper, Header, Content, List, Item, Marker } from "./styled";
import { skillsList } from "./skillsList";

const Skills = ({ title }) => (
    <Wrapper>
        <>
            <Header>{title}</Header>
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