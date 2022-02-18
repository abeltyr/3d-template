
import React, { useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap';
import { DoubleSide, Vector3 } from 'three';
import vertexShader from "./shader/vertex.glsl";
import fragmentShader from "./shader/fragment.glsl";

const Background = () => {
    const data = useMemo(
        () => ({
            uniforms: {
                uAnimation: { value: 200.0 }
            },
            fragmentShader,
            vertexShader
        }),
        []
    )
    useFrame(({ clock }) => {
        // clock.getElapsedTime()
        data.uniforms.uAnimation.value += 0.001;
    });
    return (
        <>
            <mesh position={[0, 0, -10]} rotation={[0, 0, 0]} receiveShadow >
                <planeBufferGeometry args={[100, 100]} />
                <shaderMaterial attach="material" {...data} />
            </mesh>
            <mesh position={[0, 0, -10]} rotation={[0, 0, 0]} receiveShadow >
                <planeBufferGeometry args={[100, 100]} />
                <meshStandardMaterial color={'#000000'} side={DoubleSide} transparent={true} opacity={0.825} />
            </mesh>
        </>
    )
}

export default Background;
