/**
 * AR integration placeholders — wire up WebXR / 8th Wall / AR.js here later.
 * Dependencies already installed: three, @react-three/fiber, @react-three/drei
 */
export const arConfig = {
  enabled: false,
  /** Future: enable when WebXR session is supported */
  webXrRequiredFeatures: ["local", "hit-test"] as const,
  /** Placeholder model paths for AR markers */
  defaultModelPath: "/models/placeholder.glb",
  minCameraPermissionMessage:
    "Camera access will be required for AR navigation. Not active in this preview.",
};
