import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const News = () => {
    const {data:news} = useLoaderData();
   
    return (
        <div>
             <h3 className='text-[#403F3F] text-xl font-semibold mb-3 '>Dragon News Home</h3>
             <p className='text-lg mb-2'>News found in this category({news.length})</p>
            <div className=''>
                {
                    news.map((singleNews,idx)=> <Card key={idx}  news={singleNews} />)
                }
            </div>
        </div>
    );
};

export default News;