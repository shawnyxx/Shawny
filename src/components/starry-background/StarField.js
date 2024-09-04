import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './StarField.css';

const Stars = () => {
  const starRef = useRef();

  useEffect(() => {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.125,
      sizeAttenuation: true
    });

    const starVertices = [];
    const distance = 250;
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(distance);
      const y = THREE.MathUtils.randFloatSpread(distance);
      const z = THREE.MathUtils.randFloatSpread(distance);
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    starRef.current.geometry = starGeometry;
    starRef.current.material = starMaterial;
  }, []);

  useFrame(({ mouse }) => {
    if (starRef.current) {
      starRef.current.rotation.x = -mouse.y * 0.1;
      starRef.current.rotation.y = mouse.x * 0.1;
    }
  });

  return <points ref={starRef} />;
};

const StarField = () => {
  return (
    <div className="StarryBackground">
      <Canvas className="StarField">
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarField;
