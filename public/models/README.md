# 3D Developer Models Directory

To replace the procedural 3D developer character with a custom animated 3D model:

1. Export your 3D character as a `.glb` or `.gltf` binary file.
2. Name the file: `developer.glb`
3. Place it directly in this directory (`public/models/developer.glb`).
4. Ensure the model has an idle animation track (e.g. `Idle`, `breathing`, or the first embedded clip).

The `Hero3DCharacter.jsx` component will automatically detect the presence of `/models/developer.glb`, load it with Three.js `GLTFLoader`, initialize the `AnimationMixer`, and apply the portfolio's purple-blue cinematic lighting and mouse tracking.

If no file is provided, the high-performance procedural stylized 3D developer wearing a dark hoodie is rendered automatically.
