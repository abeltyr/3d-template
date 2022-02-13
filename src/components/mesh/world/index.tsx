
import React, { } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap';
import { Vector3 } from 'three';

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
        cameraData.position.set(2.5, 12.5, 15);
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
    let stop = false;
    useFrame(() => {

        if (!ticking) {
            if (cameraData && !ticking) {

                let sum = lastKnownScrollPosition > scrollPosition.scrollTop ? 0.25 : -0.25;;
                gsap.to(cameraData.position, {
                    duration: 0.5, x: cameraData.position.x + sum,
                }); gsap.to(cameraData.position, {
                    duration: 0.5, y: cameraData.position.y + sum,
                }); gsap.to(cameraData.position, {
                    duration: 0.5, z: cameraData.position.z + sum,
                });
                // gsap.to(cameraData.position, {
                //     duration: 3, set: new Vector3(
                //         cameraData.position.x + sum,
                //         cameraData.position.y + sum,
                //         cameraData.position.z + sum
                //     )
                // });
                ticking = true;
            }
        }
    });
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
            <planeBufferGeometry args={[2000, 2000]} />
            <meshStandardMaterial color={'white'} />
        </mesh>
    )
}

export default World;
