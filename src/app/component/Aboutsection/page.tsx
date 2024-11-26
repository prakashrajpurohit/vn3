"use client"; // This ensures the component is client-side only
import React, { useEffect } from "react";
import { TbArrowRight } from "react-icons/tb";
import Image from "next/image";
import Lineimg from "../../../../public/1 line white 1.png";
import Lineimg2 from "../../../../public/1 line white 1 (1).png";
import Lineimg3 from "../../../../public/White line logo.png";
import Mask from "../../../../public/Mask group (5).png";
import recentagle from "../../../../public/Rectangle 184.png";
import AI from "../../../../public/Ai.png";
import Uiux from "../../../../public/uiux.png";
import Vrar from "../../../../public/vrar.png";
import Recen199 from "../../../../public/Mask group (7).png";
import Ellipse from "../../../../public/Ellipse 61.png";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Faq from "../Mobile-faq/page";
import "aos/dist/aos.css";

export default function Page() { // Capitalize component name
  useEffect(() => {
    // Dynamically import AOS to prevent SSR issues
    import("aos").then(AOS => {
      AOS.init({
        duration: 1000, // Customize options here
      });
    });
  }, []);

  return (
    <div className="">
      <div className="text-[#ffffff] sm:block hidden py-[50px] xl:px-0 px-[20px]">
        <div className="max-w-[1204px] mx-auto h-[694px] relative ">
          <div
            className="lg:max-w-[694px] max-w-[494px] lg:h-[694px] h-[494px]  z-10"
            data-aos="fade-right"
          >
            <Image
              src={recentagle}
              alt="Logo"
              className=""/>
          </div>
          <div
            className="z-20 absolute lg:top-[20%] top-[7%] lg:right-[68px] right-[12px] lg:max-w-[513px] max-w-[433px] "
   
            data-aos="fade-left"
          >
            <h2 className="lg:text-[36px] text-[30px] text-[#ffffff] font-handel">About </h2>
            <h1 className="font-bold lg:text-[52px] text-[46px] font-handel">
              VENTURE <span className="text-[#1654C1]">NXT</span>{" "}
            </h1>
            <div className="lg:text-[18px] text-[17px] font-medium text-[#ffffff]">
              <p className="font-poppins  ">
              At VentureNxt, we believe that the journey from a business idea to a thriving enterprise should be met with clarity, confidence, and dynamic support. Our platform is designed for visionaries, whether they're entrepreneurs ready to kick-start their first venture or established enterprises seeking new growth pathways. 
              </p>

              <p className="lg:pt-[30px] pt-[20px] font-poppins">
              With us, every business has a partner in navigating the complex landscape of today’s competitive market.
              </p>
            </div>
            <div className="text-[#ffffff] mt-[40px]">
              <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* first section mobile responsive */}
      <div className="text-[#ffffff]  sm:hidden block">
        <div className="max-w-[1204px] mx-auto  sm:px-[0px] px-[20px]">
        <div
            className="max-w-[765px]"
            data-aos="fade-right"
          >
            <h1 className="text-[18px] leading-[30px] font-medium text-center tracking-[2px] uppercase font-handel text-[#ffffff]">ABOUT</h1>
            <h1 className="text-center font-bold leading-[48px] mx-auto text-[44px] font-handel">
              Venture <span className="text-[#1654C1]">NXT</span>{" "}
             
            </h1>
            <div className="text-[16px] font-medium text-[#ffffff] pt-[15px]">
            <p className="font-poppins  ">
              At VentureNxt, we believe that the journey from a business idea to a thriving enterprise should be met with clarity, confidence, and dynamic support. Our platform is designed for visionaries, whether they're entrepreneurs ready to kick-start their first venture or established enterprises seeking new growth pathways. 
              </p>

              <p className="lg:pt-[30px] pt-[20px] font-poppins">
              With us, every business has a partner in navigating the complex landscape of today’s competitive market.
              </p>
            </div>
            <div className="text-[#ffffff] mt-[34px] ">
              <button className="text-[22px] px-[35px] font-handel mx-auto bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center ">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
          <div
            className="max-w-[378px] mx-auto mt-[50px]  h-[378px]  "
            data-aos="fade-left"
          >
            <Image
              src={recentagle}
              alt="Logo"
              className=""/>
          </div>
          
        </div>
      </div>

      <div className="text-[#ffffff] sm:block hidden py-[50px] xl:px-[0px] px-[20px]">
        <div className="max-w-[1204px] mx-auto h-[694px] relative  flex flex-row-reverse">
          <div
            className="lg:max-w-[694px] max-w-[494px] lg:h-[694px] h-[494px]  z-10"
            data-aos="fade-left"
          >
            <Image
              src={Mask}
              alt="Logo"
              className=""/>
          </div>
          <div
            className="z-20 absolute lg:top-[20%] top-[10%] left-[0px] lg:my-[0px] my-auto lg:max-w-[765px] max-w-[450px]"
            data-aos="fade-right"
          >
            <h2 className="lg:text-[36px] text-[30px] text-[#ffffff] font-handel">Growth Consulting</h2>
            <h1 className="font-bold lg:text-[52px] text-[46px] lg:leading-[60px] leading-[52px] font-handel">
              Why A Brand Need <br /><span className="text-[#1654C1]">Branding</span>{" "}
              And <span className="text-[#1654C1]">Growth Consulting</span>{" "}
            </h1>
            
            <div className="text-[#ffffff] mt-[40px]">
              <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* second section mobile responsive */}
      <div className="text-[#ffffff]  py-[50px] sm:hidden block">
        <div className="max-w-[1204px] mx-auto sm:px-[0px] px-[20px]">
        <div
            className="max-w-[765px]"
            data-aos="fade-right"
          >
            <h1 className="text-[18px] font-medium text-center tracking-[2px] uppercase text-[#ffffff] font-handel">Growth Consulting</h1>
            <h1 className="text-center font-bold leading-[48px] mx-auto text-[44px] font-handel">
              Why A Brand Need <span className="text-[#1654C1]">Branding</span>{" "}
              And <span className="text-[#1654C1]">Growth Consulting</span>{" "}
            </h1>
            <div className="text-[#ffffff] mt-[34px] ">
              <button className="text-[22px] px-[35px] mx-auto font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center ">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
          <div
            className="max-w-[378px] mx-auto mt-[50px]  h-[378px]  "
            data-aos="fade-left"
          >
            <Image
              src={Mask}
              alt="Logo"
              className=""/>
          </div>
          
        </div>
      </div>

      
