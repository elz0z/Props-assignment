import "./buttonstyle.css";
export default function Button({ children }) {
    return (
        <div className={"button"}>
            <button>{children}</button>
        </div>
    );
}
