import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [ProfilePic, setProfilePic] = useState("");

   const [redirect, setRedirect] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/signup", {
        name,
        email,
        phone,
        password,
        ProfilePic
      });
      console.log(response.data);
      if (response.data.success) {
        alert("account Created Successfully");
        setRedirect(true);
      } else {
        alert("there is error bro");
      }
    } catch (e) {
      console.log(e);
      console.log("something went wrong");
    }
    console.log("form submitted");
    
    
  };
  if (redirect){
      return(
    <Navigate to={'/login'}/>
      )
     }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
        <form
          className="bg-[#1a1a2e] p-8 rounded-xl shadow-lg w-full max-w-md border border-purple-500/30"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Sign Up
          </h2>

          <label
            htmlFor="name"
            className="block text-sm font-medium text-purple-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full mb-4 px-4 py-2 bg-[#0f0c29] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-purple-300 mb-1"
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
            className="w-full mb-4 px-4 py-2 bg-[#0f0c29] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
          />

          <label
            htmlFor="phone"
            className="block text-sm font-medium text-purple-300 mb-1"
          >
            Phone
          </label>
          <input
            type="text"
            placeholder="Enter your phone"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="w-full mb-4 px-4 py-2 bg-[#0f0c29] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
          />

          <label
            htmlFor="password"
            className="block text-sm font-medium text-purple-300 mb-1"
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
            className="w-full mb-6 px-4 py-2 bg-[#0f0c29] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
          />
          <label
            htmlFor="ProfilePic"
            className="block text-sm font-medium text-purple-300 mb-1"
          >
            ProfilePic
          </label>
          
            <input
            type="text"
            placeholder="Enter ProfilePic URL "
            id="ProfilePic"
            value={ProfilePic}
            onChange={(e) => {
              setProfilePic(e.target.value);
            }}
            className="w-full mb-6 px-4 py-2 bg-[#0f0c29] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white font-semibold py-2 rounded shadow-md hover:shadow-purple-700 transition duration-300"
          >
            Sign Up
          </button>
      
        </form>
      </div>
    </div>
  );
};

export default Signup;