<div className="sm:px-[0px] px-[20px]">
      <div className="text-[#ffffff] sm:block hidden  ">
        <div className="max-w-[1204px] h-[800px] mx-auto  flex items-center justify-center">
          <div className=" text-center relative">
            <h1 className="font-bold lg:text-[52px] text-[48px] font-handel uppercase " data-aos="fade-down">
              Services offered by
            </h1>
            <Image
              src={Lineimg}
              alt="Logo"
              className=" mx-auto  pt-[30px] lg:w-[full] w-[330px]  "
              data-aos="fade-up"
            />
            <Image
              src={Ellipse}
              alt="Logo"
              className=" absolute top-5 max-w-[1000px] mx-auto  left-[-175px]"
            />
          </div>
        </div>
      </div>

      {/* third section mobile responsive */}
      <div className="text-[#ffffff]   sm:hidden block">
        <div className="max-w-[1204px] h-[800px] mx-auto  flex items-center justify-center">
          <div className=" text-center relative">
            <h1 className="leading-[46px] text-[44px] font-handel uppercase" data-aos="fade-down">
              Services <br /> Offered By
            </h1>
            <Image
              src={Lineimg2}
              alt="Logo"
              className=" mx-auto pt-[30px] "
              data-aos="fade-up"
            />
            <Image
              src={Ellipse}
              alt="Logo"
              className=" absolute   max-w-[600px] mx-auto left-[-125px]"
            />
          </div>
        </div>
      </div>
