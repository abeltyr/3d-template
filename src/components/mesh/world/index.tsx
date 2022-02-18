
import React, { useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
const World = () => {

    let lastKnownScrollPosition = 0;
    let scrollPosition = {
        scrollHeight: 0,
        scrollTop: 0,
    };
    let ticking = false;
    let cameraData: any = null;


    useThree(({ camera }) => {
        cameraData = camera;
        cameraData.position.set(0, 0, 11.5);
        const blocker: any = document.querySelector("div#blocker");
        if (blocker) blocker.addEventListener("scroll", (_event: any) => {
            scrollPosition = {
                scrollHeight: _event.target.scrollHeight,
                scrollTop: _event.target.scrollTop,
            };

            window.requestAnimationFrame(function () {
                console.log("here");
                lastKnownScrollPosition = scrollPosition.scrollTop;
                ticking = false;
            });


        })
    });
    useFrame(({ clock }) => {
        // clock.getElapsedTime()
    });
    return (
        <>
        </>
    )
}

export default World;
