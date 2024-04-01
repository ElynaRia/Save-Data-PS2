import React from 'react'
import { Link } from 'react-router-dom'

export default function BackHome() {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-20 mb-4'>
                <Link className='uppercase flex justify-center items-center w-[320px] h-10 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 selection:bg-pink-600 shadow-md hover:shadow hover:scale-[0.995] text-xl tracking-wider font-[Saira] cursor-pointer shadow-purple-700 duration-300' to={'/'}>
                    Kembali Ke beranda
                </Link>
            </div>
        </>
    )
}
