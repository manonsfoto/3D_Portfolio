import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

type TargetProps = JSX.IntrinsicElements["mesh"];

const Target: React.FC<TargetProps> = (props) => {
  // Type the ref to ensure it's a THREE.Mesh
  const targetRef = useRef<THREE.Mesh>(null);

  // Load the GLTF model
  const { scene } = useGLTF("/models/model.gltf") as { scene: THREE.Group };

  // GSAP animation
  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
