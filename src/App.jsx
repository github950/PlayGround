/* eslint-disable no-unused-vars */
// import React, { Suspense, useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function AnimatedModel({ url }) {
//   const { scene, animations } = useGLTF(url);
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const actionRef = useRef();

//   const [hasEntered, setHasEntered] = useState(false);
//   const [hasTurned, setHasTurned] = useState(false);
//   const walkTime = useRef(0);

//   useEffect(() => {
//     if (!scene) return;

//     const model = scene;
//     modelRef.current = model;

//     // Start from left and face right
//     model.position.set(-5, -1, 0);
//     model.rotation.y = 1.5; // ~90 degrees to right (in radians)
//   }, [scene]);

//   useFrame((state, delta) => {
//     const model = modelRef.current;
//     if (!model) return;

//     // Step 1: Move to center with manual walk
//     if (!hasEntered) {
//       walkTime.current += delta;
//       const target = new THREE.Vector3(0, -1, 0);
//       model.position.lerp(target, delta * 0.8);

//       // Bobbing effect
//       const bob = Math.sin(walkTime.current * 10) * 0.02;
//       model.position.y = -1 + bob;

//       if (model.position.distanceTo(target) < 0.05) {
//         model.position.set(0, -1, 0); // Fix final position
//         setHasEntered(true);
//         walkTime.current = 0; // Reset timer
//       }
//       return;
//     }

//     // Step 2: Rotate to face camera
//     if (hasEntered && !hasTurned) {
//       const targetRotationY = 6.5; // 270°
//       model.rotation.y = THREE.MathUtils.lerp(
//         model.rotation.y,
//         targetRotationY,
//         delta * 3
//       );

//       if (Math.abs(model.rotation.y - targetRotationY) < 0.01) {
//         model.rotation.y = targetRotationY;
//         setHasTurned(true);
//       }
//       return;
//     }

//     // Step 3: Play animation (if available)
//     if (hasTurned && mixerRef.current && actionRef.current) {
//       mixerRef.current.update(delta);
//     }
//   });

//   useEffect(() => {
//     if (hasTurned && modelRef.current && animations.length) {
//       const mixer = new THREE.AnimationMixer(modelRef.current);
//       mixerRef.current = mixer;
//       const action = mixer.clipAction(animations[0]);
//       actionRef.current = action;
//       action.play();
//     }
//   }, [animations, hasTurned]);

//   return <primitive object={scene} />;
// }

// function useFileUrl(file) {
//   const [url, setUrl] = useState(null);

//   useEffect(() => {
//     if (!file) return;
//     const objectUrl = URL.createObjectURL(file);
//     setUrl(objectUrl);
//     return () => URL.revokeObjectURL(objectUrl);
//   }, [file]);

//   return url;
// }

// export default function App() {
//   const [file, setFile] = useState(null);
//   const modelUrl = useFileUrl(file);

//   // Basic full-screen style setup
//   useEffect(() => {
//     document.body.style.margin = 0;
//     document.body.style.padding = 0;
//     document.body.style.overflow = 'hidden';
//     document.documentElement.style.height = '100%';
//     document.body.style.height = '100%';
//   }, []);

//   return (
//     <>
//       <input
//         type="file"
//         accept=".glb"
//         onChange={(e) => setFile(e.target.files?.[0] || null)}
//         style={{
//           position: 'absolute',
//           zIndex: 1,
//           top: 10,
//           left: 10,
//           background: '#fff',
//           padding: '6px',
//           borderRadius: '6px',
//         }}
//       />
//       <Canvas
//         camera={{ fov: 45, near: 0.001, far: 10000 }}
//         style={{
//           position: 'absolute',
//           width: '100vw',
//           height: '100vh',
//           top: 0,
//           left: 0,
//         }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1} />
//         <Suspense fallback={null}>
//           {modelUrl && <AnimatedModel url={modelUrl} />}
//         </Suspense>
//         <OrbitControls makeDefault />
//       </Canvas>
//     </>
//   );
// }import React, { useRef, useState, useEffect } from 'react';import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Html } from '@react-three/drei';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useEffect, useRef, useState } from 'react';

