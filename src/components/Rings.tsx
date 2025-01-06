import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import * as THREE from "three";

interface RingsProps {
  position: [number, number, number];
}

const Rings: React.FC<RingsProps> = ({ position }) => {
  // Ref to hold all meshes
  const refList = useRef<THREE.Mesh[]>([]);

  // Callback to collect mesh references
  const getRef = useCallback((mesh: THREE.Mesh | null) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  // Load texture
  const texture = useTexture("textures/rings.png");

  // GSAP animation
  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      // Set position for all meshes
      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      // Animate rotation
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          }
        );
    },
    {
      dependencies: [position],
    }
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
