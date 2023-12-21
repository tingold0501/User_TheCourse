// eslint-disable-next-line no-unused-vars
import React from 'react'

function OurFeatures() {
    return (
        <div>
            {/* component */}
            <section className="mt-20 flex items-center justify-center">
                <div className=" w-[90%] grid grid-cols-2  ">
                    <div className=" mb-16  ">
                        <h1 className="mb-8 text-2xl font-semibold tracking-tighter md:text-5xl title-font text-[#2F327D]"> <span className='text-[#00CBB8]'>Tools</span>  For Teachers And Learners. </h1>
                        <p className="mb-8 text-[#696984] text-base leading-relaxed text-left  "> Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit. </p>
                    </div>
                    <div className="w-[90%]">
                        <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default OurFeatures