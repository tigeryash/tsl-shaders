import { vec4, positionLocal } from "three/tsl";

const PlaneMesh = ({ version }: { version: number }) => {
  const colorNode = vec4(1, 0, 0, 1); // Red color (R, G, B, A)
  const positionNode = positionLocal;

  return (
    <mesh key={version}>
      <planeGeometry />
      <meshBasicNodeMaterial
        colorNode={colorNode}
        positionNode={positionNode}
      />
    </mesh>
  );
};

export default PlaneMesh;
