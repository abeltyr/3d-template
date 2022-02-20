
import React, { useEffect, useMemo } from 'react'
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
                uRate: { value: 0.0 },
                uAnimation: { value: 0.0 },
                uScreenWidth: { value: window.innerWidth }
            },
            vertexShader: blobVertexShader,
            fragmentShader: blobFragmentShader
        }),
        []
    )
    let time = 0;
    useFrame(({ clock }) => {
        // clock.getElapsedTime() 
        wallData.uniforms.uAnimation.value += 0.001;
        blobData.uniforms.uRate.value = (Math.cos(blobData.uniforms.uAnimation.value / 2) * 2 - 1);
        blobData.uniforms.uAnimation.value += 1 / 30
    });

    let count = 5000;
    let positions = new Float32Array(count * 3);

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }
    }, [])
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
            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}  >
                {/* <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attachObject={["attributes", "position"]}
                        array={positions}
                        itemSize={3}
                        count={count}
                    />
                </bufferGeometry> */}
                <sphereGeometry args={[2.5, 36, 52]} />
                {/* <meshNormalMaterial /> */}
                <shaderMaterial attach="material" {...blobData} transparent={true} opacity={0.6} />
            </mesh>
        </group>
    )
}

export default Background;
