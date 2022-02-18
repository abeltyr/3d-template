
import React, { Suspense } from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import ColumnModel from '../../components/models/building/column';
import BoxMesh from '../mesh/box';
import PlaneMesh from '../mesh/world';
import World from '../mesh/world';
import Background from '../mesh/background';

const ThreeJsCanvas = () => {
    return <Canvas >
        <World />
        <Background />
        <OrbitControls />
        <ambientLight intensity={0.9} />
        <directionalLight />
        {/* <BoxMesh /> */}
        {/* <Suspense fallback={null}>
            <ColumnModel />
        </Suspense> */}
    </Canvas>

}

export default ThreeJsCanvas;
