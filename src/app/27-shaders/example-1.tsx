import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { WebGPURenderer } from "three/webgpu";
import { type WebGPURendererParameters } from "three/src/renderers/webgpu/WebGPURenderer.js";
import React from "react";
import * as THREE from "three";
import * as TSL from "three/tsl";

const Example1 = () => {
  return (
    <>
      <Canvas
        style={{ width: "400px", height: "400px" }}
        gl={async (props) => {
          const renderer = new WebGPURenderer(
            props as WebGPURendererParameters
          );
          await renderer.init();
          return renderer;
        }}
      >
        <color attach="background" args={["#000"]} />
        <OrbitControls />

        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

        <directionalLight
          position={[0.25, 2, -2.25]}
          intensity={2.6}
          color={"#ffffff"}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={15}
        />
        <ambientLight intensity={0.2} />
      </Canvas>
    </>
  );
};

export default Example1;
