import logo from "@/public/images/logo.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center items-center border py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md border">
        <Image src={logo} width={48} height={48} alt="logo" />
      </div>
    </div>
  );
}