import { useEffect, useState } from "react";
import axios from "axios";

const useFetchHook = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect( () => {
        const fetchUser = async () => {
            try{
                const response = await axios .get(url);
                setUsers(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
        
    }, []);

    return { users, loading, error}
}
export default useFetchHook;