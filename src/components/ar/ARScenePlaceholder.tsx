"use client";

/**
 * Minimal Three.js scene — placeholder for future AR/WebXR integration.
 * Not connected to device camera or hit-testing yet.
 */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function CampusBlock({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <CampusBlock position={[-1.2, 0.4, 0]} size={[1.2, 0.8, 1]} color="#334155" />
      <CampusBlock position={[0.5, 0.5, -0.3]} size={[1.4, 1, 1.2]} color="#475569" />
      <CampusBlock position={[1.8, 0.35, 0.5]} size={[1, 0.7, 0.9]} color="#334155" />
      <CampusBlock position={[0, 0.25, 1.2]} size={[1.6, 0.5, 0.8]} color="#64748b" />
      <Text
        position={[0, 1.8, 0]}
        fontSize={0.22}
        color="#34d399"
        anchorX="center"
        anchorY="middle"
      >
        AR preview (3D placeholder)
      </Text>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} />
    </>
  );
}

export function ARScenePlaceholder() {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950">
      <Canvas camera={{ position: [3.5, 2.5, 3.5], fov: 45 }}>
        <Scene />
      </Canvas>
      <p className="px-3 py-2 text-center text-[10px] text-slate-500">
        Drag to orbit — future AR view will use your camera
      </p>
    </div>
  );
}
