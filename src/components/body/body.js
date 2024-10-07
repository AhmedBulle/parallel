import React from "react";
import style from "@/styles/body.module.css";
import Image from "next/image";

const Body = () => {
    return (
        <div className={style.body}>
            <div className={style.wrapper}>
                <div className={style.text}>
                <h1>Building the Future of Web3 Technology in East Africa and Beyond</h1>
                <p>Parallel88 is the leading blockchain engineering group in East Africa and one of the largest in the continent, boasting a team of 60+ developers at our Nairobi Studios.</p>
                <button className={style.buton}>Book a meeting</button>
                </div>
                <div className={style.image}>
                    <Image src="/Group.png" alt="image" width={914} height={590} />
                </div>
            </div>
        </div>
    );

}
export default Body;