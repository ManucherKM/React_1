import { useEffect, useState } from "react";
import axios from "axios";
import classStyle from "./Posts.module.css";

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
            {loading && <div className={classStyle.wrapper + "wrapper"}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {posts.map(post => {
                return <h1 key={post.id}>{post.id}</h1>
            })}
        </div>
    )
}

export default Posts;