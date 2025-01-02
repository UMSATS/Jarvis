import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

export default function View({ timestamp, rotationData }) {
    return (
        <Canvas>
            <SatelliteModel timestamp={timestamp} rotations={rotationData}/>
            {/* Lighting needs an improvement */}
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        </Canvas>
    )
}

function SatelliteModel({ timestamp, rotations }) {
    const model = useLoader(STLLoader, "/TSAT-7_MODEL.STL");

    // Orients the basis axes of the mesh for better visualization
    const ORIENTATION_OFFSET = [-Math.PI / 3, 0, Math.PI / 4];

    const basisEuler = new THREE.Euler(...ORIENTATION_OFFSET)
    const basisQuaternion = new THREE.Quaternion().setFromEuler(basisEuler);

    /* 
    This performs every rotation whenever the timestamp changes -
    it might get slow when there is a realistic number of timestamps.
    */
    const newOrientation = basisQuaternion.clone()
    for (let i = 0; i <= timestamp; i++) {
        const rotation = new THREE.Quaternion(
            rotations[i][0],
            rotations[i][1],
            rotations[i][2],
            rotations[i][3]
        )
        newOrientation.multiply(rotation).normalize();
    }

    const orientation = new THREE.Euler().setFromQuaternion(newOrientation);

    return (
        <>
            <mesh 
                rotation={orientation}
                // This scale should be applied to the STL directly
                scale={[0.7, 0.7, 0.7]}
            >
                <primitive object={model}/>
                <meshStandardMaterial
                    color="orange"
                    roughness={0.8}
                    metalness={0.4}
                />
            </mesh>
        </>
    );
}

// Unused now that we have the model - might be useful later on
function Arrow({ axis }) {
    const RADIUS = 0.04;
    const LENGTH = 0.4;
    const OFFSET = 0.5 + LENGTH / 2;

    let position, rotation, color;
    switch (axis) {
        default:
        case 'x':
            position = [OFFSET, 0, 0];
            rotation = [0, 0, -Math.PI / 2];
            color = 'red';
            break;
        case 'y':
            position = [0, OFFSET, 0];
            rotation = [0, 0, 0];
            color = 'green';
            break;
        case 'z':
            position = [0, 0, OFFSET];
            rotation = [Math.PI / 2, 0, 0];
            color = 'blue';
            break;
    }
    
    return (
        <mesh
            position={position}
            rotation={rotation}
        >
            <cylinderGeometry 
                args={[RADIUS, RADIUS, LENGTH]}
            />
            <meshStandardMaterial color={color} />

            { /* Arrowhead */ }
            <mesh
                position={[0, LENGTH / 2, 0]}
            >
                <cylinderGeometry 
                    args={[RADIUS / 2, RADIUS * 2, LENGTH / 2]}
                />
                <meshStandardMaterial color={color} />
            </mesh>
        </mesh>
    )
}
