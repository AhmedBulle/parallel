import React from "react";
import style from "@/styles/body3.module.css";
import Image from "next/image";

const body3 = () => {
    return (
        <div className={style.body3}>
        <div className={style.wrapper}>
            <div className={style.text}>
            <h1>At the heart of our work is a deep commitment to the principles of blockchain technology</h1>
            <Image src="/Frame.png" alt="error" width={504} height={45} />
            <a className={style.line}> <Image src="/line 1.png" alt="error" width={589} height={4} /></a>
            <p>We believe that these principles have the power to transform industries, create new opportunities, and help to build a more equitable and sustainable world.
            </p>
           
            </div>
            <div className={style.image}>
                <Image src="/p8.png" alt="image" width={1000} height={543} />
            </div>
        </div>
    </div>
);
}
export default body3;