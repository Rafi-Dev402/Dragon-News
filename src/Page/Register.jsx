import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';

const Register = () => {
    const home = useNavigate()
    const {registerUser,user} = useContext(AuthContex);
    console.log(user)
    const handleRegister =(event)=>{
        event.preventDefault();
       

        const form = new FormData(event.target)
        const name = form.get('name')
        const photo = form.get('photoUrl')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email,password)
        
        registerUser(email,password)
        .then((result)=>{
            console.log(result.user)
            event.target.reset();
            home('/category/:01');
        })
        .catch((error)=>{
            console.log("Error",error.message)
        });
        
    }
    return (
        <div className='flex justify-center items-center min-h-[820px]'>
            <div className="card bg-base-100 w-full max-w-xl p-0 md:p-0 lg:p-10 shrink-0 rounded-none">
                <p className='text-2xl font-semibold text-center pt-5 text-[#403F3F] mb-10'>Register your account</p>
                <div className='px-5'>
                    <hr className='border text-[#F3F3F3]' />
                </div>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered rounded-sm bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Photo URL</span>
                        </label>
                        <input name='photoUrl' type="text" placeholder="photo URL" className="input input-bordered rounded-sm bg-[#F3F3F3]" required />
                    </div>
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
                    </div>
                    <div className="form-control">
                        <label className="label flex justify-start gap-2 cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-base font-normal text-[#706F6F]">Accept Term & Conditions</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white hover:text-black text-lg font-semibold bg-[#403F3F] rounded-sm">Register</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Register;