import { Float, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three"; // Import THREE for typings

type ReactLogoProps = JSX.IntrinsicElements["group"];
const ReactLogo: React.FC<ReactLogoProps> = (props) => {
  // Properly type the return value of useGLTF
  const { nodes, materials } = useGLTF("/models/react.glb") as unknown as {
    nodes: {
      [key: string]: THREE.Mesh; // Correctly type nodes as THREE.Mesh
    };
    materials: {
      [key: string]: THREE.Material; // Correctly type materials as THREE.Material
    };
  };

  const groupRef = useRef<THREE.Group>(null); // Type the ref as a THREE.Group

  return (
    <Float floatIntensity={1}>
      <group
        ref={groupRef}
        position={[8, 8, 0]}
        scale={0.4}
        {...props}
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

// Preload the GLTF model for optimization
useGLTF.preload("/models/react.glb");

export default ReactLogo;
