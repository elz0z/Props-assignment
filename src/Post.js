export default function Post({ postTitle, postBody }) {
    const postStyle = {
        border: "3px solid teal",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15px"
    };
    return (
        <div style={postStyle}>
            <h2
                style={{
                    width: "100%",
                    textAlign: "center",
                    margin: "0",
                    padding: "10px"
                }}
            >
                {postTitle}
            </h2>
            <hr style={{ width: "95%" }} />
            <p style={{ margin: "0", padding: "10px" }}>{postBody}</p>
        </div>
    );
}
