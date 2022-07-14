import classStyle from "./CommentItem.module.css";

const CommentItem = ({ comment }) => {
    return (
        <div className={classStyle.wrapper + " my-3"}>
            <div className="mx-5">
                <img className={classStyle.img} src="https://i1.sndcdn.com/avatars-000274465248-9ebsri-t500x500.jpg" alt="Photo" />
            </div>
            <div>
                <p className={classStyle.name + " mb-4"}>{comment.name}</p>
                <p><strong>{comment.body}</strong></p>
            </div>
        </div>
    )
}

export default CommentItem;