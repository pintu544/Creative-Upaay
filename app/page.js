import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="max-w-[1300px] w-full mx-auto flex items-start bg-white">
      <Sidebar />
      <Main />
    </div>
  );
}
