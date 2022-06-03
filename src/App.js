import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

import "./styles.css";

function Box() {
  return (
    <mesh position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Stars />
        <Plane />
        <Box />
      </Canvas>

      <div className="tagline">
        <span>
          Built with 💖 by <a href="https://inf800.github.io/"> INF800 </a>{" "}
        </span>
      </div>
    </>
  );
}
