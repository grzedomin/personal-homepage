import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {
    
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
            }
            catch (error) {
                setFetchState({
                    state: "error",
                });
            }
        };
        setTimeout(fetchRepos, 2000);
    }, []);
    
    return {
        fetchState,
        repos,
    };
};