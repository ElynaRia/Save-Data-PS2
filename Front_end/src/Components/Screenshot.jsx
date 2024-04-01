import { useEffect, useState } from 'react';

export default function Screenshot(props) {
    const [fileSize, setFileSize] = useState();
    useEffect(() => {
        fetch(props.img)
            .then(response => {
                if (!response.ok) {
                    console.log('gagal membaca ukuran file');
                }
                return response.text();
            })
            .then(data => {
                const fileSizeInBytes = data.length;
                const fileSizeInKB = fileSizeInBytes / 1024;
                setFileSize(fileSizeInKB.toFixed(0));
            })
            .catch(error => {
                console.error(error.message);
            });
    }, [])
    return (
        <>
            <div className={props.className}>
                <img src={props.img} className='w-[70%]' alt='screenshot' />
                <h1 className='text-sm'>Size This Screenshot : <span>{fileSize + " " + "KB"}</span></h1>
            </div>
        </>
    )
}
