import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import CommentItem from "./commentsItem/CommentItem";

const Comments = () => {

    const [comments, setComments] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments");
                setComments(data);
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

            {
                comments.map(comment => {
                    return <CommentItem key={comment.id} comment={comment} />
                })
            }
        </div>
    )
}
export default Comments;