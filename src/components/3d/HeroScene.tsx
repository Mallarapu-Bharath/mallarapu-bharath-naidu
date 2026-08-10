import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { TechnologyCore, Particles } from "./TechnologyCore";
import { FloatingNodes } from "./FloatingNodes";

function ParallaxRig({ enabled }: { enabled: boolean }) {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (!enabled) return;
    camera.position.x += (pointer.x * 0.55 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.35 + 0.2 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const reduce = useReducedMotion() ?? false;
  const [isMobile, setIsMobile] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      ref={wrapper}
      className="relative h-[360px] w-full touch-none select-none sm:h-[460px] lg:h-[560px]"
    >
      <Canvas
        camera={{ position: [0, 0.2, 8], fov: 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#0b1220"]} />
        <fog attach="fog" args={["#0b1220", 8, 16]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 5]} intensity={1.2} color="#a5f3fc" />
        <pointLight position={[-5, -3, -4]} intensity={2.4} color="#a78bfa" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#22d3ee" distance={6} />

        <Suspense fallback={null}>
          <TechnologyCore reduced={reduce} />
          <FloatingNodes reduced={reduce} />
          <Particles count={isMobile ? 120 : 320} />
        </Suspense>

        <ParallaxRig enabled={!interacting && !reduce && !isMobile} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
          autoRotate={!interacting && !reduce}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={(Math.PI * 4) / 5}
          onStart={() => setInteracting(true)}
          onEnd={() => setInteracting(false)}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2">
        <span className="rounded-full border border-cyan/30 bg-background/70 px-4 py-1.5 font-mono text-[0.65rem] tracking-[0.25em] text-cyan backdrop-blur">
          DRAG TO ROTATE
        </span>
      </div>
    </div>
  );
}
