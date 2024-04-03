import Header from "./Header";
import Post from "./Post";
import Aside from "./Aside";
function App() {
    return (
        <>
            <Header />
            {/*POST AND SIDEMENU CONTAINER*/}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "85vw",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
                {/*POST CONTAINER*/}
                <main style={{ width: "65%" }}>
                    <Post
                        postTitle="Post 1"
                        postBody="nostrud quis tempor excepteur consectetur non cillum enim commodo eu"
                    />
                    <Post
                        postTitle="Post 2"
                        postBody="proident quis enim pariatur eiusmod proident nulla"
                    />
                    <Post postTitle="Post 3" postBody="incididunt in in adipisicing minim velit aliquip dolore tempor voluptate nostrud occaecat et magna laboris eu cillum voluptate duis dolor" />
                </main>
                {/***POST CONTAINER***/}

                {/*ASIDE CONTAINER*/}
                <div
                    style={{
                        width: "32%"
                    }}
                >
                    <Aside />
                </div>
                {/***ASIDE CONTAINER***/}
            </div>
            {/*POST AND SIDEMENU CONTAINER*/}
        </>
    );
}
export default App;
