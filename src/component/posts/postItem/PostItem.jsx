import classStyle from "./PostItem.module.css"

const PostItem = ({ post }) => {
    return (
        <div className={classStyle.wrapper + " my-3"}>
            <h1 className={classStyle.title}>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem;