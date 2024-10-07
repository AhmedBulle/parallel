import React from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.wrapper}>
            <div className={style.logo}>
                <Image src="/logo.svg" alt="logo" width={234} height={26} />
            </div>

            <div className={style.menu}>
           <p><a className={style.one} href="https://www.youtube.com/">About</a></p>
           <p1><a className={style.two} href="//">Vision</a></p1>
           <p2><a className={style.three} href="//">Team</a></p2>
           <p3><a className={style.four} href="//">Contact us</a></p3>



            </div>
          
             {/* <li>About</li> */}
                {/* <li>Vision</li> */}
                {/* <li>Team</li> */}
                {/* <li class={style.contact}>Contact us</li> */}
            
            </div>
        </div>
    )
}
export default Navbar;