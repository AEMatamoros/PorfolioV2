import React from 'react'

export default function Footer({ msg }: { msg: string }) {
    return (
        <footer className='main__footer bg-main p-16 flex justify-center items-center'>
            <span className='font-extrabold italic'>
                {msg}
            </span>
        </footer>
    )
}
