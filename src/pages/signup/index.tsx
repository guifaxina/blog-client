import Image from "next/image";
import Link from "next/link";
import { FormInput } from "@/components/signup";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const userFormSchema = z
    .object({
      name: z
        .string()
        .nonempty("Please fill in your name.")
        .toLowerCase()
        .trim(),

      lastName: z
        .string()
        .nonempty("Please fill in your last name.")
        .toLowerCase()
        .trim(),

      email: z
        .string()
        .nonempty("Please fill in your email address.")
        .regex(
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
          "Invalid email address."
        )
        .toLowerCase(),

      password: z
        .string()
        .nonempty("Please fill in your password.")
        .regex(
          /^(?=.*?[A-Z])(?=.*?[^\w\s])(?=.*?\d)(.{8,})$/,
          "The password should contain at least 8 characters, a number, a special character and an uppercase letter."
        ),

      confirmPassword: z
        .string()
        .nonempty("Please fill in your password again."),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    });

  type userFormSchema = z.infer<typeof userFormSchema>;

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<userFormSchema>({ resolver: zodResolver(userFormSchema) });

  function createUser(userFormData: userFormSchema) {
    console.log(userFormData);
  }

  type InputProps = {
    type: string;
    name: "name" | "lastName" | "email" | "password" | "confirmPassword";
    placeholder: string;
  }[];

  const inputs: InputProps = [
    { type: "text", placeholder: "Name", name: "name" },
    { type: "text", placeholder: "Last name", name: "lastName" },
    { type: "email", placeholder: "Email", name: "email" },
    { type: "password", placeholder: "Password", name: "password" },
    {
      type: "password",
      placeholder: "Confirm password",
      name: "confirmPassword",
    },
  ];

  return (
    <>
      <main className="bg-zinc-50 w-screen h-screen flex flex-row">
        <div className="w-5/12 h-screen relative">
          <Image
            src="https://d2c1zgxlx4smmz.cloudfront.net/faxina-blog-signup-image.jpg"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="Picture of a robotic hand"
          />
        </div>

        <form className="ml-24 flex flex-col" onSubmit={handleSubmit(createUser)}>
          <h1 className="text-5xl mt-36 mb-6 font-bold">
            Sign in or create an account
          </h1>
          <div className="flex flex-col gap-3">
            {inputs.map(({ type, placeholder, name }) => {
              return (
                <FormInput
                  key={name}
                  type={type}
                  placeholder={placeholder}
                  register={register(name)}
                  errors={errors[name]?.message}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="text-white bg-zinc-800 p-3 font-bold mt-3 w-5/6 
            hover:bg-zinc-950 hover:shadow-lg transition duration-200"
          >
            CREATE ACCOUNT
          </button>
          <p className="mt-3 text-zinc-500">Already has an account? <Link href={"/login"} className="text-teal-600 font-bold">Sign in.</Link></p>
        </form>
      </main>
    </>
  );
}
