

import { CiBookmark } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { Rating } from '@mui/material';
import { FaEye } from "react-icons/fa";

const Card = ({ news }) => {
    const {
        title,
        author,
        published_date,
        img,
        thumbnail_url,
        rating,
        total_view,
        details,
    } = news;
    // console.log(news)
    return (
        <div className='mb-3 border'>
            {/* Author div */}
            <div className='bg-[#F3F3F3] flex justify-between items-center p-3 mb-4'>
                {/* Img div */}
                <div className='flex items-center gap-x-2'>
                    <img className='w-10 rounded-full' src={author.img} alt="" />
                    <div>
                        <h3 className='text-base font-semibold text-[#403F3F]'>
                            {
                                (author.name) ? author.name : "Unknown"
                            }
                        </h3>
                        <p className='text-sm font-normal text-[#706F6F]'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <CiBookmark className='text-xl' />
                    <IoMdShare className='text-xl' />
                </div>
                {/* className='w-[800px] h-[268px] object-cover overflow-hidden mx-auto' */}
            </div>
            {/* News Div */}
            <div className='p-3'>
                <h3 className='text-[#403F3F] text-xl font-bold mb-5'>{title}</h3>
                <div className='mb-8'>
                    <img className='w-[800px] h-[280px] object-cover overflow-hidden mx-auto' src={thumbnail_url} alt="" />
                </div>
                <p className='text-[#706F6F] text-base font-semibold mb-2'>{details}</p>
                <a className='text-orange-500 text-base font-semibold' href="">Read More</a>
                <hr className='mt-4 mb-4 border' />
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <Rating name="half-rating" defaultValue={rating.number} precision={0.5} />
                        <p className='text-[#706F6F] text-base font-medium'>{rating.number}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <FaEye className="text-xl text-[#706F6F]" /> <span className='text-[#706F6F] text-base font-medium'>{total_view }</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;