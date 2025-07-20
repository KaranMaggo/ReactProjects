import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick=async()=>{
    const response= await axios.post("http://localhost:4000/login",{
      email,password
    },{withCredentials:true});
    console.log(response);
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#0f0f0f] p-8 rounded-2xl shadow-2xl border border-blue-700">
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-6">Login</h2>

        <label
          htmlFor="email"
          className="block text-sm font-medium text-blue-400 mb-1"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="Enter your Email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full mb-4 px-4 py-2 bg-black text-white border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
        />

        <label
          htmlFor="password"
          className="block text-sm font-medium text-blue-400 mb-1"
        >
          Password
        </label>
        <input
          type="text"
          placeholder="Enter your Password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-full mb-6 px-4 py-2 bg-black text-white border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
        />

        <button
          type="submit"
          onClick={handleClick}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
