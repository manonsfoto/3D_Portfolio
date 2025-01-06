import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import { Mesh } from "three";

type CubeProps = JSX.IntrinsicElements["group"];

const Cube: React.FC<CubeProps> = ({ ...props }) => {
  const { nodes } = useGLTF("models/cube.glb") as any; // Ensure correct typecasting if `useGLTF` doesn't have proper types
  const texture = useTexture("textures/cube.png");
  const cubeRef = useRef<Mesh>(null); // Use the correct Three.js type for mesh ref
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!cubeRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    tl.to(cubeRef.current.rotation, {
      y: hovered ? "+=2" : `+=${Math.PI * 2}`,
      x: hovered ? "+=2" : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: {
        each: 0.15,
      },
    });

    return () => {
      tl.kill(); // Clean up GSAP animation when the component unmounts
    };
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)} // Reset hovered state on pointer leave
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");

export default Cube;
