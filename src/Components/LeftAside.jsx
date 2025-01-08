import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const LeftAside = () => {
    const [categories, setCategorys] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then((response) => response.json())
            .then((result) => setCategorys(result.data.news_category))
    }, [])
    
    
    
    return (
        <div>
            <h3 className='text-[#403F3F] text-xl font-semibold mb-5 '>All Caterogy ({categories.length})</h3>

            {/* `text-[#9F9F9F] text-center text-xl btn bg-base-100 font-medium` */}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 '>
                {
                    [...categories].map(category => 
                        <NavLink  
                        to={`/category/${category.category_id}`} key={category.category_id} 
                        className={`text-[#9F9F9F] text-center text-xl btn  font-medium `}>{category.category_name}</NavLink>
                    )
                }
               
            </div>
           
        </div>
    );
};

export default LeftAside;