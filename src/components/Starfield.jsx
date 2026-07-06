import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const STAR_COLOR = "#ece1c8";
const SATELLITE_INTERVAL_MS = 60000;

let streakId = 0;

function makeShootingStar() {
  const x0 = (Math.random() - 0.5) * 10;
  const y0 = Math.random() * 4 + 1;
  return {
    id: streakId++,
    kind: "shooting",
    x0,
    y0,
    x1: x0 - (Math.random() * 5 + 4),
    y1: y0 - (Math.random() * 4 + 3),
    z: -1 - Math.random() * 2,
    duration: 700 + Math.random() * 300,
    trailLength: 0.22,
    baseOpacity: 0.9,
    color: "#ffffff",
  };
}

function makeSatellite() {
  const y0 = (Math.random() - 0.5) * 3;
  const goingRight = Math.random() > 0.5;
  const x0 = goingRight ? -7 : 7;
  const x1 = goingRight ? 7 : -7;
  return {
    id: streakId++,
    kind: "satellite",
    x0,
    y0,
    x1,
    y1: y0 + (Math.random() - 0.5) * 0.6,
    z: -2,
    duration: 9000 + Math.random() * 3000,
    trailLength: 0.05,
    baseOpacity: 0.3,
    color: "#ffffff",
  };
}

function StarPoints() {
  const count = 1500;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = -Math.random() * 6 - 0.5;
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={STAR_COLOR}
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function Streak({ streak, onDone }) {
  const lineRef = useRef();
  const matRef = useRef();
  const startRef = useRef(null);

  useFrame(({ clock }) => {
    if (startRef.current === null) startRef.current = clock.elapsedTime * 1000;
    const elapsed = clock.elapsedTime * 1000 - startRef.current;
    const t = elapsed / streak.duration;

    if (t >= 1) {
      onDone(streak.id);
      return;
    }

    const headT = Math.min(1, t);
    const tailT = Math.max(0, t - streak.trailLength);
    const headX = THREE.MathUtils.lerp(streak.x0, streak.x1, headT);
    const headY = THREE.MathUtils.lerp(streak.y0, streak.y1, headT);
    const tailX = THREE.MathUtils.lerp(streak.x0, streak.x1, tailT);
    const tailY = THREE.MathUtils.lerp(streak.y0, streak.y1, tailT);

    if (lineRef.current) {
      lineRef.current.geometry.setFromPoints([
        new THREE.Vector3(tailX, tailY, streak.z),
        new THREE.Vector3(headX, headY, streak.z),
      ]);
    }

    const fadeIn = Math.min(1, t / 0.12);
    const fadeOut = Math.min(1, (1 - t) / 0.3);
    if (matRef.current) {
      matRef.current.opacity = Math.min(fadeIn, fadeOut) * streak.baseOpacity;
    }
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial ref={matRef} color={streak.color} transparent opacity={0} />
    </line>
  );
}

function Scene() {
  const groupRef = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const [streaks, setStreaks] = useState([]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    const handleClick = () => {
      setStreaks((prev) => [...prev, makeShootingStar()]);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("click", handleClick);
    const satelliteTimer = setInterval(() => {
      setStreaks((prev) => [...prev, makeSatellite()]);
    }, SATELLITE_INTERVAL_MS);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handleClick);
      clearInterval(satelliteTimer);
    };
  }, []);

  const handleStreakDone = (id) => {
    setStreaks((prev) => prev.filter((streak) => streak.id !== id));
  };

  useFrame(() => {
    if (!groupRef.current) return;
    const targetY = pointer.current.x * 0.08;
    const targetX = -pointer.current.y * 0.08;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.03;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.03;
  });

  return (
    <>
      <group ref={groupRef}>
        <StarPoints />
      </group>
      {streaks.map((streak) => (
        <Streak key={streak.id} streak={streak} onDone={handleStreakDone} />
      ))}
    </>
  );
}

export default function Starfield() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
    </div>
  );
}
