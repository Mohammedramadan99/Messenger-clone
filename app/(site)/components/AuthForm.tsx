"use client";
import Input from "@/app/components/Input/Input";
import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

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
  return <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white px-4 py-8 sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input/>
      </form>
    </div>
  </div>;
}
