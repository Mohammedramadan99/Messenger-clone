"use client";
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
    setIsLoading(true)
  }
  return <div>AuthForm</div>;
}
