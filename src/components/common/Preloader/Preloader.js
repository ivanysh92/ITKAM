import React from "react";
import preloader from "../../../assets/image/loading-animated.gif";
import s from "./Preloader.module.css";


let Preloader = (props) => {
    return <div style = {{backgroundColor: "white"}}>
        <img className={s.preloader} src={preloader} />
        </div>
    }

    export default Preloader;