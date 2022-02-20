
import MenuSVG from '../../assets/icons/menu';
import { Container } from './style';
import { motion } from "framer-motion"
import { useEffect } from 'react';

import gsap from 'gsap';

const TopBar = () => {



    const menuTracker = (_event: any) => {
        gsap.to("#menu-tracker", {
            duration: 0.5,
            x: _event.clientX - 30,
            display: "block",
            y: _event.clientY - 30,
        });
    }

    const iconVariation = {
        hidden: {
            background: "transparent",
        },
        show: {
            background: "#eeff04",
            transition: {
                duration: 1,
                ease: "easeInOut",
            }
        },
    };


    let position: any = {};
    return <Container >
        <div className="w-screen relative flex" >

            <div className='absolute left-0 sm:left-5 top-0 sm:top-5 px-5 py-5 sm:px-16 sm:py-12'>
                <div className='semiLogo w-52 h-64  px-12 py-10'>
                    <p className='font-medium text-3xl'>
                        Alts
                    </p>
                    <p className='font-extra text-lg'>

                        Digital
                    </p>
                </div>
            </div>
            <div className='header-text absolute'>
                <span className='font-extralight font-mono'>
                    We impower
                    <span className='font-serif'> forward-</span>thinking companies, by connecting them with <span className='italic'>
                        high</span>-intent users.
                </span>
            </div>
            <div className='px-5 py-5 sm:px-14 sm:py-16 absolute right-0 sm:right-5 top-0 sm:top-5  menu flex items-center gap-x-4 ' onMouseMove={
                (_event) => {
                    if (window.innerWidth > 630) {
                        let comp: any = document.getElementById("mouse-lover");
                        let data: any = comp?.getBoundingClientRect();
                        let x = (_event.clientX - (data.left + data.width / 2)) / 3;
                        let y = (_event.clientY - (data.top + data.height / 2)) / 3;
                        gsap.to("#mouse-lover", {
                            duration: 1.25,
                            transform: `translate3d(${x}px, ${y}px, 0)`,
                        });
                    }

                }}
                onMouseLeave={() => {

                    gsap.to("#mouse-lover", {
                        duration: 1.5,
                        transform: `translate3d(0, 0, 0)`,
                    });
                }}>
                <div className='flex  items-center gap-x-4 ' id="mouse-lover"

                >
                    <p className='text-xl hidden sm:flex cursor-default select-none' >
                        Menu
                    </p>
                    <div className='relative w-16 h-16 menu-data cursor-pointer'>

                        <div className='icon-menu w-16 h-16  flex items-center justify-center rounded-full absolute'>
                            <MenuSVG width='65' height='65' />

                        </div>
                        <div className='menu-box w-16 h-16 flex items-center justify-center rounded-full absolute'  >

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </Container>

}

export default TopBar;
