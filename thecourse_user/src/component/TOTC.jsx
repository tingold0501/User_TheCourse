// eslint-disable-next-line no-unused-vars
import React from 'react'

function TOTC() {
    return (
        <div>
            {/* component */}
            <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-light text-center text-black sm:text-4xl lg:text-5xl">
                        What is <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">TOTC ?
                        </span>
                    </h2>
                    <p className="mb-20 text-center mt-4 text-lg text-gray-900">TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    </p>
                    <div className="grid grid-cols-2 gap-6 ">
                        <div className="h-[500px] grid grid-cols-1 grid-rows-3 bg-[url('./assets/png/totc1.png')] bg-cover bg-no-repeat">
                            <div className="">
                            </div>
                            <div>
                                <h1 className='text-center font-semibold text-3xl  text-white'>FOR INSTRUCTORS</h1>
                                <div className='flex mt-28 text-white items-center justify-center'>
                                    <button className='w-48 h-16 border-2 rounded-2xl'>Start a class today</button>
                                </div>
                            </div>
                        </div>
                        <div className="h-[500px] grid grid-cols-1 grid-rows-3 bg-[url('./assets/png/totc2.png')] bg-cover bg-no-repeat">
                            <div className="">
                            </div>
                            <div>
                                <h1 className='text-center font-semibold text-3xl  text-white'>FOR STUDENTS</h1>
                                <div className='flex mt-28 text-white items-center justify-center'>
                                    <button className='w-48 h-16 bg-[#23BDEE] rounded-2xl'>Enter access code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center">
                <div className="w-[90%] h-[500px] bg-[url('./assets/png/TOTC.png')] bg-cover bg-no-repeat grid grid-cols-2">
                    <div>
                        <p className='text-4xl font-medium text-[#2F327D]'>Everything you can do in a physical classroom, <span className='text-[#00CBB8]'>you can do with TOTC</span></p>
                        <p className='text-2xl text-[#696984] font-serif mt-5'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                    <iframe className='w-[90%] h-[90%] rounded-3xl'  src="https://www.youtube.com/embed/4SnlZNSFHgQ?si=3QAk6s_tEkECmrJP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TOTC