import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { LayoutContainer } from './style';
import Stats from 'stats.js';
import ThreeJsCanvas from '../canvas';
import gsap from 'gsap';


export default function Layout({ children, background, header = "title" }: any) {
    const [refresh, setRefresh] = useState<boolean>(true)
    useEffect(() => {
        // SETUP the FBS READER
        const stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        const animate = () => {
            stats.begin();
            stats.end();
            if (refresh)
                requestAnimationFrame(animate);
        };
        animate();
        // window.addEventListener("mousemove", mouseTracker);

        return () => {
            // window.removeEventListener("mousemove", mouseTracker);
            // setRefresh(false);
        }

    }, [])

    // const mouseTracker = (_event: any) => {
    //     gsap.to("#mouse-tracker", {
    //         duration: 0.5,
    //         x: _event.clientX - 30,
    //         display: "block",
    //         y: _event.clientY - 30,
    //     });
    // }
    return (
        <React.Fragment>
            <Head>
                <title>{header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LayoutContainer background={background} >
                <div id="mouse-tracker" />

                <div className='absolute top-0 left-0  w-screen h-screen'>
                    <ThreeJsCanvas />
                </div>


                {/* this Give the big hight for controlling the scroll */}


                {/* <div className="w-screen overflow-y-auto z-20" id="blocker">
                    {
                        Array(20).fill(0).map((data, index) => {
                            return <div className="w-screen h-screen flex justify-center items-center" key={index}></div>
                        })
                    }
                </div> */}
                {/* This is use to actually display the need html part */}



                <div className="w-screen overflow-y-auto z-10" id="blocker">
                    <main>
                        {children}
                    </main>
                </div>
            </LayoutContainer>
        </React.Fragment>
    );
}
