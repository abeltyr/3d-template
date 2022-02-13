import React, { useMemo, } from 'react'
import vertexShader from "./shader/vertex.glsl";
import fragmentShader from "./shader/fragment.glsl";

const BoxMesh = () => {
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

    return (
        <mesh position={[0, 2, 0]}  >
            <boxBufferGeometry args={[1, 1, 1]} />
            <shaderMaterial attach="material" {...data} />
        </mesh>
    )

}

export default BoxMesh;
