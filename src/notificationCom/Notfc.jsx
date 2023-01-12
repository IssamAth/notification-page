import React from 'react'
import './notfc.css'
import MARK from '../assets/images/avatar-mark-webber.webp'
import ANGELA from '../assets/images/avatar-angela-gray.webp'
import JACOB from '../assets/images/avatar-jacob-thompson.webp'
import RIZKY from '../assets/images/avatar-rizky-hasanuddin.webp'
import KIM from '../assets/images/avatar-kimberly-smith.webp'
import CHESS from '../assets/images/image-chess.webp'
import NATHAN from '../assets/images/avatar-nathan-peterson.webp'
import ANNA from '../assets/images/avatar-anna-kim.webp'


const {useEffect, useState} = React;
let mark  = 0;
let angela = 0;
let jacob = 0;


const Notfc = () => {
  

    const [notif, setNotif] = useState(3);

    // function getNotif (notif) {
    //     if(notif > 0) {
    //         setNotif(notif - 1)
    //     } else {
    //         setNotif(0)
    //     }
    // }

    return (
        <section className='flex flex-col h-full pt-5 md:mx-auto md:bg-white'>
            {/* Notification TITLE*/}
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Notifications<span className='b bg-for3 text-white text-base font-normal px-2.5 py-px rounded-md mx-2'>{notif}</span></h1>
                </div>
                <div>
                    <h2 className=' text-graynot font-medium'><button className='hover:cursor-pointer hover:text-bluehover md:text-bigsm'  onClick={() =>{
                        setNotif(0);
                        mark = 1;
                        angela = 1;
                        jacob = 1;
                    } }>Mark all as read</button></h2>
                </div>
            </div>
            {/* ALL NOTIFICATIONS CONTAINER */}
            <div className='flex flex-col mt-5 space-y-3'>

                {/* NOTIFICATION ONE */}
                <div onClick={
                    () => {if(notif == 0){
                        setNotif(0)
                    } else if((notif > 0) && (mark == 0)) {
                        console.log("isam");
                        setNotif(notif - 1);
                        mark = 1 
                    }
                }} className={'flex py-4 rounded-md hover:cursor-pointer'
                 + (mark == 0
                ? ' bg-unread'
                :' bg-white')}
                >
                    {/* AVATAR */}
                    <div className='px-4 basis-20 shrink-0 grow-0'>
                        <img src={MARK} className="w-12" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5 text-bsm'><span className='font-bold hover:text-bluehover hover:cursor-pointer'>Mark Webber </span><span className='text-graynot font-medium'>reacted to your recent post<span className='f font-semibold text-graynotdark hover:text-bluehover'> My first tournament today! <span className={'bg-redDot rounded-full h-2 w-2 ml-1'
                            + (mark == 0
                                ? ' inline-block'
                                : ' hidden')}
                            ></span></span></span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time text-bsm'>1m ago</p>
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION TWO */}
                <div onClick={
                    () => {if(notif == 0){
                        setNotif(0)
                    } else if((notif > 0) && (angela == 0)) {
                        console.log("isam");
                        setNotif(notif - 1);
                        angela = 1 
                    }
                }} className={'flex py-4 rounded-md hover:cursor-pointer'
                + (angela == 0
                    ? ' bg-unread'
                    :' bg-white')}>
                    {/* AVATAR */}
                    <div className='px-4 basis-20 shrink-0 grow-0'>
                        <img src={ANGELA} className="" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5 text-bsm'><span className='font-bold hover:text-bluehover hover:cursor-pointer'>Angela Gray </span><span className='text-graynot font-medium'>followed you<span className={'bg-redDot rounded-full h-2 w-2 ml-1'
                            + (angela == 0
                                ? ' inline-block'
                                : ' hidden')}></span></span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time text-bsm'>1m ago</p>
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION THREE */}
                <div onClick={
                    () => {if(notif == 0){
                        setNotif(0)
                    } else if((notif > 0) && (jacob == 0)) {
                        setNotif(notif - 1);
                        jacob = 1 
                    }
                }} className={'flex py-4 rounded-md hover:cursor-pointer'
                + (jacob == 0
                    ? ' bg-unread'
                    :' bg-white')}>
                    {/* AVATAR */}
                    <div className='p px-4 basis-20 shrink-0 grow-0'>
                        <img src={JACOB} className="w-16" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5 text-bsm'><span className='font-bold hover:text-bluehover hover:cursor-pointer'>Jacob Thomson </span><span className='text-graynot font-medium'>has joined your group </span> <span className='font-bold text-bluenotf hover:text-bluehover'>Chess Club</span> <span className={'bg-redDot rounded-full h-2 w-2 ml-1'
                            + (jacob == 0
                                ? ' inline-block'
                                : ' hidden')}></span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time text-bsm'>1 day ago</p>
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION FOUR */}
                <div className='flex py-4 rounded-md md:pr-4 hover:cursor-pointer'>
                    {/* AVATAR */}
                    <div className='p px-4 basis-20 shrink-0 grow-0'>
                        <img src={RIZKY} className="w-16" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col'>
                        <div>
                            <p className='pr-3 leading-5 text-bsm'><span className='font-bold hover:text-bluehover hover:cursor-pointer'>Rizky Hasanuddin </span><span className='text-graynot font-medium'>sent you a private message </span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time text-bsm'>5 day ago</p>
                        </div>
                        <div className='p border-solid border-1 border-gray-300 p-5 rounded-md mt-3 w-full pr-6 hover:border-hoverDm hover:bg-hoverDm hover:cursor-pointer'>
                            <p className='t text-graynot text-bsm font-medium md:text-bsm md:px-3'>
                                Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.
                            </p>
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION FIVE */}
                <div className='flex py-4 rounded-md hover:cursor-pointer'>
                    {/* AVATAR */}
                    <div className='p px-4 basis-20 shrink-0 grow-0'>
                        <img src={KIM} className="w-16" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col'>
                        <div>
                            <p className='pr-3 leading-5 text-bsm'><span className='font-bold hover:text-bluehover hover:cursor-pointer'>Kimberly Smith </span><span className='text-graynot font-medium'>commented on your picture </span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time text-bsm'>1 week ago</p>
                        </div>
                    </div>
                    <div className='ml-auto md:w-12'>
                        <img src={CHESS} className=" w-16 shrink-0 grow-0" alt="image chess" />
                    </div>
                </div>
                {/* NOTIFICATION SIX */}
                <div className='flex py-4 rounded-md hover:cursor-pointer'>
                    {/* AVATAR */}
                    <div className='px-4 basis-20 shrink-0 grow-0'>
                        <img src={NATHAN} className="w-12" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5 text-bsm'><span className='font-bold hover:text-bluehover hover:cursor-pointer'>Nathan Peterson </span><span className='text-graynot font-medium'>reacted to your recent post<span className='f font-semibold text-graynotdark'> 5 end-game strategies to increase your win rate</span></span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time text-bsm'>2 weeks ago</p>
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION SEVEN */}
                <div className='flex py-4 rounded-md hover:cursor-pointer'>
                    {/* AVATAR */}
                    <div className='p px-4 basis-20 shrink-0 grow-0'>
                        <img src={ANNA} className="w-16" alt="avatar" />
                    </div>
                    {/* NOTF */}
                    <div className='flex flex-col pr-3'>
                        <div>
                            <p className='pr-3 leading-5 text-bsm'><span className='font-bold hover:text-bluehover hover:cursor-pointer'>Anna Kim </span><span className='text-graynot font-medium'>left the group </span> <span className='font-bold text-bluenotf'>Chess Club</span></p>
                        </div>
                        {/* TIME */}
                        <div>
                            <p className=' text-time text-bsm'>2 weeks ago</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Notfc