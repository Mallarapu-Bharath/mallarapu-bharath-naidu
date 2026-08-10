import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

const NODES = [
  { label: "AI", color: "#22d3ee", radius: 2.85, y: 0.9, speed: 0.28, phase: 0 },
  { label: "IoT", color: "#38bdf8", radius: 2.6, y: -0.3, speed: 0.23, phase: 1.25 },
  { label: "CODE", color: "#818cf8", radius: 3.0, y: 1.5, speed: 0.19, phase: 2.5 },
  { label: "ROBOTICS", color: "#a78bfa", radius: 2.75, y: -1.35, speed: 0.21, phase: 3.7 },
  { label: "EMBEDDED", color: "#67e8f9", radius: 3.15, y: 0.15, speed: 0.16, phase: 5 },
];

function Node({
  node,
  reduced,
}: {
  node: (typeof NODES)[number];
  reduced: boolean;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = reduced ? node.phase : state.clock.elapsedTime * node.speed + node.phase;
    ref.current.position.set(
      Math.cos(t) * node.radius,
      node.y + (reduced ? 0 : Math.sin(t * 1.6) * 0.18),
      Math.sin(t) * node.radius,
    );
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.062, 16, 16]} />
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={2.2} />
      </mesh>
      <Billboard>
        <Text
          position={[0, 0.22, 0]}
          fontSize={0.17}
          color={node.color}
          anchorX="center"
          anchorY="bottom"
          letterSpacing={0.12}
several          outlineWidth={0}
        >
          {node.label}
        </Text>
      </Billboard>
    </group>
  );
}

export function FloatingNodes({ reduced }: { reduced: boolean }) {
  return (
    <group>
      {NODES.map((n) => (
        <Node key={n.label} node={n} reduced={reduced} />
      ))}
    </group>
  );
}