</div>

      {/* <div className="text-[#ffffff] max-w-[1440px] mx-auto mb-[50px]">
        <div className="max-w-[1204px] mx-auto grid grid-cols-2">
          <div className="col-span-1">
            <Image src={Iphone} alt="Logo" className=" mx-auto pt-[30px]" />
          </div>
          <div className="col-span-1 my-auto">
            <h2 className="text-[22px] text-[#ffffff]">
              Lorem Ipsum is simply dummy
            </h2>
            <h1 className="font-bold text-[52px] leading-[60px] mt-[22px]">
              WEBSITE DEVELOPMENT
            </h1>
            <div className="text-[18px] font-medium text-[#ffffff] mt-[20px]">
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and setting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500
              </p>
            </div>
            <div className="text-[#ffffff] mt-[40px]">
              <button className="text-[20px] px-[35px] bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="text-[#ffffff] max-w-[1440px] xl:px-[0px]  px-[30px] mx-auto mt-[50px]">
        <div className="max-w-[1204px] mx-auto  py-[30px]">
          <h2 className="sm:text-[36px] text-[30px] text-[#ffffff] font-handel">Glimes Of Services</h2>
        </div>
        <div className="max-w-[1204px] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="col-span-1 " data-aos="fade">
            <div className="">
              <Image
                src={Recen199}
                alt="Logo"
                className=" h-[400px]  rounded-tr-[14px] rounded-tl-[14px]"
                
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="sm:text-[36px] font-handel text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                  Computer Generated images
                </h2>
                <p className="sm:text-[18px] text-[14px] font-poppins sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                Bring your concepts to life with photorealistic visuals and immersive animations. At VentureNxt, our CGI services allow you to showcase ideas with stunning detail and realism, ideal for product previews, architectural renderings, and visual storytelling. With CGI, we turn imagination into high-quality digital experiences that captivate and convince.
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 " data-aos="fade">
            <div className="">
              <Image
                src={AI}
                alt="Logo"
                className=" h-[400px]  rounded-tr-[14px] rounded-tl-[14px]"
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="sm:text-[36px] font-handel text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                Artificial intelligence
                </h2>
                <p className="sm:text-[18px] font-poppins text-[14px] sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                Revolutionize your business processes with our AI-driven solutions. From predictive analytics to machine learning models, VentureNxt integrates AI to enhance decision-making, automate workflows, and deliver personalized customer experiences. Our AI capabilities empower you to stay ahead with smart, data-driven insights.
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] font-handel px-[35px] bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 " data-aos="fade">
            <div className="">
              <Image
                src={Uiux}
                alt="Logo"
                className=" h-[400px]  rounded-tr-[14px] rounded-tl-[14px]"
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="sm:text-[36px] font-handel text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                UI/UX
                </h2>
                <p className="sm:text-[18px] font-poppins text-[14px] sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                Create intuitive, user-friendly interfaces that enhance engagement and satisfaction. VentureNxt’s UI/UX design team crafts experiences centered around user needs, ensuring each interaction is seamless and meaningful. Whether you’re building an app, website, or digital platform, our designs focus on simplicity, functionality, and elegance.
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] font-handel px-[35px] bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 " data-aos="fade">
            <div className="">
              <Image
                src={Vrar}
                alt="Logo"
                className=" h-[400px] rounded-tr-[14px] rounded-tl-[14px]"
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="font-handel sm:text-[36px] text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                VR/AR
                </h2>
                <p className="sm:text-[18px] font-poppins text-[14px] sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                Step into the future with immersive AR and VR experiences. At VentureNxt, we blend cutting-edge technology with creative storytelling to design virtual environments that captivate audiences and offer interactive, impactful experiences. From training simulations to virtual product demos, our AR/VR solutions bring a new dimension to engagement.
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-[1204px] mx-auto pt-[60px] p">
          <div className="text-[#ffffff] ">
            <button className="text-[20px] mx-auto px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
              Browse all work <TbArrowRight className="ml-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-[#ffffff] max-w-[1440px] my-[50px] mx-auto   lg:px-[0px] px-[20px]">
        <div className="sm:max-w-[817px] max-w-[378px]  mx-auto  flex items-center justify-center ">
          <div className=" text-center sm:mx-[0px] mx-[20px] ">
            <h1 className="sm:font-bold font-handel lg:text-[52px]  sm:text-[42px] text-[23px] sm:leading-[58px] leading-[32px]">
              Its Time Make Your Decision Business Growth
            </h1>
            <p className="sm:text-[18px] text-[14px] sm:leading-[30px] font-poppins leading-[20px] font-medium pt-[14px] sm:px-[0px] px-[40px]">
              Ditch the “Coming Soon” page and sign up below to start getting
              your customers fired up about your launch.
            </p>
            <div className="mt-[32px] gap-6 flex justify-center">
              <input
                type="text"
                className="rounded-[7px] px-[12px] sm:max-w-none max-w-[220px] h-[51px] text-[#000] "
              />
              <div className="text-[#ffffff]  ">
                <button className="text-[20px] px-[35px] rounded-[7px] font-handel bg-[#002BAA] py-[10px] ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




        {/* footer */}
      <div className="text-[#ffffff] sm:block hidden max-w-[1204px] xl:px-[0px] px-[30px]  my-[100px] mx-auto  ">
        <div className="">
          {/* <p className="text-[14px] font-poppins text-[#ffffff] ">
            Lorem Ipsum is simply dummy text of{" "}
          </p> */}
          <ul className="text-[#ffffff] lg:text-[26px] text-[22px] mt-[20px] font-handel">
            <li>
              <a href="" className="pr-[23.50px] ">
                Home
              </a>
              <a href="" className="px-[23.50px]">
                About us
              </a>
              <a href="" className="px-[23.50px]">
                Service
              </a>
              <a href="" className="px-[23.50px]">
                Chat
              </a>
              <a href="" className="px-[23.50px]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <footer className=" py-4 text-white mt-[50px]">
          <div className=" mx-auto flex justify-between items-center gap-4">
            <div className="text-[16px] font-poppins">
              2024© Venturenxt. All rights reserved
            </div>

            <div className="flex space-x-12">
              <a
                href="https://www.instagram.com/businessx10x?igsh=MXVraGI0N2pqcTd3Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <FaInstagram className="w-9 h-9" />
                <span className="text-[16px] font-poppins">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/business10x/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <FaLinkedinIn className="w-9 h-9" />
                <span className="text-[16px] font-poppins ">LinkedIn</span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <RiTwitterXFill className="w-9 h-9" />
                <span className="text-[16px] font-poppins">Twitter</span>
              </a>
            </div>
          </div>
        </footer>
      </div>

       {/*  */}
      <div className="text-[#ffffff] sm:hidden block max-w-[430px] my-[100px] mx-auto sm:px-[0px] px-[20px] ">
        <div className="">
        <Image
              src={Lineimg3}
              alt="Logo"
              className="  pt-[30px]"
              
            />
          {/* <p className="text-[16px] font-poppins font-medium pt-[10px] leading-[22px] text-[#ffffff] ">
            Lorem Ipsum is simply <br />
             dummy text of{" "}
          </p> */}

          
          <Faq/>


        </div>
        <footer className=" py-4 text-white mt-[50px]">
          <div className="">
          <div className="flex space-x-6 justify-center items-center mx-auto">
              <a
                href="https://www.instagram.com/businessx10x?igsh=MXVraGI0N2pqcTd3Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaInstagram className="w-9 h-9" />
              </a>
              <a
                href="https://www.linkedin.com/company/business10x/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaLinkedinIn className="w-9 h-9" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <RiTwitterXFill className="w-9 h-9" />
              </a>
            </div>
            <div className="text-[16px] text-center font-poppins leading-[20px] pt-[15px]">
              2024© Venturenxt. All rights reserved
            </div>

            
          </div>
        </footer>
      </div>
    </div>
  );
}
