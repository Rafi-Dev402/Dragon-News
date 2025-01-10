import React from 'react';
import Header from '../Components/Header';
import CurrentDate from '../Components/CurrentDate';
import RightAside from '../Components/RightAside';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";


const DetailsLayout = () => {
    const home = useNavigate();
    
    const detailsloder = useLoaderData();
    const detailsData = detailsloder.data[0];
    // console.log(detailsData)
    const {
        title,
        details,
        image_url,
        category_id


    } = detailsData;
    const haldleback= ()=> {
        home('/category/:04')
    }
    return (
        <div className='font-Poppins'>
            <header className='w-11/12 mx-auto'>
                <Header />
                <CurrentDate />
            </header>
            <section className="w-9/12 mx-auto mt-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-9 gap-6 ">
                <div className=" col-span-6 md:col-span-6 lg:col-span-6  mt-5">
                    
                    <h3 className='text-[#403F3F] text-xl font-semibold mb-3 '>Dragon News</h3>
                    {/* Details card */}
                    <div className='border rounded-lg p-5'>
                        <div className='mb-5 flex justify-center items-center'>
                            <img className='' src={image_url} alt="" />
                        </div>
                        <h3 className='text-[#403F3F] text-xl font-bold mt-5 mb-5'>{title}</h3>
                        <p className='text-[#706F6F] text-base font-semibold mb-8'>{details}</p>
                        <Link to={`/category/${category_id}`}  onClick={haldleback} className='bg-[#D72050] btn text-white '><IoArrowBackOutline className='text-white text-xl' />All news in this category</Link>
                    </div>
                </div>
                <aside className="  col-span-6 md:col-span-6 lg:col-span-3  "><RightAside /></aside>
            </section>

        </div>
    );
};

export default DetailsLayout;