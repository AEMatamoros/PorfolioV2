import React from 'react'

export default function Footer({ msg }: { msg: string }) {
    return (
        <footer className='main__footer bg-dark dark:bg-light text-light dark:text-dark p-16 flex justify-center items-center'>
            <span className='font-extrabold italic'>
                {msg}
            </span>
        </footer>
    )
}
