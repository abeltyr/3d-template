
import React, { useMemo } from 'react'
import { useFrame, useThree, } from '@react-three/fiber'
import gsap from 'gsap';
import { DoubleSide, Vector3 } from 'three';
import wallVertexShader from "./shader/wall/vertex.glsl";
import wallFragmentShader from "./shader/wall/fragment.glsl";
import blobVertexShader from "./shader/blob/vertex.glsl";
import blobFragmentShader from "./shader/blob/fragment.glsl";

const Background = () => {
    const wallData = useMemo(
        () => ({
            uniforms: {
                uAnimation: { value: 200.0 }
            },
            vertexShader: wallVertexShader,
            fragmentShader: wallFragmentShader
        }),
        []
    )
    const blobData = useMemo(
        () => ({
            uniforms: {
                uAnimation: { value: 0.0 },
                uScreenWidth: { value: window.innerWidth }
            },
            vertexShader: blobVertexShader,
            fragmentShader: blobFragmentShader
        }),
        []
    )
    useFrame(({ clock }) => {
        // clock.getElapsedTime() 
        wallData.uniforms.uAnimation.value += 0.001;
        blobData.uniforms.uAnimation.value += 0.1;
    });
    return (
        <group>
            <mesh position={[0, 0, -100.1]} rotation={[0, 0, 0]}  >
                <planeBufferGeometry args={[400, 400]} />
                <shaderMaterial attach="material" {...wallData} />
            </mesh>
            <mesh position={[0, 0, -50]} rotation={[0, 0, 0]}  >
                <planeBufferGeometry args={[400, 400]} />
                <meshStandardMaterial color={'#000000'} side={DoubleSide} transparent={true} opacity={0.825} />
            </mesh>
            {/* <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}  >
                <sphereBufferGeometry args={[5, 32, 16]} />
                <shaderMaterial attach="material" {...blobData} />
            </mesh> */}
        </group>
    )
}

export default Background;
