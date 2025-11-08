'use client';

import { Environment as ThreeEnvironment, Sparkles } from '@react-three/drei';

const Environment = () => {
  return (
    <>
      {/* Add ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Add directional light for shadows */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      {/* Add point light for highlights */}
      <pointLight position={[-10, -10, -10]} intensity={0.2} />
      
      {/* Add environment map for reflections */}
      <ThreeEnvironment preset="city" />
      
      {/* Add particle effects */}
      <Sparkles 
        count={100}
        scale={10}
        size={1}
        speed={0.3}
        opacity={0.5}
        color="#0B8487"
      />
    </>
  );
};

export default Environment;