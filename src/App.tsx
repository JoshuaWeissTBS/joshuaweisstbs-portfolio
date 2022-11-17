import { Canvas } from '@react-three/fiber'
import reactLogo from './assets/react.svg'
import './App.css'

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </mesh>
    </Canvas>
  )
};

function App() {
  return (
    <div className='App h-screen'>
      <ThreeScene/>
    </div>
  )
}

export default App
