import { UseFormRegisterReturn } from "react-hook-form"

type Props = {
  type: string
  placeholder: string
  register: UseFormRegisterReturn
  errors?: string
}

export function FormInput({ type, placeholder, register, errors }: Props) {
  return (
    <>
      <input
        className="outline outline-zinc-500 outline-1 px-4 h-10 text-sm w-5/6 bg-zinc-50 focus:outline-zinc-950 focus:outline-2"
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
