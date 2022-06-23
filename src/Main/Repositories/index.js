import LoadingIcon from "./LoadingIcon";
import { Repos, Tile, Header, Description, Demo, Repo, Link, LoadingInfo, LoadingError } from "./styled";
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
                    state: "loading",
                });
                console.log(response.data);
            }
            catch (error) {
                setFetchState({
                    state: "error",
                });
            }
        };
        setTimeout(fetchRepos, 2000);
    }, []);

    return (
        <>
            {fetchState.state === "loading" ?
                (
                <>
                    <LoadingInfo>Please wait, projects are being loaded...</LoadingInfo>
                    <LoadingIcon />
                </>
                )
                : fetchState.state === "error" ?
                    (
                        <LoadingError>Oops, something went wrong!</LoadingError>
                    )
                    :
                    (
                        <Repos>
                            {repos.map((item) => {
                                return (
                                    <Tile key={item.id}>
                                        <Header>{item.name}</Header>
                                        <Description>{item.description}</Description>
                                        <Demo>
                                            Demo:
                                            {item.homepage !== null
                                                ?
                                                <Link href={item.homepage}>{item.homepage}</Link>
                                                : "Project has not been deployed"
                                            }
                                        </Demo>
                                        <Repo>Code:<Link href={item.html_url}>{item.html_url}</Link></Repo>
                                    </Tile>
                                )
                            })}
                        </Repos>
                    )
            }
        </>
    );
};
export default Repositories;