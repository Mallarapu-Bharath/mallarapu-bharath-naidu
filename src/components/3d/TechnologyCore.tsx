import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

export function TechnologyCore({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reduced) return;
    if (group.current) group.current.rotation.y += delta * 0.12;
    if (inner.current) {
      inner.current.rotation.x -= delta * 0.2;
      inner.current.rotation.z += delta * 0.1;
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.1) * 0.03;
      inner.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group}>
      {/* Glowing inner core */}
      <Sphere args={[0.62, 32, 32]}>
        <meshStandardMaterial
          color="#0d2b3a"
          emissive="#22d3ee"
          emissiveIntensity={1.5}
          roughness={0.25}
          metalness={0.4}
        />
      </Sphere>

      {/* Faceted shell */}
      <Icosahedron ref={inner} args={[1.15, 1]}>
        <meshStandardMaterial
          color="#7dd3fc"
          wireframe
          emissive="#38bdf8"
          emissiveIntensity={0.7}
          transparent
          opacity={0.55}
        />
      </Icosahedron>

      {/* Outer glass cube */}
      <mesh rotation={[0.5, 0.6, 0]}>
        <boxGeometry args={[1.9, 1.9, 1.9]} />
        <meshPhysicalMaterial
          color="#a78bfa"
          transparent
          opacity={0.08}
          roughness={0.1}
          metalness={0.2}
          transmission={0.6}
        />
      </mesh>
      <mesh rotation={[0.5, 0.6, 0]}>
        <boxGeometry args={[1.9, 1.9, 1.9]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.28} />
      </mesh>

      <OrbitRings reduced={reduced} />
    </group>
  );
}

function OrbitRings({ reduced }: { reduced: boolean }) {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  const c = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (reduced) return;
    if (a.current) a.current.rotation.z += delta * 0.16;
    if (b.current) b.current.rotation.x += delta * 0.13;
    if (c.current) c.current.rotation.y += delta * 0.1;
  });

  const ring = (color: string) => (
    <meshBasicMaterial color={color} transparent opacity={0.45} />
  );

  return (
    <group>
      <Torus ref={a} args={[2.1, 0.008, 8, 120]} rotation={[Math.PI / 2.2, 0, 0]}>
        {ring("#22d3ee")}
      </Torus>
      <Torus ref={b} args={[2.5, 0.006, 8, 120]} rotation={[0, Math.PI / 3, Math.PI / 5]}>
        {ring("#818cf8")}
      </Torus>
      <Torus ref={c} args={[2.85, 0.005, 8, 120]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        {ring("#a78bfa")}
      </Torus>
    </group>
  );
}

export function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 3.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#7dd3fc" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}
