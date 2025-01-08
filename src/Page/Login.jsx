import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-[820px]'>
            <div className="card bg-base-100 w-full max-w-xl p-0 md:p-0 lg:p-10 shrink-0 rounded-none">
                <p className='text-2xl font-semibold text-center pt-5 text-[#403F3F] mb-10'>Log in your Acccount</p>
                <div className='px-5'>
                    <hr className='border text-[#F3F3F3]' />
                </div>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered rounded-sm bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered rounded-sm bg-[#F3F3F3]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white text-lg font-semibold hover:text-black bg-[#403F3F] rounded-sm">Login</button>
                    </div>
                    <p className='text-center mt-2 font-semibold text-[#706F6F]'>Dont’t Have An Account ? <Link className='text-[#C4C4C4] font-bold hover:text-blue-500' to={"/auth/register"}>Register</Link> </p>
                </form>

            </div>
        </div>
    );
};

export default Login;