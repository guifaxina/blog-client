import { UseFormRegisterReturn } from "react-hook-form"
import { Input } from "@/components/ui/input"

type Props = {
  type: string
  placeholder: string
  register: UseFormRegisterReturn
  errors?: string
  className?: string
}

export function FormInput({ type, placeholder, register, errors, className }: Props) {
  return (
    <>
      <Input
        className={className ?? "bg-slate-950 w-1/2 focus-visible:outline-none"}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errors && (
        <span className="text-red-500 text-sm ml-4 font-medium">{errors}</span>
      )}
    </>
  );
}
