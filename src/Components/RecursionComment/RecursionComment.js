import Comment from "./Comment";

const RecursionComment = () => {

    const comments = [
        {
            name: "aa",
            message: "hi",
            replies: [
                {
                    name: "bb",
                    message: "hii",
                    replies: [
                        {
                            name: "cc",
                            message: "hii",
                            replies: [
                                {
                                    name: "dd",
                                    message: "hii"
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name: "ee",
            message: "hi",
            replies: [
                {
                    name: "ff",
                    message: "hii",
                    replies: [
                        {
                            name: "gg",
                            message: "hii",
                            replies: [
                                {
                                    name: "hh",
                                    message: "hii"
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]

    return comments?.map((each, index) => {
        return <Comment key={index} comment={each} />
    })
}

export default RecursionComment;