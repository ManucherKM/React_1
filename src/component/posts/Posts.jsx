import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import PostItem from "./postItem/PostItem";

const Posts = () => {

    const [posts, setPostsRes] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPostsRes(data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <div className="container my-4">
            {loading && <Loader />}
            {posts.map(post => {
                return <PostItem key={post.id} post={post} />
            })}
        </div >
    )
}

export default Posts;