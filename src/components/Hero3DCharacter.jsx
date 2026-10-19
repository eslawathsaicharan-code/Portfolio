import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Hero3DCharacter - Stylized 3D Developer Character
 *
 * Renders an animated 3D developer figure wearing a dark hoodie with subtle
 * idle breathing, head tracking towards cursor, cinematic purple-blue lighting,
 * glowing cyber visor/headphones, and a glowing laptop workstation.
 *
 * Also supports drop-in GLB models placed at `/models/developer.glb`.
 */
export default function Hero3DCharacter() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelMode, setModelMode] = useState('procedural'); // 'procedural' or 'glb'
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let isDisposed = false;
    let animationFrameId;
    let mixer = null;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 5.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // --- Cinematic Purple & Cyan Lighting ---
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.6);
    scene.add(ambientLight);

    // Primary purple key light
    const purpleKeyLight = new THREE.DirectionalLight(0x8b5cf6, 3.4);
    purpleKeyLight.position.set(4, 5, 4);
    scene.add(purpleKeyLight);

    // Secondary cyan/blue fill light
    const cyanFillLight = new THREE.DirectionalLight(0x38bdf8, 2.6);
    cyanFillLight.position.set(-4, 3, 3);
    scene.add(cyanFillLight);

    // Deep violet rim light behind character for atmospheric separation
    const violetRimLight = new THREE.DirectionalLight(0xa855f7, 4.2);
    violetRimLight.position.set(0, 4, -4);
    scene.add(violetRimLight);

    // Laptop glow point light
    const laptopGlow = new THREE.PointLight(0x38bdf8, 2.8, 4);
    laptopGlow.position.set(0, -0.1, 1.0);
    scene.add(laptopGlow);

    // Character Group
    const characterGroup = new THREE.Group();
    scene.add(characterGroup);

    // Procedural references for animation
    let torsoMesh = null;
    let leftShoulder = null;
    let rightShoulder = null;
    let headRig = null;
    const nodeMeshes = [];
    let holographicRing = null;

    const setupProceduralCharacter = () => {
      // Materials
      const hoodieDarkMaterial = new THREE.MeshStandardMaterial({
        color: 0x111116,
        roughness: 0.85,
        metalness: 0.1,
      });

      const hoodieHighlightMaterial = new THREE.MeshStandardMaterial({
        color: 0x181822,
        roughness: 0.7,
        metalness: 0.15,
      });

      const skinMaterial = new THREE.MeshStandardMaterial({
        color: 0x24242e,
        roughness: 0.8,
      });

      const visorMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a0a14,
        emissive: 0x6366f1,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.9,
      });

      const neonGlowCyan = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x06b6d4,
        emissiveIntensity: 1.4,
        roughness: 0.3,
      });

      const neonGlowPurple = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x8b5cf6,
        emissiveIntensity: 1.4,
        roughness: 0.3,
      });

      const laptopMaterial = new THREE.MeshStandardMaterial({
        color: 0x0f1015,
        roughness: 0.4,
        metalness: 0.7,
      });

      const screenMaterial = new THREE.MeshBasicMaterial({
        color: 0x030712,
      });

      // 1. Torso / Main Hoodie Body
      const torsoGeo = new THREE.CylinderGeometry(0.72, 0.85, 1.35, 32);
      torsoMesh = new THREE.Mesh(torsoGeo, hoodieDarkMaterial);
      torsoMesh.position.y = -0.65;
      characterGroup.add(torsoMesh);

      // Hoodie front pocket
      const pocketGeo = new THREE.BoxGeometry(0.78, 0.4, 0.35);
      const pocketMesh = new THREE.Mesh(pocketGeo, hoodieHighlightMaterial);
      pocketMesh.position.set(0, -0.75, 0.65);
      characterGroup.add(pocketMesh);

      // 2. Shoulders & Arms
      const shoulderGeo = new THREE.SphereGeometry(0.38, 24, 24);
      leftShoulder = new THREE.Mesh(shoulderGeo, hoodieDarkMaterial);
      leftShoulder.position.set(-0.95, -0.22, 0);
      characterGroup.add(leftShoulder);

      rightShoulder = new THREE.Mesh(shoulderGeo, hoodieDarkMaterial);
      rightShoulder.position.set(0.95, -0.22, 0);
      characterGroup.add(rightShoulder);

      // Upper arms angled toward keyboard
      const armGeo = new THREE.CylinderGeometry(0.24, 0.22, 0.85, 20);
      const leftArm = new THREE.Mesh(armGeo, hoodieDarkMaterial);
      leftArm.position.set(-0.85, -0.65, 0.3);
      leftArm.rotation.set(0.6, 0.2, -0.4);
      characterGroup.add(leftArm);

      const rightArm = new THREE.Mesh(armGeo, hoodieDarkMaterial);
      rightArm.position.set(0.85, -0.65, 0.3);
      rightArm.rotation.set(0.6, -0.2, 0.4);
      characterGroup.add(rightArm);

      // Hands
      const handGeo = new THREE.SphereGeometry(0.16, 16, 16);
      const leftHand = new THREE.Mesh(handGeo, skinMaterial);
      leftHand.position.set(-0.4, -0.85, 0.85);
      characterGroup.add(leftHand);

      const rightHand = new THREE.Mesh(handGeo, skinMaterial);
      rightHand.position.set(0.4, -0.85, 0.85);
      characterGroup.add(rightHand);

      // 3. Head & Futuristic Hoodie Cowl
      headRig = new THREE.Group();
      headRig.position.set(0, 0.45, 0);
      characterGroup.add(headRig);

      // Outer Hood Dome
      const hoodDomeGeo = new THREE.SphereGeometry(0.62, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.72);
      const hoodDomeMesh = new THREE.Mesh(hoodDomeGeo, hoodieDarkMaterial);
      hoodDomeMesh.scale.set(1.0, 1.15, 1.1);
      headRig.add(hoodDomeMesh);

      // Inner hood rim
      const hoodRimGeo = new THREE.TorusGeometry(0.55, 0.12, 16, 32, Math.PI * 1.5);
      const hoodRimMesh = new THREE.Mesh(hoodRimGeo, hoodieHighlightMaterial);
      hoodRimMesh.rotation.set(0, 0, -Math.PI * 0.75);
      hoodRimMesh.position.set(0, -0.05, 0.32);
      headRig.add(hoodRimMesh);

      // Stylized Face / Head inside hood
      const innerHeadGeo = new THREE.SphereGeometry(0.42, 24, 24);
      const innerHeadMesh = new THREE.Mesh(innerHeadGeo, skinMaterial);
      innerHeadMesh.position.set(0, 0.02, 0.08);
      headRig.add(innerHeadMesh);

      // Cyber Visor
      const visorGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.16, 24, 1, false, 0, Math.PI);
      const visorMesh = new THREE.Mesh(visorGeo, visorMaterial);
      visorMesh.rotation.set(-Math.PI / 2, 0, 0);
      visorMesh.position.set(0, 0.08, 0.36);
      headRig.add(visorMesh);

      // Glowing scanline indicator
      const visorLineGeo = new THREE.BoxGeometry(0.45, 0.025, 0.05);
      const visorLineMesh = new THREE.Mesh(visorLineGeo, neonGlowCyan);
      visorLineMesh.position.set(0, 0.08, 0.48);
      headRig.add(visorLineMesh);

      // Headphones around hood
      const headphoneLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.12, 16), neonGlowPurple);
      headphoneLeft.rotation.z = Math.PI / 2;
      headphoneLeft.position.set(-0.64, 0.05, 0.05);
      headRig.add(headphoneLeft);

      const headphoneRight = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.12, 16), neonGlowPurple);
      headphoneRight.rotation.z = Math.PI / 2;
      headphoneRight.position.set(0.64, 0.05, 0.05);
      headRig.add(headphoneRight);

      // 4. Laptop / Workstation
      const laptopGroup = new THREE.Group();
      laptopGroup.position.set(0, -0.88, 0.95);
      laptopGroup.rotation.x = -0.2;
      characterGroup.add(laptopGroup);

      const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.04, 0.72), laptopMaterial);
      laptopGroup.add(laptopBase);

      const keyboardMesh = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.02, 0.38), neonGlowPurple);
      keyboardMesh.position.set(0, 0.02, 0.05);
      laptopGroup.add(keyboardMesh);

      const laptopScreenGroup = new THREE.Group();
      laptopScreenGroup.position.set(0, 0.02, -0.34);
      laptopScreenGroup.rotation.x = -1.15;
      laptopGroup.add(laptopScreenGroup);

      const screenChassis = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.68, 0.03), laptopMaterial);
      screenChassis.position.set(0, 0.34, 0);
      laptopScreenGroup.add(screenChassis);

      const displayScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.96, 0.60), screenMaterial);
      displayScreen.position.set(0, 0.34, 0.02);
      laptopScreenGroup.add(displayScreen);

      // Glowing lines of code on laptop screen
      for (let i = 0; i < 6; i++) {
        const codeLine = new THREE.Mesh(
          new THREE.BoxGeometry(0.35 + Math.random() * 0.45, 0.022, 0.01),
          i % 2 === 0 ? neonGlowCyan : neonGlowPurple
        );
        codeLine.position.set(-0.15 + Math.random() * 0.1, 0.52 - i * 0.07, 0.025);
        laptopScreenGroup.add(codeLine);
      }

      // 5. Floating Holographic Data Rings & Orbiting Nodes
      const ringGeo = new THREE.TorusGeometry(1.85, 0.015, 16, 64);
      holographicRing = new THREE.Mesh(ringGeo, neonGlowCyan);
      holographicRing.rotation.x = Math.PI / 2.3;
      holographicRing.position.y = -0.4;
      scene.add(holographicRing);

      const floatingNodesCount = 28;
      const nodesGroup = new THREE.Group();
      scene.add(nodesGroup);

      const nodeGeo = new THREE.BoxGeometry(0.045, 0.045, 0.045);
      for (let i = 0; i < floatingNodesCount; i++) {
        const isCyan = i % 2 === 0;
        const mesh = new THREE.Mesh(nodeGeo, isCyan ? neonGlowCyan : neonGlowPurple);
        const angle = (i / floatingNodesCount) * Math.PI * 2;
        const radius = 2.1 + (Math.random() - 0.5) * 0.7;
        const y = (Math.random() - 0.5) * 2.4;

        mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
        mesh.userData = {
          angle,
          radius,
          speed: 0.003 + Math.random() * 0.004,
          yOrig: y,
          yPhase: Math.random() * Math.PI * 2,
        };
        nodesGroup.add(mesh);
        nodeMeshes.push(mesh);
      }
    };

    // Check if custom GLB exists
    fetch('/models/developer.glb', { method: 'HEAD' })
      .then((res) => {
        if (res.ok && !isDisposed) {
          const loader = new GLTFLoader();
          loader.load(
            '/models/developer.glb',
            (gltf) => {
              if (isDisposed) return;
              setModelMode('glb');
              const model = gltf.scene;
              model.position.set(0, -1.2, 0);
              model.scale.set(1.4, 1.4, 1.4);
              characterGroup.add(model);

              if (gltf.animations && gltf.animations.length > 0) {
                mixer = new THREE.AnimationMixer(model);
                const idleAction = mixer.clipAction(gltf.animations[0]);
                idleAction.play();
              }
            },
            undefined,
            () => {
              if (!isDisposed) setupProceduralCharacter();
            }
          );
        } else {
          if (!isDisposed) setupProceduralCharacter();
        }
      })
      .catch(() => {
        if (!isDisposed) setupProceduralCharacter();
      });

    // --- Interactive Mouse Parallax Tracking ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = Math.max(-1, Math.min(1, x));
      mouse.targetY = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation Loop ---
    const clock = new THREE.Clock();

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (mixer) {
        mixer.update(delta);
      }

      // Procedural Idle Breathing and Head Tracking
      if (torsoMesh && leftShoulder && rightShoulder) {
        const breathing = Math.sin(elapsedTime * 2.2) * 0.025;
        torsoMesh.scale.set(1 + breathing * 0.5, 1 + breathing, 1 + breathing * 0.5);
        leftShoulder.position.y = -0.22 + breathing * 0.4;
        rightShoulder.position.y = -0.22 + breathing * 0.4;
      }

      if (headRig) {
        headRig.rotation.y = mouse.x * 0.45;
        headRig.rotation.x = -mouse.y * 0.25;
        headRig.rotation.z = -mouse.x * 0.08;
      }

      // Gentle Torso Sway
      characterGroup.rotation.y = mouse.x * 0.22 + Math.sin(elapsedTime * 0.7) * 0.04;
      characterGroup.rotation.x = -mouse.y * 0.12;
      characterGroup.position.y = -0.15 + Math.sin(elapsedTime * 1.5) * 0.04;

      // Laptop glow pulse
      laptopGlow.intensity = 2.4 + Math.sin(elapsedTime * 4.0) * 0.5;

      // Holographic Ring & Orbiting Nodes
      if (holographicRing) {
        holographicRing.rotation.z += 0.004;
        holographicRing.rotation.y = Math.sin(elapsedTime * 0.5) * 0.1;
      }

      nodeMeshes.forEach((node) => {
        node.userData.angle += node.userData.speed;
        node.position.x = Math.cos(node.userData.angle) * node.userData.radius;
        node.position.z = Math.sin(node.userData.angle) * node.userData.radius;
        node.position.y = node.userData.yOrig + Math.sin(elapsedTime * 1.5 + node.userData.yPhase) * 0.15;
        node.rotation.x += 0.02;
        node.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container || isDisposed) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center pointer-events-auto"
      aria-label="Stylized 3D Male Developer Character in Dark Hoodie"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="w-64 h-64 rounded-full bg-blue-600/15 blur-3xl -ml-20" />
      </div>

      {hasWebGL ? (
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing focus:outline-none"
        />
      ) : (
        <div className="relative z-10 glass-card p-8 rounded-3xl max-w-sm text-center border border-white/10">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="text-3xl font-black text-white">EC</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">3D Developer Rig</h3>
          <p className="text-xs text-zinc-400">
            WebGL is inactive or low-power mode is enabled. Procedural visual elements remain active.
          </p>
        </div>
      )}

      {/* Floating Status Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121214]/85 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-300 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>
          {modelMode === 'glb' ? 'Custom 3D Model Loaded' : 'Stylized 3D Character &bull; Interactive'}
        </span>
      </div>
    </div>
  );
}
