import React, { useEffect, useRef, useState } from 'react'
import PageSaveGame, { Description } from '../../Components/PageSaveGame';
import Screenshot from '../../Components/Screenshot';
import BackHome from '../../Components/BackHome';
import one from '../../images/Screenshot/God-Hand/1.png'
import two from '../../images/Screenshot/God-Hand/2.png'
import three from '../../images/Screenshot/God-Hand/3.png'
import four from '../../images/Screenshot/God-Hand/4.png'

export default function GodHand() {
    return (
        <>
            <section className='bg-slate-800 text-white p-5'>
                <PageSaveGame
                    title="God Hand (USA)"
                    date="15 Feb 2024"
                    filename="Mcd001.ps2"
                    src="./SaveData/GodHand/GOD-HAND-ONLY.rar"
                />
                <Description title="Keterangan" marginTop="150px">
                    <div className='grid'>
                        <h1>- tamat dengan tingkat kesulitan normal</h1>
                        <h1>- cheat nya ada beberapa yg ikut ke save</h1>
                        <h1>- mode "HARD" Terbuka</h1>
                    </div>
                </Description>
                <Description title="Screenshot" marginTop="50px">
                    <Screenshot img={one} className="mt-5" />
                    <Screenshot img={two} className="mt-5" />
                    <Screenshot img={three} className="mt-5" />
                    <Screenshot img={four} className="mt-5" />
                </Description>
                <BackHome />
            </section>
        </>
    )
}
