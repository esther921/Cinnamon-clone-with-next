import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";

export default function Navbar() {
        const [scrolled, setScrolled] = useState(false);
      
        const changescrolled = () => {
          window.scrollY >= 10 ? setScrolled(true) : setScrolled(false);
        };
      
        useEffect(() => {
          window.addEventListener("scroll", changescrolled);
          return () => {
            window.removeEventListener("scroll", changescrolled);
          };
        }, []);
        console.log(scrolled)
    return (
        <>
            <div className={"px-16 pt-4 text-white" + (scrolled ? " bg-white text-black pb-4" : "")}>
                <div className="flex justify-between">
                    
                         <p className="text-3xl tracking-wide pt-2 font-bold">CINNAMON</p>
                   
                    <ul className=" flex gap-8 self-end">
                        <li className="pt-3 font-semibold">
                            <Link href={""}>Projects</Link>
                        </li>
                        <li className="pt-3">
                        <Link href={""}>Services</Link>
                        </li>
                        <li className="pt-3">
                        <Link href={""}>About Us</Link>
                        </li>
                        <li className="pt-3">
                        <Link href={""}>Careers</Link>
                        </li>
                        <li className="pt-3">
                        <Link href={""}>Blog</Link>
                        </li>
                        <li className="flex gap-6 pl-4">
                            <button className="border-2 border-white rounded-full  h-12 w-12">
                                <picture className="">
                                    <img className="invert h-4 w-4 ml-4 rotate-90" src="/Images/plain-triangle.png" alt=""/>
                                </picture>
                            </button>
                            <Button text={"Contact Us"}/>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}