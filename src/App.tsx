import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const registrationFormSchema = z.object({
  name: z.string().min(3, "Name must be 3 characters long"),
  age: z.coerce.number().min(14, "Age must be at least 14"),
  email: z.email(),
});

type RegistrationType = z.infer<typeof registrationFormSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      age: "",
      email: "",
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const onSubmit = (data: RegistrationType) => {
    console.log(data);
  };

  const eyeClickHandler = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">User Information</h2>

        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
        />

        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
        />

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
        />

        <div className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter the password.."
            className="outline-none"
          />
          <button
            type="button"
            onClick={eyeClickHandler}
            className="hover:cursor-pointer"
          >
            {isPasswordVisible ? (
              <FaRegEyeSlash className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
            ) : (
              <FaRegEye className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
