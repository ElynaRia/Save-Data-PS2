import React, { useEffect, useRef, useState } from 'react'
import PageSaveGame, { Description } from '../../Components/PageSaveGame';
import Screenshot from '../../Components/Screenshot';
import BackHome from '../../Components/BackHome';
import zero from '../../images/Screenshot/GOW/0.png'
import one from '../../images/Screenshot/GOW/1.png'
import two from '../../images/Screenshot/GOW/2.png'
import three from '../../images/Screenshot/GOW/3.png'
import four from '../../images/Screenshot/GOW/4.png'
import five from '../../images/Screenshot/GOW/5.png'
import six from '../../images/Screenshot/GOW/6.png'

export default function GodOfWar() {
    return (
        <>
            <section className='bg-slate-800 text-white p-5'>
                <PageSaveGame
                    title="God Of War (USA)"
                    date="23 Feb 2024"
                    filename="Mcd001.ps2"
                    src="./SaveData/GOW/GOD-OF-WAR-ONLY.rar"
                />
                <Description title="Keterangan" marginTop="150px">
                    <div className='grid'>
                        <h1>- tamat dengan tingkat kesulitan very hard</h1>
                        <h1>- costume terbuka semua</h1>
                        <h1>- mode "very hard" pastinya sudah Terbuka</h1>
                        <h1>- treasure terbuka semua</h1>
                    </div>
                </Description>
                <Description title="Screenshot" marginTop="50px">
                    <Screenshot img={zero} className="mt-5" />
                    <Screenshot img={one} className="mt-5" />
                    <Screenshot img={two} className="mt-5" />
                    <Screenshot img={three} className="mt-5" />
                    <Screenshot img={four} className="mt-5" />
                    <Screenshot img={five} className="mt-5" />
                    <Screenshot img={six} className="mt-5" />
                </Description>
                <BackHome />
            </section>
        </>
    )
}
