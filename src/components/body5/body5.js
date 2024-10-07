import React from "react";
import style from "@/styles/body5.module.css";
import Image from "next/image";

const Body5 = () => {
    return (
        <div className={style.body5}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h1>Our Mission</h1>
                    <p>To cement & anchor a place for<br/> Afrika’s
most talented minds inside<br /> the largest
tech innovation markets <br/>globally while<br/>
significantly lowering the cost <br/>of tech
development worldwide.</p>
</div>
<div className={style.text2}>
<h1>Our Promise</h1>
<p>1000 in-studio developers by 2026,<br/> withdeveloper rates 5 -10x cheaper than <br/> the Americas
& Europe. Targeting a <br/>$50mm raise to expand to
1000 further <br/>4000 community network</p>
            
             </div>
             </div>
                <div className={style.image}>
                    <Image src="/call us.png" alt="image" width={1142} height={397} />
                </div>
            
        </div>
    );
};export default Body5;