// function TalkingModel({ file, isTalking }) {
//   const [model, setModel] = useState(null);
//   const jawRef = useRef(null);
//   const [hasJaw, setHasJaw] = useState(true);
//   const [boneNames, setBoneNames] = useState([]);

//   useEffect(() => {
//     if (!file) return;

//     const loader = new GLTFLoader();
//     const url = URL.createObjectURL(file);

//     loader.load(
//       url,
//       (gltf) => {
//         const scene = gltf.scene;
//         setModel(scene);

//         const bones = [];
//         scene.traverse((child) => {
//           if (child.isBone) bones.push(child.name);
//         });
//         console.log('🦴 Bones:', bones);
//         setBoneNames(bones);

//         const jawBone =
//           scene.getObjectByName('Jaw_SH_WithSimpleRig') ||
//           scene.getObjectByName('Jaw') ||
//           scene.getObjectByName('jaw') ||
//           scene.getObjectByName('LowerJaw');

//         if (jawBone) {
//           jawRef.current = jawBone;
//           setHasJaw(true);
//         } else {
//           jawRef.current = null;
//           setHasJaw(false);
//         }
//       },
//       undefined,
//       (error) => {
//         console.error('Error loading model:', error);
//       }
//     );

//     return () => {
//       URL.revokeObjectURL(url);
//     };
//   }, [file]);

//   useFrame(({ clock }) => {
//     if (jawRef.current) {
//       jawRef.current.rotation.x = isTalking
//         ? 0.2 * Math.sin(clock.getElapsedTime() * 12)
//         : 0;
//     }
//   });

//   if (!model) return null;

//   return (
//     <>
//       <primitive object={model} />
//       <Html position={[0, 3, 0]}>
//         <div
//           style={{
//             background: 'white',
//             padding: '10px',
//             borderRadius: '8px',
//             color: 'black',
//             maxHeight: '200px',
//             overflowY: 'auto',
//             maxWidth: '300px',
//             fontSize: '12px',
//           }}
//         >
//           <strong>🦴 Bones:</strong>
//           <ul style={{ marginTop: 8 }}>
//             {boneNames.length > 0 ? (
//               boneNames.map((name) => <li key={name}>{name}</li>)
//             ) : (
//               <li>No bones found</li>
//             )}
//           </ul>
//         </div>
//       </Html>
//     </>
//   );
// }

// export default function App() {
//   const [file, setFile] = useState(null);
//   const [isTalking, setIsTalking] = useState(false);

//   const speak = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';

//     utterance.onstart = () => setIsTalking(true);
//     utterance.onend = () => setIsTalking(false);

//     window.speechSynthesis.speak(utterance);
//   };

//   const handleFileChange = (e) => {
//     const selected = e.target.files[0];
//     if (selected && selected.name.endsWith('.glb')) {
//       setFile(selected);
//     } else {
//       alert('Please upload a .glb file');
//     }
//   };

//   const handleSayHello = () => {
//     speak('Hello world. I am alive!');
//   };

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//         <ambientLight intensity={1} />
//         <directionalLight position={[2, 2, 2]} />
//         {file && <TalkingModel file={file} isTalking={isTalking} />}
//         <OrbitControls />
//       </Canvas>

//       <div
//         style={{
//           position: 'absolute',
//           top: 20,
//           left: 20,
//           background: 'rgba(255,255,255,0.9)',
//           padding: '10px',
//           borderRadius: '10px',
//           zIndex: 10,
//         }}
//       >
//         <input type="file" accept=".glb" onChange={handleFileChange} />
//         <button onClick={handleSayHello} style={{ marginLeft: '10px' }}>
//           Say Hello World
//         </button>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Main, { Footer } from './Components/HomeSections';
import BackToTopButton from './Components/BackToTop';
import SmoothScroll from './Components/SmoothScroll';
import CheckoutPage from './Components/CheckoutPage';
import ShopPage from './Components/ShopPage';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import ScrollToTopOnRouteChange from './Components/PatchChange';
import ScrollToHash from './Components/ScrolToHash';

function App() {
  return (
    <div className="text-white min-h-screen">
      <SmoothScroll />
      <ScrollToTopOnRouteChange />
      <ScrollToHash />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
