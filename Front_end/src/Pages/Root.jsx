import axios from 'axios';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const ok = 'text-emerald-500 font-bold';

function Root() {
    const list = useRef(null);
    const bgList = useRef(null);

    function hideShow(x, y, z) {
        list.current.style.visibility = x;
        if (list.current.style.opacity == y) {
            list.current.style.opacity = z;
        }
    }
    return (
        <>
            <section className='w-[100vw] h-[100vh] bg-slate-800 text-white'>
                <div className='w-[90%] mr-auto ml-auto text-center pt-40'>
                    <h1 className='font-[Taylor] font-semibold text-2xl uppercase select-none'>pilihlah salah satu</h1>
                    <hr className='w-[300px] mr-auto ml-auto' />
                    <div className='grid justify-center gap-3 mt-5'>
                        <Link className='w-[320px] bg-slate-700 h-10 flex justify-center items-center rounded-lg hover:text-emerald-500 duration-300 select-none' to={'/all-save-game'}>Semua Save Game</Link>
                        <button className='w-[320px] bg-slate-700 h-10 flex justify-center items-center rounded-lg hover:text-emerald-500 duration-300 select-none'
                            onClick={() => { hideShow('visible', 0, 1); bgList.current.scrollTo(0, localStorage.getItem('Scroll')) }}
                        >Satu save game saja</button>
                    </div>
                </div>
            </section>


            <section className='fixed inset-x-0 inset-y-0 duration-[800ms] text-white' style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", visibility: 'hidden', opacity: 0 }} ref={list}>
                <div className='w-[98vw] h-[96vh] mt-[2vh] p-3 mr-auto ml-auto  bg-slate-600 overflow-auto scroll-smooth' ref={bgList}
                    onScroll={() => {
                        localStorage.setItem('Scroll', bgList.current.scrollTop)
                    }}
                >
                    <span className='fixed top-4 right-10 text-3xl cursor-pointer select-none max-lg:right-10 max-md:right-8 max-sm:right-5 bg-red-700 w-12 h-12 scale-[1.3] flex justify-center items-center rounded-full'
                        onClick={() => { hideShow('hidden', 1, 0) }}
                    >⛌</span>
                    <LIST />
                    <span className='fixed bottom-6 right-12 cursor-pointer select-none max-lg:right-10 max-md:right-8 max-sm:right-5  bg-sky-600 w-10 h-10 flex justify-center items-center scale-[1.7] rotate-[-90deg] pb-[1px] rounded-full '
                        onClick={() => { bgList.current.scrollTo(0, 0) }}
                    >➤</span>
                </div>
            </section>
        </>
    )
}

export default Root


function Huruf(props) {
    return (
        <>
            <h1 className='font-[Taylor] text-2xl ml-1 font-bold'>{props.abjad}</h1>
            <hr />
        </>
    )
}

function Li(props) {
    return (
        <>
            <div className='h-8 flex gap-2 items-center'>
                <span>✦</span>
                <Link to={props.url} className={props.clas}>{props.title}</Link>
            </div>
        </>
    )
}

function LIST() {
    return (
        <>
            <Huruf abjad={'A'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'B'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'C'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'D'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'E'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'F'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'G'} />
            <Li title='God Hand (USA)' url={'/god-hand-usa'} clas={ok} />
            <Li title='God Of War (USA)' url="/god-of-war-usa" clas={ok} />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'H'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'I'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'J'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'K'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'L'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'M'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'N'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'O'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'P'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'Q'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'R'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'S'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'T'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'U'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'V'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'W'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'X'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'Y'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <br /><br />
            <Huruf abjad={'Z'} />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
            <Li title='Belum Tersedia' />
        </>
    )
}