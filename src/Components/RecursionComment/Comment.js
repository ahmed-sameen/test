const Comment = ({ comment }) => {

    return <div style={{ marginLeft: "10px", marginTop: "3px" }}>
        <div>Name-{comment?.name}</div>
        <div>Message-{comment?.message}</div>
        {comment?.replies?.map((each, index) => {
            return <Comment key={index} comment={each} />
        })}
    </div>
}

export default Comment;