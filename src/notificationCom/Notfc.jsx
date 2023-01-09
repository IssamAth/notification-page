import React from 'react'
import './notfc.css'
import MARK from '../assets/images/avatar-mark-webber.webp'
import ANGELA from '../assets/images/avatar-angela-gray.webp'
import JACOB from '../assets/images/avatar-jacob-thompson.webp'

const Notfc = () => {
    return (
        <section className='flex flex-col h-full pt-5'>
            {/* Notification TITLE*/}
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Notifications<span className='b bg-for3 text-white text-lg font-normal px-3 py-0 rounded-md mx-2'>3</span></h1>
                </div>
                <div>
                    <h2 className=' text-graynot font-medium'><a>Mark all as read</a></h2>
                </div>
            </div>
            {/* ALL NOTIFICATIONS CONTAINER */}
            <div className='flex flex-col mt-5 space-y-3'>

                {/* NOTIFICATION ONE */}
                <div className='flex bg-unread py-4 rounded-md'>
                    {/* AVATAR */}
                    <div className='p px-4'>
                        <img src={MARK} className="w-16" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5'><span className='font-bold'>Mark Webber </span><span className='text-graynot font-medium'>reacted to your recent post<span className='f font-semibold text-graynotdark'> My first tournament today! <span className='bg-redDot inline-block rounded-full h-2 w-2 ml-1'></span></span></span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time'>1m ago</p> 
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION TWO */}
                <div className='flex bg-unread py-4 rounded-md'>
                    {/* AVATAR */}
                    <div className='p px-4'>
                        <img src={ANGELA} className="w-16" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5'><span className='font-bold'>Angela Gray </span><span className='text-graynot font-medium'>followed you<span className='bg-redDot inline-block rounded-full h-2 w-2 ml-1'></span></span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time'>1m ago</p> 
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION THREE */}
                <div className='flex bg-unread py-4 rounded-md'>
                    {/* AVATAR */}
                    <div className='p px-4'>
                        <img src={JACOB} className="w-16" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5'><span className='font-bold'>Jacob Thomson </span><span className='text-graynot font-medium'>reacted to your recent post<span className='f font-semibold text-graynotdark'> My first tournament today! <span className='bg-redDot inline-block rounded-full h-2 w-2 ml-1'></span></span></span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time'>1m ago</p> 
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Notfc