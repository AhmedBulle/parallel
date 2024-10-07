import React from "react";
import style from "@/styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={style.main}>
            <div className={style.footer}>
                <div className={style.text}>
                    <h1>Parallel</h1>
                    <p>88</p>
                    {/* <Image src="/88.svg" alt="error" width={312} height={76} /> */}
                </div>
                <div className={style.bottom}>
                <h1>Copyright @2023 All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    );
}
export default Footer;