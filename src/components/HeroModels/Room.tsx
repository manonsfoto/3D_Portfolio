import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import React, { useRef, useEffect } from "react";

type GLTFResult = GLTF & {
  nodes: {
    _________6_blinn1_0: THREE.Mesh;
    body1_blinn1_0: THREE.Mesh;
    cabin_blinn1_0: THREE.Mesh;
    chair_body_blinn1_0: THREE.Mesh;
    comp_blinn1_0: THREE.Mesh;
    emis_lambert1_0: THREE.Mesh;
    handls_blinn1_0: THREE.Mesh;
    keyboard_blinn1_0: THREE.Mesh;
    kovrik_blinn1_0: THREE.Mesh;
    lamp_bl_blinn1_0: THREE.Mesh;
    lamp_white_blinn1_0: THREE.Mesh;
    miuse_blinn1_0: THREE.Mesh;
    monitor2_blinn1_0: THREE.Mesh;
    monitor3_blinn1_0: THREE.Mesh;
    pCylinder5_blinn1_0: THREE.Mesh;
    pillows_blinn1_0: THREE.Mesh;
    polySurface53_blinn1_0: THREE.Mesh;
    radiator_blinn1_0: THREE.Mesh;
    radiator_blinn1_0001: THREE.Mesh;
    railing_blinn1_0: THREE.Mesh;
    red_bttns_blinn1_0: THREE.Mesh;
    red_vac_blinn1_0: THREE.Mesh;
    stylus_blinn1_0: THREE.Mesh;
    table_blinn1_0: THREE.Mesh;
    tablet_blinn1_0: THREE.Mesh;
    triangle_blinn1_0: THREE.Mesh;
    vac_black_blinn1_0: THREE.Mesh;
    vacuum1_blinn1_0: THREE.Mesh;
    vacuumgrey_blinn1_0: THREE.Mesh;
    vires_blinn1_0: THREE.Mesh;
    window_blinn1_0: THREE.Mesh;
    window4_phong1_0: THREE.Mesh;
  };
  materials: {
    blinn1: THREE.MeshStandardMaterial;
    lambert1: THREE.MeshStandardMaterial;
    phong1: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type GLTFAction = THREE.AnimationClip;

export function Room(props: React.ComponentProps<"group">) {
  const matcapTexture = useTexture("/images/textures/mat1.png");
  const gltf = useGLTF("/models/optimized-room.glb");
  const { nodes, materials } = gltf as unknown as GLTFResult;

  
  const screensRef = useRef<THREE.Mesh>(null);

 
  useEffect(() => {
    if (screensRef.current) {
      screensRef.current.layers.enable(1);
    }
  }, []);

  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#d90429",
  });

  const bodyMaterial = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  });

  const tableMaterial = new THREE.MeshPhongMaterial({
    color: "#582f0e",
  });

  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  });

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#8338ec",
  });

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#000",
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          lights={[]} 
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
          kernelSize={3}
          selectionLayer={1} 
        />
      </EffectComposer>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
