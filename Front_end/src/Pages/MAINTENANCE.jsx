import React from 'react'

export default function MAINTENANCE() {
    return (
        <>
            <section className='text-white fixed inset-x-0 inset-y-0 w-full h-full z-50 mr-auto ml-auto' style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center grid justify-center items-end'>
                    <div className='flex justify-center'>
                        <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
                            <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
                        </div>
                    </div>
                    <div>
                        <h1 className='mt-2 text-3xl select-none'>MAINTENANCE</h1>
                        <p className='text-[12px] select-none'>sabar cuy</p>
                    </div>
                </div>
            </section>
        </>
    )
}
