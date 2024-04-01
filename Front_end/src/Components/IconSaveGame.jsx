import React from 'react'

export default function IconSaveGame(props) {
    return (
        <>
            <div className="w-24 h-28 bg-white rounded-sm relative" style={{ scale: props.size }}>
                <span className="absolute w-10 h-10 top-[-20px] scale-[1.2] rotate-[50deg] right-[-25px] bg-slate-800"></span>
                <span className="absolute bottom-2 inset-x-[-10px] h-10 flex items-center pl-2 text-stone-200 rounded bg-blue-700 selection:bg-pink-600 font-[Saira] text-xl">{props.title}</span>
            </div>
        </>
    )
}
