'use client';

import { Canvas as ThreeCanvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';

// Dynamically import the Environment component to avoid SSR issues
const Environment = dynamic(() => import('./Environment'), { ssr: false });

// Create a wrapper for the Canvas component
const Canvas = ({ children, ...props }) => {
  return (
    <ThreeCanvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      {...props}
    >
      <Environment />
      {children}
    </ThreeCanvas>
  );
};

export default Canvas;