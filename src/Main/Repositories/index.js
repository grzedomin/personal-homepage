import Loading from "./Loading";
import LoadingError from "./LoadingError";
import { Repos, Tile, Header, Description, Demo, Repo, Link, LoadingInfo } from "./styled";
import { useFetchData } from "./useFetchData";



const Repositories = () => {

    const {
        fetchState,
        repos
    } = useFetchData();

    return (
        <>
            {fetchState.state === "loading" ?
                (
                <>
                    
                    <Loading />
                </>
                )
                : fetchState.state === "error" ?
                    (
                        <LoadingError />
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