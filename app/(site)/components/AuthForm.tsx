"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input/Input";
import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

// TYPES
type variant = "LOGIN" | "REGESTER";

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [variant, setVariant] = useState<variant>("LOGIN");
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGESTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      usename: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGESTER") {
    }
    if (variant === "LOGIN") {
    }
  };

  const socialAction = (action: String) => {
    setIsLoading(true);
  };
  return (
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGESTER" && (
            <Input
              id="name"
              lable="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            lable="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            lable="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit" secondary>
              {variant === "LOGIN" ? "Sign-In" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <AuthSocialButton
            icon={BsGithub}
            onClick={() => socialAction("github")}
          />

          <AuthSocialButton
            icon={BsGoogle}
            onClick={() => socialAction("google")}
          />
        </div>
      </div>
      <div className="mt-6 flex gap-2 justify-center text-sm px-2 text-gray-500">
        <div>
          {variant === "LOGIN"
            ? "New to Messenger?"
            : "Already have an account"}
        </div>
        <div onClick={toggleVariant} className="underline cursor-pointer">
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </div>
      </div>
    </div>
  );
}
