export default function Header() {
    const headerStyle = {
        backgroundColor: "teal",
        marginTop: "0",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        width: "100%",
        marginBottom: "20px",
        boxShadow: "0px 5px 15px rgba(0,0,0,.4)"
    };
    return (
        <header style={headerStyle}>
            <h1 style={{ margin: 0 }}>Props Assignment</h1>
        </header>
    );
}
