import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {



    return (
        <div className="bg-blue-50">
            <div className="container pt-32 ">
                <h2 className="text-[35px] font-bold text-violet-600">Softgroup</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10 ">
                    <div className="cursor-pointer">
                        <h4 className="text-gray-800 text-[25px] font-medium">About us</h4>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#direction">Direction</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#command">Command</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#tools">Tools</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#clients">Clients</Link>
                        </li>
                    </div>
                    <div>
                        <h4 className="text-gray-800 text-[25px] font-medium">Services</h4>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#">Development of mobile applications</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#">Development and implementation ERP systems</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#">User interface, User experience design</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#">IT consulting</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#">Optimization IT consulting infrastructure</Link>
                        </li>
                    </div>
                    <div>
                        <h4 className="text-gray-800 text-[25px] font-medium">Portfolio</h4>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#delever">Delever</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#smsuz">Sms.uz</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#goodzone">Goodzone</Link>
                        </li>
                        <li className="list-none text-[18px] text-violet-600 font-medium">
                            <Link href="#iman">Iman</Link>
                        </li>
                    </div>
                </div>
                <span className="block h-[1px] w-full text-violet-600"></span>

                <div className="flex  justify-between items-center py-5">
                    <p className="text-violet-600 text-[16px] font-medium">
                        © 2024 Softgroup All rights reserved
                    </p>
                    <span className="flex justify-center items-center gap-4">
            <Link href="https://t.me/Softgroup_uz">
              <span className="text-violet-200 p-5 rounded-full flex justify-center items-center">
                <Image width={30} height={30} src="/assets/icons/telegram.png" alt="telegram"/>
              </span>
            </Link>
           <Link href="">
           <span className="text-violet-200 p-5 rounded-full flex justify-center items-center">
              <Image width={30} height={30} src="/assets/icons/instagram.png" alt="instagram"/>
            </span>
           </Link>
            <Link href="https://www.instagram.com/digitall_uz/">
            <span className="text-violet-200 p-5 rounded-full flex justify-center items-center">
              <Image width={30} height={30} src="/assets/icons/facebook.png" alt="Facebook"/>
            </span>
            </Link>
          </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
