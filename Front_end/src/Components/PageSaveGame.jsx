import axios from "axios";
import { filesize } from "filesize";
import IconSaveGame from "./IconSaveGame";
import { useEffect, useRef, useState } from "react";
const hostname = import.meta.env.VITE_API;


export default function PageSaveGame(props) {
    const [zipSize, setZipSize] = useState(null);
    const [dateZip, setdDateZip] = useState(null);
    const [count, setcount] = useState(0);
    const [type, settype] = useState("");
    const countDownload = useRef(null);
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', props.src);
        xhr.onload = () => {
            setZipSize(xhr.getResponseHeader('Content-Length'));
            setdDateZip(xhr.getResponseHeader('Last-Modified').slice(5, 16));
        };
        xhr.send();



        if (window.location.pathname === "/all-save-game") {
            settype("ALL GAME")
        } else {
            settype("ONE GAME")
        }

        refreshCount()

    })
    function refreshCount() {
        axios.post(hostname + "/read-count", { game: window.location.pathname.slice(1), download: count, type: type })
            .then((x) => {
                setcount(x.data.download);
            })
    }

    // mengirimkan count ke mongodb
    async function AddCount() {
        if (count === 0) {
            setcount(1);
            await axios.post(hostname + '/send-count', { game: window.location.pathname.slice(1), download: 1, type: type });
        } else {
            await axios.post(hostname + "/send-count", { game: window.location.pathname.slice(1), download: count + 1, type: type })
        }
        refreshCount()
    }
    return (
        <>
            <h1 className="font-[Amaranth] text-2xl pt-5 pb-3 text-center">{props.title}</h1>
            <section className="scale-[1] max-sm:scale-[0.80] max-sm:ml-[-40px] grid gap-3">
                <div className="mt-10 flex gap-10">
                    <div>
                        <IconSaveGame title='Mcd001.ps2' size={'1'} />
                    </div>
                    <div className="grid gap-[6px]">
                        <div className="flex gap-2">
                            <h1 className="w-[120px] font-[Taylor] text-base">Filename</h1>
                            <span className="select-none">:</span>
                            <span className="font-semibold">{props.filename}</span>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="w-[120px] font-[Taylor] text-base">Date Upload</h1>
                            <span className="select-none">:</span>
                            <span className="font-semibold">{props.date}</span>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="w-[120px] font-[Taylor] text-base">Size File</h1>
                            <span className="select-none">:</span>
                            <span className="font-semibold uppercase">{filesize(zipSize, { round: 0 })} </span>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="w-[120px] font-[Taylor] text-base">Total Download</h1>
                            <span className="select-none">:</span>
                            <span className="font-semibold text-nowrap" ref={countDownload}>{count}</span>
                        </div>
                    </div>
                </div>
                <a className="uppercase flex justify-center items-center w-[370px] h-10 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 selection:bg-pink-600 shadow-md hover:shadow hover:scale-[0.995] text-xl tracking-wider font-[Saira] cursor-pointer shadow-purple-700 duration-300"
                    href={props.src}
                    download
                    onClick={() => { AddCount(); }}
                >download</a>
            </section >
        </>
    )
}

export function Description(props) {
    return (
        <>
            <div style={{ marginTop: props.marginTop }}>
                <h1 className="font-[Taylor] text-xl font-semibold tracking-wide">{props.title}</h1>
                <hr className="w-[250px]" />
                {props.children}
            </div>
        </>
    )
}