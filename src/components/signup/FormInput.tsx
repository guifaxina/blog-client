import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Ref } from "react";

type Props = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors?: any;
  className?: string;
  refValue?: Ref<HTMLInputElement>;
};

export function FormInput({
  type,
  placeholder,
  register,
  errors,
  className,
  refValue,
}: Props) {
  return (
    <>
      <Input
        className={className ?? "bg-slate-950 focus-visible:outline-none"}
        type={type}
        placeholder={placeholder}
        {...register}
        ref={refValue}
      />
      {errors}
      {errors && (
        <span className="text-red-500 text-sm ml-4 font-medium">{errors}</span>
      )}
    </>
  );
}
