import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-[url("/images/mumbai.jpg")] h-24 '>
            <div className="bg-[rgba(0,0,0,0.2)] h-full">
                <div className="h-full w-[1200px] mx-auto flex justify-between items-center">
                    <div className="h-full">
                        <img src="/images/logo.png" alt="logo" className='w-[120px] py-2'/>
                    </div>
                    <div className="">
                        <ul className="">
                            <li className="flex gap-3 items-center p-0">
                                <Link className='uppercase text-white font-semibold transition-all duration-100  hover:bg-[rgba(255,255,255,0.4)] py-9 px-2'>Home</Link>
                                <Link className='uppercase text-white font-semibold transition-all duration-100  hover:bg-[rgba(255,255,255,0.4)] py-9 px-2'>Buy</Link>
                                <Link className='uppercase text-white font-semibold transition-all duration-100  hover:bg-[rgba(255,255,255,0.4)] py-9 px-2'>Rent</Link>
                                <Link className='uppercase text-white font-semibold transition-all duration-100  hover:bg-[rgba(255,255,255,0.4)] py-9 px-2'>Off-Plan</Link>
                                <Link className='uppercase text-white font-semibold transition-all duration-100  hover:bg-[rgba(255,255,255,0.4)] py-9 px-2'>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
