/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
function Login() {
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    {/* Same as */ }
    <ToastContainer />
    const urlApi = 'http://127.0.0.1:8000/api/';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const checkLogin = () => {
        if (email == "") {
            toast.error('🦄 Email is null!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (password == "") {
            toast.error('🦄 Password is null!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            axios({
                method: 'post',
                url: urlApi + 'checkLoginStudent',
                data: {
                    email: email,
                    password: password,
                }
            }).then((res) => {
                console.log(res.data);
                if (res.data.check == true) {
                    toast.success('🦄 Login Success!', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(res.data.token);
                    localStorage.setItem('token', res.data.token);
                    setTimeout(() => {
                        window.location.replace("/");
                    }, 3000);
                }
            });
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                        
                            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                                <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                    Login
                                </label>
                                <div className="mt-10">
                                    <div>
                                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>
                                    <div className="mt-7">
                                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>
                                    <div className="mt-7 flex">
                                        <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                                            <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                            <span className="ml-2 text-sm text-gray-600">
                                                Remember
                                            </span>
                                        </label>
                                        <div className="w-full text-right">
                                            <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">

                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-7">
                                        <button onClick={checkLogin} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Login
                                        </button>
                                    </div>
                                    <div className="flex mt-7 items-center text-center">
                                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                                        <label className="block font-medium text-sm text-gray-600 w-full">
                                            Login With
                                        </label>
                                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                                    </div>
                                    <div className="flex mt-7 justify-center w-full">
                                        <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Facebook
                                        </button>
                                        <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login