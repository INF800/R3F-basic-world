import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useBox, Physics } from "@react-three/cannon";

import "./styles.css";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        // todo: fix falling beyond on jump.
        // note: horiontal jump i.e `api.velocity.set(2, 10, 0)` gives expected behaviour
        api.velocity.set(2, 10, 0);
      }}
      ref={ref}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  const [ref] = useBox(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0]
  }));
  return (
    <mesh ref={ref}>
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
        <Physics>
          <Plane />
          <Box />
        </Physics>
      </Canvas>

      <div className="tagline">
        <span>
          Built with 💖 by <a href="https://inf800.github.io/"> INF800 </a>{" "}
        </span>
      </div>
    </>
  );
}
