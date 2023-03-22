import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa"

const UniqueSec = () => {
  return (
    <div className='w-full bg-purple-500 flex flex-wrap gap-4 px-16 py-12 text-white items-center justify-center'>
        <div className='w-4/5 sm:w-4/5 md:w-5/12 xl:w-1/5 border-spacing-1 hover:bg-white hover:text-black p-4 rounded-2xl'>
            <div className='flex items-center justify-center font-black text-8xl'>
                <div>
                <FaChalkboardTeacher/>
                </div>
            </div>
            <div className='flex justify-center font-extrabold'>
                <h2>Great Teaching Staff</h2>
            </div>
            <div className='flex text-center font-bold'>
                <p>We have more than 300 well qualified teaching staff</p>
            </div>
        </div>
        <div className='w-4/5 sm:w-4/5 md:w-5/12 xl:w-1/5 border-spacing-1 hover:bg-white hover:text-black p-4 rounded-2xl'>
            <div className='flex items-center justify-center font-black text-8xl'>
                <div>
                <FaChalkboardTeacher/>
                </div>
            </div>
            <div className='flex justify-center font-extrabold'>
                <h2>Well-equipped Science Labs</h2>
            </div>
            <div className='flex text-center font-bold'>
                <p>We have all the Science experiment equipments, so that students will get benefits of performing experiments</p>
            </div>
        </div>
        <div className='w-4/5 sm:w-4/5 md:w-5/12 xl:w-1/5 border-spacing-1 hover:bg-white hover:text-black p-4 rounded-2xl'>
            <div className='flex items-center justify-center font-black text-8xl'>
                <div>
                <FaChalkboardTeacher/>
                </div>
            </div>
            <div className='flex justify-center font-extrabold'>
                <h2>Smart Classrooms</h2>
            </div>
            <div className='flex text-center font-bold'>
                <p>We have Smart classroom setup, to make education more easy and effective</p>
            </div>
        </div>
        <div className='w-4/5 sm:w-4/5 md:w-5/12 xl:w-1/5 border-spacing-1 hover:bg-white hover:text-black p-4 rounded-2xl'>
            <div className='flex items-center justify-center font-black text-8xl'>
                <div>
                <FaChalkboardTeacher/>
                </div>
            </div>
            <div className='flex justify-center font-extrabold'>
                <h2>Sports facilities</h2>
            </div>
            <div className='flex text-center font-bold'>
                <p>We have Sports facilities such as an indoor & outdoor playground, basketball court, and a track and field area.</p>
            </div>
        </div>
    </div>
  )
}

export default UniqueSec;