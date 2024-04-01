import React, { useEffect, useRef, useState } from 'react'
import PageSaveGame, { Description } from '../Components/PageSaveGame'
import { Link } from "react-router-dom";
import Screenshot from '../Components/Screenshot';
import All from "../images/Screenshot/God-Hand/1.png"
import BackHome from '../Components/BackHome';
import MAINTENANCE from './MAINTENANCE';

function List(props) {
    return (
        <>
            <div className='flex items-center h-7 gap-2'>
                <span>✦</span>
                <Link className='border-b-2 border-blue-600 font-[Taylor] h-6 border-spacing-10' to={props.url}>{props.namaGame}</Link>
            </div>
        </>
    )
}

export default function AllSaveData() {
    const count = useRef(null);
    const [finalCount, setFinalCount] = useState(null);
    useEffect(() => {
        setFinalCount(count.current.childNodes.length);
    }, [])
    return (
        <>
            {/* <MAINTENANCE /> */}
            <section className='bg-slate-800 text-white p-5'>
                <PageSaveGame
                    title="Semua Save Game"
                    filename="Mcd001.ps2"
                    date="01-01-2099"
                    src="../../public/SaveData/GodHand/GOD-HAND-ONLY.rar"
                />
                <Description title="Keterangan" marginTop="150px">
                    <p className='mt-2'>jumlah game yg tersimpan : <span className='ml-2 font-semibold font-[Taylor] select-none'>{finalCount}</span></p>
                    <div ref={count}>
                        <List namaGame="God Hand (USA)" url="/god-hand-usa" />
                    </div>
                </Description>
                <Description title="Screenshot" marginTop="100px">
                    <Screenshot img={All} className="mt-3" />
                </Description>
                <BackHome />
            </section>
        </>
    )
}








