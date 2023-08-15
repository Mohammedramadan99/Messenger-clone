import logo from "@/public/images/logo.png";
import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center items-center border py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image src={logo} width={50} height={50} alt="logo" className="m-auto mb-5" />
        <h2 className="text-center capitalize font-light text-5xl ">sign in to your account</h2>
      </div>
      <AuthForm/>
    </div>
  );
}