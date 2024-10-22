import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

export default function View({ timestamp, rotationData }) {
    return (
        <Canvas>
            <SatelliteMesh timestamp={timestamp} rotations={rotationData}/>

            { /* Using lighting example from R3F introduction */ }
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        </Canvas>
    )
}

// Orients the basis axes of the mesh for better visualization
const ORIENTATION_OFFSET = [Math.PI / 8, -Math.PI / 4, 0];

function SatelliteMesh({ timestamp, rotations }) {
    const meshRef = useRef();

    const basisEuler = new THREE.Euler(...ORIENTATION_OFFSET)
    const basisQuaternion = new THREE.Quaternion().setFromEuler(basisEuler);

    // Applies rotations for each previous timestamp.
    /*
    This should be moved into a useEffect() when timestamp becomes dynamic.
    It could also be very slow - it applies every rotation beginning from t=0,
    and could be made better depending on what the real data will look like.
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
                ref={meshRef}
                scale={2}
                rotation={orientation}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color='orange' />

                <Arrow axis='x'/>
                <Arrow axis='y'/>
                <Arrow axis='z'/>
            </mesh>
            
        </>
    )
}

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
