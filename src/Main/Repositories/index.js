import { Repos, Tile, Header, Description, Demo, Repo, Link } from "./styled";
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
                {repos.map((item) => {
                    return (
                        <Tile key={item.id}>
                            <Header>{item.name}</Header>
                            <Description>{item.description}</Description>
                            <Demo>Demo: <Link>{item.html_url}</Link></Demo>
                            <Repo>Code: <Link>{item.html_url}</Link></Repo>
                        </Tile>
                    )})}
            </>
        </Repos>
    );
};
export default Repositories;