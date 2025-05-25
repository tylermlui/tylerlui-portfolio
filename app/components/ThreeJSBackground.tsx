'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

// 3D TL Model Component with custom materials
function RotatingTLModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load your GLB model
  const { scene } = useGLTF('/models/TL.glb');

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone();
  
  // Override materials if needed
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshBasicMaterial({

        transparent: true,
        opacity: 0.1,
        wireframe: true // Set to true for wireframe effect
      });
    }
  });

  return (
    <group ref={groupRef} scale={[10, 10, 10]}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Fallback loading component
function LoadingFallback() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#4a90e2" wireframe />
    </mesh>
  );
}

// Main background component
export default function BlenderTLBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<LoadingFallback />}>
          <RotatingTLModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the model for better performance
useGLTF.preload('/models/tl-logo.glb');