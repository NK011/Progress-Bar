import React, { useEffect, useReducer } from "react";
import styles from "./ProgressBar.module.css";

export const ProgressBar = () => {
    const reducer = (state, action) => {
        var element = document.getElementById("test");
        element.style.setProperty("--left-pos", `${100 - (state + action)}%`);
        return state + action;
    };
    const [progress, dispatch] = useReducer(reducer, 0);

    useEffect(() => {
        const interval = setTimeout(() => dispatch(1), 200);
        if (progress >= 100) {
            clearTimeout(interval);
        }

        return () => clearTimeout(interval);
    }, [progress]);

    return (
        <div className={styles.container}>
            <h2>Progress Bar</h2>
            <div id="test" className={styles.container__progress_bar}>
                <p>{progress}%</p>
            </div>
        </div>
    );
};
