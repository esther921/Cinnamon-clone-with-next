import Link from "next/link"
import Button from "../button"
import Header_paragraph from "../header-paragraph"

export default function Footer() {
    return (
       <>
       <section className="pb-12">
        <div >
            
            <div className="pt-36 px-16 flex flex-col text-white ">
                 <div className=" grid grid-cols-3 flex-1 pb-24">
                    <div className="col-span-1 flex flex-col gap-8">
                    <h1 className="text-3xl tracking-wide font-bold">CINNAMON</h1>
                    <ul className=" flex flex-col text-zinc-400">
                    <li className="">
                            <Link href={""}>Home</Link>
                        </li>
                        <li className="">
                            <Link href={""}>Projects</Link>
                        </li>
                        <li className="">
                        <Link href={""}>Services</Link>
                        </li>
                        <li className="">
                        <Link href={""}>About Us</Link>
                        </li>
                        <li className="">
                        <Link href={""}>Careers</Link>
                        </li>
                        <li className="">
                        <Link href={""}>Blog</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="col-span-2 space-y-10 pl-16 pt-6">
                    <h1 className="text-3xl font-bold">All software, zero bullshit</h1>
                    <div className="grid grid-cols-3 space-x-24">
                        <Header_paragraph heading={"Zagreb"} paragraph={"Slavonska avenija 6,10000, Zagreb, Croatia +385 99 347 3103"}/>
                        <Header_paragraph heading={"New York"} paragraph={"500 7th Ave, New York, NY 10018, United States"}/>
                        <Header_paragraph heading={"Belgrade"} paragraph={"Bulevar vojvode Mišića 37 11000, Belgrade, Serbia"}/>
                    </div>
                    </div>
                </div> 
                <div className=" flex flex-col gap-8 divide-y divide-zinc-500">
                    <div className="grid grid-cols-3 gap-56">
                        <Link className="place-self-end underline underline-offset-1 pr-8" href={""}>hello@cinnamon.agency</Link>
                        <div className="flex flex-col gap-4 pr-12 pt-6 w-[18rem]">
                           <p className="font-bold ">
                            Our newsletter
                        </p> 
                        <div class="flex items-center border-b border-zinc-400 py-2">
                            <input className="text-lg bg-transparent text-zinc-400 outline-none underline underline-offset-8" type={'text'} placeholder={'Your E-mail'}/>
                        </div>
                            
                            <Button text={"Subscribe"}/>
                        </div>
                        <div className="flex flex-col gap-4 pt-12">
                            <picture>
                                <img className="w-[12rem]" src="/Images/Footer/pangea-badge.svg" alt=""/>
                            </picture>
                            <picture>
                                <img className="max-w-[12rem]" src="/Images/Footer/clutch-badge.webp" alt=""/>
                            </picture>
                        </div>

                        
                    </div>
                    <div className="flex gap-8 justify-between pt-8">
                        <div className="flex gap-8 text-sm text-zinc-400">
                            <p>2022 Cinnamon</p>
                            <p className="underline underline-offset-1">Privacy Policy</p>
                        </div>
                        <div>
                        <ul className=" flex gap-8">
                        <li className="">
                            <Link href={""}>
                                
                                <picture>
                                    <img src="/Images/Footer/linkedin.svg" alt=""/>
                                </picture>
                            </Link>
                        </li>
                        <li className="">
                        <Link href={""}>
                                <picture>
                                    <img src="/Images/Footer/dribble.svg" alt=""/>
                                </picture>
                            </Link>
                        </li>
                        <li className="">
                        <Link href={""}>
                                <picture>
                                    <img src="/Images/Footer/behance.svg" alt=""/>
                                </picture>
                            </Link>
                        </li>
                        <li className="">
                        <Link href={""}>
                                <picture>
                                    <img src="/Images/Footer/instagram.svg" alt=""/>
                                </picture>
                            </Link>
                        </li>
                        <li className="">
                        <Link href={""}>
                                <picture>
                                    <img src="/Images/Footer/facebook.svg" alt=""/>
                                </picture>
                            </Link>
                        </li>
                        <li className="">
                        <Link href={""}>
                                <picture>
                                    <img src="/Images/Footer/wifi.svg" alt=""/>
                                </picture>
                            </Link>
                        </li>
                    </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
          
        </div>
               
       </section>

       </>
    )
}