import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, ReactNode } from "react";
import { Group } from "three";

interface HeroCameraProps {
  children: ReactNode;
  isMobile: boolean;
}

const HeroCamera: React.FC<HeroCameraProps> = ({ children, isMobile }) => {
  const groupRef = useRef<Group>(null); // Correctly typing the ref as a Three.js Group

  useFrame((state, delta) => {
    // Smoothly move the camera position
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile && groupRef.current) {
      // Smoothly rotate the group based on pointer position
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
      {children}
    </group>
  );
};

export default HeroCamera;
