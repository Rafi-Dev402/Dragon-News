import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div >
            <div className="flex bg-base-200 p-3 gap-1">
                <p className="bg-[#D72050]  text-base font-medium text-white px-6 py-2 ">Latest</p>
                <Marquee pauseOnHover={true} direction="right" speed={55} className="text-[#403F3F] text-lg font-semibold bg-[#F3F3F3]">
                    <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain.....</p>
                    <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain.....</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;