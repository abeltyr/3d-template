import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { LayoutContainer } from './style';
import Stats from 'stats.js';

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
            // window.removeEventListener("mousemove",mouseTracker);
            setRefresh(false);
        }

    }, [])

    const mouseTracker = (_event: any) => {
        const mouseTracker: any = document.querySelector("div#mouse-tracker");
        mouseTracker!.style.transform = `translate(${_event.clientX - 30}px, ${_event.clientY - 30}px)`;
    }
    return (
        <React.Fragment>
            <Head>
                <title>{header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LayoutContainer background={background} >
                {/* <div id="mouse-tracker" /> */}
                <main>
                    {children}
                </main>
            </LayoutContainer>
        </React.Fragment>
    );
}
