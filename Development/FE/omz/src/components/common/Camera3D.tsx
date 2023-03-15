import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../assets/3DAvatar/Rabbit";

type Props = {
  Avatar?: any;
  MiniRoom?: any;
};
export default function Camera3D({ Avatar, MiniRoom }: Props) {
  return (
    <Canvas
      camera={{ position: [-15, 15, 15], fov: 60 }}
      className="w-full h-full"
    >
      <ambientLight intensity={1} />
      {/* <ambientLight intensity={0.1} /> */}
      <directionalLight intensity={0.2} />
      {Avatar}
      {MiniRoom}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
