import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import UserItem from "./userItem/UserItem";

const Users = () => {

    const [users, setUsers] = useState([]);

    const [loader, setLoader] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
            setLoader(false);
        }
        fetchData()
    }, [])

    return (
        <div className="container my-4">
            {loader && <Loader />}
            {users.map(user => {
                return <UserItem key={user.id} user={user} />
            })

            }
        </div>
    )
}

export default Users;