
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

            <div className='semiLogo w-52 h-64 absolute left-5 top-5 sm:left-16 sm:top-16 px-12 py-10'>
                <p className='font-medium text-3xl'>
                    Alts
                </p>
                <p className='font-extra text-lg'>

                    Digital
                </p>
            </div>
            <div className='header-text absolute'>
                <span className='font-extralight font-mono'>
                    We inpower
                    <span className='font-serif'> forward-</span>thinking companies, by connecting them with <span className='italic'>
                        high</span>-intent users.
                </span>
            </div>
            <div className='flex absolute right-5 top-5 sm:right-20 sm:top-16 menu items-center gap-x-4 cursor-pointer'>
                <p className='text-xl hidden sm:flex' >
                    Menu
                </p>
                <div className='relative w-16 h-16 '>

                    <div className='icon-menu w-16 h-16  flex items-center justify-center rounded-full absolute'>
                        <MenuSVG width='65' height='65' />

                    </div>
                    <div className='menu-box w-16 h-16 flex items-center justify-center rounded-full absolute'  >

                    </div>
                </div>
            </div>

        </div>
    </Container>

}

export default TopBar;
