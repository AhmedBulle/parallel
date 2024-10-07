import React from "react";
import style from  "@/styles/body2.module.css";
import Image from "next/image";

const Body2 = () => {
    return (
        <div className={style.body}>
            <div className={style.wrapper}>
            <Image src="/body.png" alt="error" width={1850} height={536} />
            </div>
        </div>

    )
}
export default Body2;