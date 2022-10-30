import React from "react";
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='w-full h-40'>
            <div className="w-full h-[1px] bg-zinc-200 mb-6"></div>
            <p className="credits text-sm text-zinc-500 mb-2">&copy; Anton Stallbörger 2022. This website is hosted and deployed via Vercel.</p>
            <div className="flex gap-4 text-zinc-500 text-sm">
                <Link href='/'>Legal Notice</Link>
                <Link href='/'>Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer