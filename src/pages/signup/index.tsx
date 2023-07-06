import Image from "next/image";
import Link from "next/link";
import { FormInput } from "@/components/signup";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateAuthor from "@/hooks/useCreateAuthor";
import { Button } from "@/components/ui/button";

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

  const { createAuthor } = useCreateAuthor();

  async function createUser(userFormData: userFormSchema) {
    const { confirmPassword, ...userData } = userFormData;

    await createAuthor({ variables: { type: userData } });
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
      <main className="bg-slate-950 w-screen h-screen flex flex-row">
        <div className="w-5/12 h-screen relative">
          <Image
            src="https://d2c1zgxlx4smmz.cloudfront.net/faxina-blog-signup-image.jpg"
            fill={true}
            priority={true}
            sizes=""
            style={{ objectFit: "cover" }}
            alt="Picture of a robotic hand"
          />
        </div>

        <div className="flex w-7/12">
          <form
            className="flex flex-col w-full items-center justify-center text-white"
            onSubmit={handleSubmit(createUser)}
          >
            <h1 className="text-3xl font-semibold text-zinc-50">
              Create an account
            </h1>
            <p className="text-slate-500 mb-3">Enter your information below to create your account</p>
            <div className="flex flex-col gap-3 w-full items-center justify-center">
              <div className="flex flex-row gap-3 w-1/2">
                {inputs.map(({ type, placeholder, name }, index) => {
                  return index < 2 ? (
                    <FormInput
                      key={name}
                      type={type}
                      placeholder={placeholder}
                      register={register(name)}
                      errors={errors[name]?.message}
                    />
                  ) : null;
                })}
              </div>
              {inputs.map(({ type, placeholder, name }, index) => {
                return index > 1 ? (
                  <FormInput
                    key={name}
                    type={type}
                    placeholder={placeholder}
                    register={register(name)}
                    errors={errors[name]?.message}
                  />
                ) : null;
              })}
            </div>
            <Button className="mt-3 w-1/2" variant="secondary" type="submit">
              CREATE ACCOUNT
            </Button>
            <p className="mt-3 text-slate-500">
              Already has an account?{" "}
              <Link href={"/login"} className="text-slate-200 font-medium hover:underline">
                Sign in.
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
