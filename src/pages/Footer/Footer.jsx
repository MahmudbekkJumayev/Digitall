import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <div className="container pt-32 ">
        <h2 className="text-[35px] font-bold text-violet-600">Softgroup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10 ">
          <div className="cursor-pointer">
            <h4 className="text-gray-800 text-[25px] font-medium">About us</h4>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#direction">Direction</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#command">Command</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#tools">Tools</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#clients">Clients</a>
            </li>
          </div>
          <div>
            <h4 className="text-gray-800 text-[25px] font-medium">Services</h4>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#">Development of mobile applications</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#">Development and implementation ERP systems</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#">User interface, User experience design</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#">IT consulting</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#">Optimization IT consulting infrastructure</a>
            </li>
          </div>
          <div>
            <h4 className="text-gray-800 text-[25px] font-medium">Portfolio</h4>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#delever">Delever</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#smsuz">Sms.uz</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#goodzone">Goodzone</a>
            </li>
            <li className="list-none text-[18px] text-violet-600 font-medium">
              <a href="#iman">Iman</a>
            </li>
          </div>
        </div>
        <span className="block h-[1px] w-full text-violet-600"></span>

        <div className="flex  justify-between items-center py-5">
          <p className="text-violet-600 text-[16px] font-medium">
            © 2024 Softgroup All rights reserved
          </p>
          <span className="flex justify-center items-center gap-4">
            <a href="https://t.me/Softgroup_uz">
              <span className="text-violet-200 p-5 rounded-full flex justify-center items-center">
                <img src="/assets/icons/telegram.png" alt="telegram" />
              </span>
            </a>
           <a href="">
           <span className="text-violet-200 p-5 rounded-full flex justify-center items-center">
              <img src="/assets/icons/instagram.png" alt="instagram" />
            </span>
           </a>
            <a href="https://www.instagram.com/digitall_uz/">
            <span className="text-violet-200 p-5 rounded-full flex justify-center items-center">
              <img src="/assets/icons/facebook.png" alt="Facebook" />
            </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
