import React from "react";
import style from "@/styles/body4.module.css";
import Image from "next/image";

const body4 = () => {
    return (
        <div className={style.body}>
            <div className={style.wrapper}>
               <div className={style.text}>
                <div className={style.one}>
                <h1>60+</h1>
                <p className={style.gear}>Web3 & Blockchain Developers at <br />
                Parallel88 Nairobi Studios</p>
                </div>
                <div className={style.two}>
                <h2>3000+</h2>
                <p1>Coding Hours by our Web3 <br /> 
                    Developers <br />
                every week across our Studios</p1>
                </div>
                <div className={style.three}>
                <h3>346+</h3>
                <p2>Web3 & Web2 Community network <br />
                developers supported by Parallel88</p2>
                </div>
                <div className={style.four}>
                <h4>36+</h4>
                <p3>dApps & Applications Completed for <br/>
                Web3 & Blockchain projects Globally</p3>
                </div>
               </div>
            </div>
        </div>
    );
}; 
export default body4;