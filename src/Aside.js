import Button from "./Button";
export default function Aside() {
    return (
        <aside
            style={{
                padding: "5%",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2%",
                border: "3px solid teal"
            }}
        >
            <Button>
                <p style={{ padding: "0", margin: "0" }}
                >Most Viewed</p>
            </Button>
            <Button>
                <div>
                    Beautiful flowers
                    <img
                        style={{ width: "100%" }}
                        alt="Beautiful teal flowers"
                        src="images.jpeg"
                    />
                </div>
            </Button>
            <Button>Like 👍</Button>
        </aside>
    );
}
