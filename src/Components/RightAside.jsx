import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import playground from "../assets/playground.png";
import classImage from "../assets/class.png";
import swimmingimg from "../assets/swimming.png"
import bgimage from "../assets/bg.png"

const RightAside = () => {
    return (
        <div>
            <h3 className='text-[#403F3F] text-xl font-semibold mb-5'>Log in With</h3>

            <div className='flex flex-col mb-7'>
                <button className="btn btn-outline px-10 text-blue-500 mb-4 "><FcGoogle className='text-xl' />Log in with Google</button>
                <button className="btn btn-outline text-black"><FaGithub className='text-xl' />Log in with Github</button>
            </div>

            <h3 className='text-[#403F3F] text-xl font-semibold mb-5 '>Find Us On</h3>
            <div className='border rounded-md mb-5'>
                <a href="https://www.facebook.com/" target='_blank' className='px-3 py-3 flex items-center gap-2 border-b text-lg font-medium'><FaFacebook />Facebook</a>
                <a href="https://x.com/?lang=en" target='_blank' className='px-3 py-3 flex items-center gap-2 border-b text-lg font-medium'><FaTwitter />Twitter</a>
                <a href="https://www.instagram.com/" target='_blank' className='px-3 py-3 flex items-center gap-2  text-lg font-medium'><RiInstagramFill />Instagram</a>
            </div>
            {/* className='bg-[#F3F3F3]' */}
            <div className='bg-[#F3F3F3] mb-5' >
                <h3 className='text-[#403F3F] text-xl font-semibold pl-5 pt-3'>Q-Zone</h3>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1'>
                    <div className='p-7 border-dotted border-red-700 mb-2'>
                        <img className='w-80 mx-auto ' src={playground} alt="" />
                    </div>
                    <div className='p-7 border-dotted border-red-700 mb-2'>
                        <img className='w-80 mx-auto ' src={classImage} alt="" />
                    </div>
                    <div className='p-7 border-dotted border-red-700 mb-2'>
                        <img className='w-80 mx-auto ' src={swimmingimg} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <img className='w-96' src={bgimage} alt="" />
            </div>
        </div>
    );
};

export default RightAside;