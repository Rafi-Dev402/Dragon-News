import headerLogo from "../assets/logo.png"

const Header = () => {
    return (
        <div>
            {/* Image div */}
            <div className=" flex justify-center mt-10">
                <img className="w-[300px] md:w-[400px] lg:w-[400px]" src={headerLogo} alt="" />
            </div>
            <p className="text-center mt-4 text-slate-500 text-sm md:text-sm lg:text-lg font-medium">Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;