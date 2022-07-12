import { useState } from "react";

import "@mfe/styleguide";
import "./styles.css";

const Root = (props) => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="react-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo" />

            <div className="react-counter-container">
                <div className="react-counter react-counter-minus" onClick={() => setCounter(counter - 1)}>
                    -
                </div>

                <div className="react-counter react-counter-value" onClick={() => setCounter(0)}>
                    {counter}
                </div>

                <div className="react-counter react-counter-plus" onClick={() => setCounter(counter + 1)}>
                    +
                </div>
            </div>
        </div>
    );
};

export default Root;
