import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

interface SceneContentProps {
  scrollProgress: { current: number };
  mousePos: { current: { x: number; y: number } };
  theme: string;
}

const SceneContent = ({ scrollProgress, mousePos, theme }: SceneContentProps) => {
  const isDark = theme === 'dark';
  const wireframeGlobeRef = useRef<THREE.Group>(null);
  const ringGridRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const p = scrollProgress.current;
    const mx = mousePos.current.x;
    const my = mousePos.current.y;

    // Smooth subtle camera choreography mapped to scroll
    const targetCamX = Math.sin(p * Math.PI) * 1.5 + mx * 0.4;
    const targetCamY = -p * 8 - my * 0.3;
    const targetCamZ = 6.8;

    state.camera.position.lerp(
      new THREE.Vector3(targetCamX, targetCamY, targetCamZ),
      delta * 2.0
    );

    cameraTarget.current.set(mx * 0.2, -p * 8, 0);
    state.camera.lookAt(cameraTarget.current);

    // Continuous elegant wireframe rotation (inspired by Image 2)
    if (wireframeGlobeRef.current) {
      wireframeGlobeRef.current.rotation.y += delta * 0.2;
      wireframeGlobeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.15 + p * 0.5;
    }

    if (ringGridRef.current) {
      ringGridRef.current.rotation.z += delta * 0.08;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.05;
    }
  });

  return (
    <>
      {/* Subtle, refined ambient lighting */}
      <ambientLight intensity={isDark ? 0.7 : 1.2} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} color="#818cf8" />
      <pointLight position={[-8, 5, -3]} intensity={1.2} color="#06b6d4" />
      <pointLight position={[8, -5, 3]} intensity={1.0} color="#a855f7" />

      {/* Atmospheric Space: Stars & Floating Sparkles */}
      {isDark ? (
        <>
          <Stars radius={90} depth={60} count={3500} factor={3.5} saturation={0.8} fade speed={1.0} />
          <Sparkles count={70} scale={18} size={2.5} speed={0.3} opacity={0.5} color="#38bdf8" />
        </>
      ) : (
        <Sparkles count={50} scale={18} size={2} speed={0.4} opacity={0.3} color="#6366f1" />
      )}

      {/* HERO SECTION 3D: Clean, delicate wireframe geodesic structure in deep background */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[1.5, 0, -2.5]} scale={1.2}>
          <group ref={wireframeGlobeRef}>
            {/* Inner Geodesic Wireframe Sphere */}
            <mesh scale={1.3}>
              <icosahedronGeometry args={[1.4, 2]} />
              <meshStandardMaterial
                color="#6366f1"
                wireframe
                emissive="#4338ca"
                emissiveIntensity={isDark ? 0.8 : 0.3}
                transparent
                opacity={isDark ? 0.65 : 0.4}
              />
            </mesh>

            {/* Subtle inner core polyhedral node */}
            <mesh scale={0.65}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial
                color="#06b6d4"
                wireframe
                emissive="#0891b2"
                emissiveIntensity={isDark ? 0.9 : 0.4}
                transparent
                opacity={isDark ? 0.7 : 0.45}
              />
            </mesh>
          </group>

          {/* Horizontal Orbital Wireframe Ring Grid (as seen in Image 2) */}
          <mesh ref={ringGridRef} rotation={[-Math.PI / 2.3, 0, 0]}>
            <ringGeometry args={[2.5, 3.2, 48]} />
            <meshStandardMaterial
              color="#06b6d4"
              wireframe
              side={THREE.DoubleSide}
              emissive="#0891b2"
              emissiveIntensity={isDark ? 0.6 : 0.25}
              transparent
              opacity={isDark ? 0.45 : 0.3}
            />
          </mesh>

          {/* Outer Thin Orbital Ring */}
          <mesh ref={outerRingRef} rotation={[-Math.PI / 2.3, 0, 0]}>
            <torusGeometry args={[3.8, 0.015, 16, 100]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#7e22ce"
              emissiveIntensity={isDark ? 0.6 : 0.2}
              transparent
              opacity={isDark ? 0.4 : 0.25}
            />
          </mesh>
        </group>
      </Float>

      {/* MID / EXPERIENCE SECTION 3D: Continuous Wireframe Orbit System */}
      <group position={[0, -8, -2]} scale={1.3}>
        {/* Geodesic Wireframe Globe */}
        <mesh rotation={[0.4, 0.4, 0]}>
          <icosahedronGeometry args={[1.8, 2]} />
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            emissive="#7e22ce"
            emissiveIntensity={isDark ? 0.85 : 0.35}
            transparent
            opacity={isDark ? 0.6 : 0.35}
          />
        </mesh>

        {/* Large Horizontal Wireframe Ring Grid (Exact match to Image 2) */}
        <mesh rotation={[-Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[3.2, 4.2, 64]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            side={THREE.DoubleSide}
            emissive="#0891b2"
            emissiveIntensity={isDark ? 0.7 : 0.3}
            transparent
            opacity={isDark ? 0.5 : 0.3}
          />
        </mesh>
      </group>
    </>
  );
};

export const Cinematic3DWorld = () => {
  const { theme } = useTheme();
  const scrollProgress = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        scrollProgress.current = window.scrollY / total;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700">
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <SceneContent
          scrollProgress={scrollProgress}
          mousePos={mousePos}
          theme={theme}
        />
      </Canvas>
    </div>
  );
};
