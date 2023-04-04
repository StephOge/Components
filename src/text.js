import { useState } from "react";
import Button from "./button";

const TextInput = (props) => {
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setShowComponent(!showComponent);
        }
    }
    document.addEventListener("keydown", handleClick);

    return (
        <div>
            {showComponent && <p className="search-text">{props.text}</p>}
            <div className="btns">
                <Button text="Google Search" />
                <Button text="I'm feeling lucky" />
            </div>
        </div>
    );
};