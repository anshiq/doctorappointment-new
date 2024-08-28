'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formType, setFormType] = useState<"patient" | "doctor">("patient")
  const [action, setAction] = useState<"login" | "signup">("login")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setFormType('patient')}
            className={`px-4 py-2 rounded-l-lg ${formType === 'patient' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Patient
          </button>
          <button
            onClick={() => setFormType('doctor')}
            className={`px-4 py-2 rounded-r-lg ${formType === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Doctor
          </button>
        </div>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setAction("login")}
            className={`px-4 py-2 rounded-l-lg ${action === 'login' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            Login
          </button>
          <button
            onClick={() => setAction("signup")}
            className={`px-4 py-2 rounded-r-lg ${action === 'signup' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            Sign Up
          </button>
        </div>
        <div className="flex items-center justify-center m-2"><Link href={"/auth/reset-password"}>Forgot Password ??</Link></div>
        <div className="h-[18rem] overflow-y-auto kit-web pr-4">
        {formType === "patient" && action === "login" && <PatientLogin />}
          {formType === "patient" && action === "signup" && <PatientSignup />}
          {formType === "doctor" && action === "login" && <DoctorSignin />}
          {formType === "doctor" && action === "signup" && <DoctorSignup />}
        </div>
      </div>
    </div>
  );
}

const PatientLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient Login:', formData);
    // Add your login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-medium">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full px-3 py-2 border rounded-md"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
    </form>
  );
};

const PatientSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    dob: '',
    gender: '',
    age: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient Signup:', formData);
    // Add your signup logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-medium">Password:</label>
        <input type="password" id="password" name="password" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="mobile" className="block mb-1 font-medium">Mobile:</label>
        <input type="tel" id="mobile" name="mobile" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="dob" className="block mb-1 font-medium">DOB:</label>
        <input type="date" id="dob" name="dob" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="gender" className="block mb-1 font-medium">Gender:</label>
        <select id="gender" name="gender" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="age" className="block mb-1 font-medium">Age:</label>
        <input type="number" id="age" name="age" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Signup</button>
    </form>
  );
};

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    specialization: '',
    gender: '',
    experience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Doctor Signup:', formData);
    // Add your signup logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-medium">Password:</label>
        <input type="password" id="password" name="password" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="mobile" className="block mb-1 font-medium">Mobile:</label>
        <input type="tel" id="mobile" name="mobile" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="specialization" className="block mb-1 font-medium">Specialization:</label>
        <input type="text" id="specialization" name="specialization" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="gender" className="block mb-1 font-medium">Gender:</label>
        <select id="gender" name="gender" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="experience" className="block mb-1 font-medium">Experience (years):</label>
        <input type="number" id="experience" name="experience" required className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Signup</button>
    </form>
  );
};

const DoctorSignin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Doctor Login:', formData);
    // Add your login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-medium">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full px-3 py-2 border rounded-md"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
    </form>
  );
};