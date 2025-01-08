import React, { useEffect, useState } from 'react';

const CurrentDate = () => {
    const [weekday, setWeekday] = useState("")
    const [currentDate, setCurrentDate] = useState("")
    useEffect(() => {
        const nowdate = new Date();
        const formateDateMonthYear = nowdate.toLocaleDateString(undefined, {
            // weekday:"long",
            month: "long",
            year: "numeric",
        })
        const formateDateDay = nowdate.toLocaleDateString(undefined, {
            weekday: "long",

        })
        setCurrentDate(formateDateMonthYear)
        setWeekday(formateDateDay)
    }, [])


    return (
        <div>
            <div className='flex items-center'>
                <span className='  md:text-lg lg:text-xl font-medium mr-1  '>{weekday},</span>
                <span className='  md:text-lg lg:text-xl font-medium text-slate-600 '>{currentDate}</span>
            </div>
        </div>
    );
};

export default CurrentDate;