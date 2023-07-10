import Image from "next/image";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateAuthor from "@/hooks/useCreateAuthor";
import { Button } from "@/components/ui/button";
import { PasswordInputField } from "@/components/signup/";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ButtonLoading from "@/components/signup/ButtonLoading";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

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

      confirmPassword: z.string().nonempty("Please confirm your password."),
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

  const { createAuthor, loading } = useCreateAuthor();

  async function createUser(userFormData: userFormSchema) {
    const { confirmPassword, ...userData } = userFormData;

    setIsLoading(true);
    await createAuthor({ variables: { type: userData } });
    setIsLoading(loading);
  }

  type TPasswordInputFields = {
    name: "name" | "lastName" | "email" | "password" | "confirmPassword";
    placeholder: string;
  }[];

  const passwordInputFields: TPasswordInputFields = [
    { name: "password", placeholder: "Password" },
    { name: "confirmPassword", placeholder: "Confirm your password" },
  ];

  const formFields: FieldValues = Object.keys(errors);

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
            <p className="text-slate-500 mb-3">
              Enter your information below to create your account
            </p>
            <div className="flex flex-col gap-3 w-1/2 items-center justify-center">
              <div className="flex flex-row gap-3 w-full">
                {errors.name?.message ? (
                  <Input
                    className="bg-slate-950 outline outline-red-500 outline-1 focus-visible:outline-red-500"
                    placeholder="Name"
                    {...register("name")}
                    type="text"
                  />
                ) : (
                  <Input
                    className="bg-slate-950 focus-visible:outline-none"
                    placeholder="Name"
                    {...register("name")}
                    type="text"
                  />
                )}
                {errors.lastName?.message ? (
                  <Input
                    className="bg-slate-950 outline outline-red-500 outline-1 focus-visible:outline-red-500"
                    placeholder="Last name"
                    {...register("lastName")}
                    type="text"
                  />
                ) : (
                  <Input
                    className="bg-slate-950 focus-visible:outline-none"
                    placeholder="Last name"
                    {...register("lastName")}
                    type="text"
                  />
                )}
              </div>

              {errors.email?.message ? (
                <Input
                  className="bg-slate-950 outline outline-red-500 outline-1 focus-visible:outline-red-500"
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                />
              ) : (
                <Input
                  className="bg-slate-950 focus-visible:outline-none"
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                />
              )}

              <div className="flex relative items-center justify-center w-full">
                <div className="flex flex-col gap-3 w-full">
                  {passwordInputFields.map(({ name, placeholder }) => {
                    return (
                      <PasswordInputField
                        key={name}
                        placeholder={placeholder}
                        register={register(name)}
                        errors={errors[name]?.message}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-start w-full">
                <ul>
                  {formFields.map(
                    (
                      field:
                        | "name"
                        | "lastName"
                        | "email"
                        | "password"
                        | "confirmPassword"
                    ) => {
                      return (
                        <li key={field} className="text-red-500">
                          {"• " + errors[field]?.message}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
            {isLoading ? (
              <ButtonLoading className="mt-3 w-1/2" />
            ) : (
              <Button className="mt-3 w-1/2" variant="secondary" type="submit">
                Create Account
              </Button>
            )}

            <p className="mt-3 text-slate-500">
              Already has an account?{" "}
              <Link
                href={"/login"}
                className="text-slate-200 font-medium hover:underline"
              >
                Sign in.
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
