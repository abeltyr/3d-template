
import HeaderComponent from '../../components/header';
import { Container } from './style';
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";


const HomePage = () => {
    const Box = () => {
        const [ref, api] = useBox(() => {
            return {
                mass: 1,
                position:
                    [0, 2, 0],
            }
        });
        return (
            <mesh onClick={() => {
                api.velocity.set(0, 2, 0);
            }} ref={ref} position={[0, 2, 0]}>
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'green'} />
            </mesh>
        )
    }
    const Plane = () => {
        const [ref] = usePlane(() => {
            return {
                rotation: [-Math.PI / 2, 0, 0]
            }
        })
        return (
            <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry args={[15, 15]} />
                <meshStandardMaterial color={'orange'} />
            </mesh>
        )
    }
    return <Container >

        <Canvas  >
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Physics>
                <Box />
                <Plane />
            </Physics>
        </Canvas>,
    </Container>

}

export default HomePage;
