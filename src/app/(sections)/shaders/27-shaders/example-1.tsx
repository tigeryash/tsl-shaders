import { OrbitControls } from "@react-three/drei";
import { WebGPURenderer } from "three/webgpu";
import { type WebGPURendererParameters } from "three/src/renderers/webgpu/WebGPURenderer.js";
import React, { useState } from "react";
import { ThreeToJSXElements, extend, Canvas } from "@react-three/fiber";
import * as THREE from "three/webgpu";
import Link from "next/link";
import PlaneMesh from "./mesh";
declare module "@react-three/fiber" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
extend(THREE as any);

const Example1 = () => {
  const [version, setVersion] = useState(0);
  return (
    <main className="flex flex-col w-full min-h-[100vh] p-8">
      <Link href="/" className="self-start top-0">
        <button>Back</button>
      </Link>

      <button onClick={() => setVersion((prev) => prev + 1)}>Update</button>
      <Canvas
        style={{ width: "400px", height: "400px" }}
        className="mx-auto"
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

        <PlaneMesh version={version} />

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
    </main>
  );
};

export default Example1;
