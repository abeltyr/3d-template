
import HeaderComponent from '../../components/header';
import { Container } from './style';
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import vertexShader from "./shader/vertex.glsl";
import fragmentShader from "./shader/fragment.glsl";


const HomePage = () => {

    const data = useMemo(
        () => ({
            uniforms: {
                Shininess: { value: 200.0 }
            },
            fragmentShader,
            vertexShader
        }),
        []
    )

    let lastKnownScrollPosition = 0;
    let scrollPosition = {
        scrollHeight: 0,
        scrollTop: 0,
    };
    let ticking = false;
    let cameraData: any = null;


    const Box = () => {

        return (
            <mesh position={[0, 2, 0]}  >
                <boxBufferGeometry args={[1, 1, 1]} />
                <shaderMaterial attach="material" {...data} />
            </mesh>
        )
    }
    const Plane = () => {
        useThree(({ camera }) => {
            cameraData = camera;
            const blocker: any = document.querySelector("div#blocker");
            if (blocker) blocker.addEventListener("scroll", (_event: any) => {
                scrollPosition = {
                    scrollHeight: _event.target.scrollHeight,
                    scrollTop: _event.target.scrollTop,
                };

                window.requestAnimationFrame(function () {
                    lastKnownScrollPosition = scrollPosition.scrollTop;
                    ticking = false;
                });


            })
        });
        useFrame(() => {

            if (!ticking) {
                console.log(scrollPosition);
                if (cameraData)
                    cameraData.position.z +=
                        lastKnownScrollPosition > scrollPosition.scrollTop ? 0.1 : -0.1;
                ticking = true;
            }
        });
        return (
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry args={[2000, 2000]} />
                <meshStandardMaterial color={'orange'} />
            </mesh>
        )
    }





    return <Container >
        <div className='absolute top-0 left-0  w-screen h-screen'>
            <Canvas className=''  >
                {/* <OrbitControls /> */}
                <ambientLight intensity={0.5} />
                <Box />
                <Plane />
            </Canvas>
        </div>
        {/* this Give the big hight for controlling the scroll */}
        <div className="w-screen overflow-y-auto z-20" id="blocker">
            {
                Array(20).fill(0).map((data, index) => {
                    return <div className="w-screen h-screen flex justify-center items-center" key={index}></div>
                })
            }
        </div>
        {/* This is use to actually display the need html part */}
        <div className="w-screen overflow-y-auto z-10" id="blocker">
            <div className="w-screen h-screen flex justify-center items-center bg-slate-400/5" >
                opl
            </div>

        </div>
    </Container>

}

export default HomePage;
