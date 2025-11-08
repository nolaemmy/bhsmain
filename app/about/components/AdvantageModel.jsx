'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import * as THREE from 'three';

const AdvantageModel = ({ modelPath, position, rotation, scale, isActive, index, mousePosition }) => {
  // Create a reference for the model
  const modelRef = useRef();
  
  // Create a simple sphere as fallback
  const [model] = useState(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ 
      color: '#0B8487',
      emissive: '#0B8487',
      emissiveIntensity: 0.2,
      roughness: 0.3,
      metalness: 0.7
    });
    return new THREE.Mesh(geometry, material);
  });
  
  // Animate the model based on mouse position and active state
  useFrame((state, delta) => {
    if (!modelRef.current) return;
    
    // Subtle rotation animation
    modelRef.current.rotation.y += delta * 0.2;
    
    // If active, make it more prominent
    if (isActive) {
      // Scale up slightly
      modelRef.current.scale.x = scale[0] * 1.2;
      modelRef.current.scale.y = scale[1] * 1.2;
      modelRef.current.scale.z = scale[2] * 1.2;
      
      // Add a slight hover effect based on mouse position
      if (mousePosition.x && mousePosition.y) {
        const offsetX = (mousePosition.x - 0.5) * 0.5;
        const offsetY = (mousePosition.y - 0.5) * 0.5;
        
        modelRef.current.position.x = position[0] + offsetX;
        modelRef.current.position.y = position[1] - offsetY;
      }
      
      // Update material if it's a mesh
      if (modelRef.current.material) {
        modelRef.current.material.emissiveIntensity = 0.5;
      }
    } else {
      // Return to original scale and position
      modelRef.current.scale.x = scale[0];
      modelRef.current.scale.y = scale[1];
      modelRef.current.scale.z = scale[2];
      
      modelRef.current.position.x = position[0];
      modelRef.current.position.y = position[1];
      
      // Update material if it's a mesh
      if (modelRef.current.material) {
        modelRef.current.material.emissiveIntensity = 0.2;
      }
    }
  });
  
  return (
    <Float 
      speed={isActive ? 2 : 1} 
      rotationIntensity={isActive ? 0.4 : 0.2}
      floatIntensity={isActive ? 0.6 : 0.3}
    >
      <primitive
        ref={modelRef}
        object={model}
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </Float>
  );
};

export default AdvantageModel;