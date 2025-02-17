"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Heading from "./common/Heading";

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const LoginForm: React.FC = () => {
  const form: FormData = {
    firstName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState<FormData>(form);
  const [error, setError] = useState<{ [key: string]: string | null }>({});
  const [data, setData] = useState<FormData[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const emailSyntax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { [key: string]: string | null } = {};

    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!emailSyntax.test(formData.email)) errors.email = "Enter valid email";
    if (!formData.phone) errors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) errors.phone = "Enter a valid 10-digit phone number";
    if (formData.password.length < 6) errors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (data.some((obj) => obj.email === formData.email)) errors.email = "Email already exists";

    setError(errors);
    if (Object.keys(errors).length === 0) {
      setData([...data, formData]);
      setFormData(form);
    }
  };

  const handleDelete = (email: string) => {
    setData(data.filter((obj) => obj.email !== email));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setError({ ...error, [id]: null });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md text-white">
        <Heading title="To-Do App"  customClass="pb-5"/>
        <form onSubmit={handleClick} className="space-y-4">
          <input type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white border-none outline-none" />
          {error.firstName && <p className="text-red-500 text-sm">{error.firstName}</p>}

          <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white border-none outline-none" />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

          <input type="number" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white border-none outline-none" />
          {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}

          <div className="relative">
            <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white border-none outline-none" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3">
              <Image src={showPassword ? "/assets/images/webp/show-password.webp" : "/assets/images/webp/hide-password.webp"} alt="toggle password" width={20} height={20} />
            </button>
          </div>
          {error.password && <p className="text-red-500 text-sm">{error.password}</p>}

          <input type="password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white border-none outline-none" />
          {error.confirmPassword && <p className="text-red-500 text-sm">{error.confirmPassword}</p>}

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded text-white font-bold">Submit</button>
        </form>
      </div>

      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-white text-center text-xl font-bold mb-4">Submitted Data</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-3 border border-gray-700">First Name</th>
                <th className="p-3 border border-gray-700">Email</th>
                <th className="p-3 border border-gray-700">Phone</th>
                <th className="p-3 border border-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, i) => (
                <tr key={i} className="bg-gray-700">
                  <td className="p-3 border border-gray-700 text-center">{obj.firstName}</td>
                  <td className="p-3 border border-gray-700 text-center">{obj.email}</td>
                  <td className="p-3 border border-gray-700 text-center">{obj.phone}</td>
                  <td className="p-3 border border-gray-700 text-center">
                    <button onClick={() => handleDelete(obj.email)} className="bg-red-500 hover:bg-red-700 transition-all px-3 py-1 rounded text-white">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
