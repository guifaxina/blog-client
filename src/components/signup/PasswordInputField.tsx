import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../ui/input";

type Props = {
  placeholder: string;
  register: UseFormRegisterReturn;
  errors?: string;
};

export default function PasswordInputField({
  placeholder,
  register,
  errors,
}: Props) {
  const [inputType, setInputType] = useState<"password" | "text">("password");

  function handleInputType(type: "password" | "text") {
    setInputType(type);
  }

  function handleVisibility() {
    console.log();
    inputType === "password"
      ? handleInputType("text")
      : handleInputType("password");
  }

  return (
    <div className="flex relative w-full">
      {errors ? (
        <Input
          className="bg-slate-950 outline outline-red-500 outline-1 focus-visible:outline-red-500"
          type={inputType}
          placeholder={placeholder}
          {...register}
        />
      ) : (
        <Input
          className="bg-slate-950 focus-visible:outline-none"
          type={inputType}
          placeholder={placeholder}
          {...register}
        />
      )}

      {inputType === "text" ? (
        <Eye
          className="absolute right-3 text-slate-500 hover:cursor-pointer hover:text-slate-400 transition-colors duration-200 mt-[10px]"
          size={18}
          onClick={handleVisibility}
        />
      ) : (
        <EyeOff
          className="absolute right-3 text-slate-500 hover:cursor-pointer hover:text-slate-400 transition-colors duration-200 mt-[10px]"
          size={18}
          onClick={handleVisibility}
        />
      )}
    </div>
  );
}
