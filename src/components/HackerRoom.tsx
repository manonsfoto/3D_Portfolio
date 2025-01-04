import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";

// Extend GLTF Result type
type GLTFResult = {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
};

type Props = GroupProps;

const HackerRoom: React.FC<Props> = (props) => {
  const { nodes, materials } = useGLTF(
    "/models/hacker-room.glb"
  ) as unknown as GLTFResult;

  const monitortxt = useTexture("textures/desk/monitor.png");
  const screenTxt = useTexture("textures/desk/screen.png");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      >
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_2.geometry}
        material={materials.computer_mat}
      >
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_8.geometry}
        material={materials.tv_mat}
      >
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
};

// Preload the model
useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;
