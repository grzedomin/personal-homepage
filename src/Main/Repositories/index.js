import { Repos, Tile, Header, Description, DemoLink, RepoLink } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";


const Repositories = () => {

    const [fetchState, setFetchState] = useState({
        state: "loading",
    });

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios("https://api.github.com/users/grzedomin/repos");
                setRepos(response.data);
                setFetchState({
                    state: "success",
                });
                console.log(response.data);
            }
            catch (error) {
                setFetchState({
                    state: "error",
                });
                console.log(error)
            }
        };
        setTimeout(fetchRepos);
    }, []);

    return (
        <Repos>
            <>
                <Tile>
                    <Header>Movies Browser</Header>
                    <Description>
                        Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.
                    </Description>
                    <DemoLink>Demo: </DemoLink>
                    <RepoLink>Code: </RepoLink>
                </Tile>
            </>
        </Repos>
    );
};

export default Repositories;