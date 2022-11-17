import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import './App.css'

function ThreeScene() {
  const boxRef = useRef<Mesh>(null!)

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01
      boxRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
};

function App() {
  return (
    <div className='App h-screen'>
      <Canvas>
        <ambientLight />
        <pointLight position={[5,5,5]} />
        <ThreeScene/>
      </Canvas>
    </div>
  )
}

export default App
