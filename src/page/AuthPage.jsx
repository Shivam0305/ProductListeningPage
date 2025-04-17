// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthPage = () => {
//   const navigate = useNavigate();
//   const [isSignIn, setIsSignIn] = useState(true); // Toggle form
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleAuth = () => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     if (isSignIn) {
//       const foundUser = users.find(
//         (user) => user.email === email && user.password === password
//       );
//       if (foundUser) {
//         localStorage.setItem("user", JSON.stringify(foundUser));
//         navigate("/products");
//       } else {
//         alert("Account not found. Please sign up first.");
//       }
//     } else {
//       const alreadyExists = users.find((user) => user.email === email);
//       if (alreadyExists) {
//         alert("User already exists. Please sign in.");
//         setIsSignIn(true);
//       } else {
//         const newUser = { email, password };
//         users.push(newUser);
//         localStorage.setItem("users", JSON.stringify(users));
//         localStorage.setItem("user", JSON.stringify(newUser));
//         navigate("/products");
//       }
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col gap-4 max-w-md mx-auto bg-slate-300 mt-40">
//       <h2 className="text-xl font-bold px-auto ml-40 mb-4">{isSignIn ? "Sign In" : "Create an Account"}</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         className="border p-2 w-full mb-2"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border p-2 w-full mb-4"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button
//         onClick={handleAuth}
//         className="bg-black text-white w-full p-2 rounded"
//       >
//         {isSignIn ? "Sign In" : "Sign Up"}
//       </button>
//       <p
//         className="mt-4 text-sm text-blue-600 cursor-pointer underline"
//         onClick={() => setIsSignIn(!isSignIn)}
//       >
//         {isSignIn ? "New user? Create an account" : "Already have an account? Sign In"}
//       </p>
//     </div>
//   );
// };

// export default AuthPage;


// AuthPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (isSignIn) {
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        const token = btoa(`${email}:${password}`); // Simulated JWT
        localStorage.setItem("token", token);
        navigate("/products");
      } else {
        alert("Account not found. Please sign up first.");
      }
    } else {
      const alreadyExists = users.find((user) => user.email === email);
      if (alreadyExists) {
        alert("User already exists. Please sign in.");
        setIsSignIn(true);
      } else {
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        const token = btoa(`${email}:${password}`); // Simulated JWT
        localStorage.setItem("token", token);
        navigate("/products");
      }
    }
  };

  return (
    <div className="p-6 flex flex-col gap-4 max-w-md mx-auto bg-slate-300 mt-40 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        {isSignIn ? "Sign In" : "Create an Account"}
      </h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleAuth}
        className="bg-black text-white w-full p-2 rounded hover:bg-gray-800"
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      <p
        className="mt-4 text-sm text-blue-600 cursor-pointer underline text-center"
        onClick={() => setIsSignIn(!isSignIn)}
      >
        {isSignIn ? "New user? Create an account" : "Already have an account? Sign In"}
      </p>
    </div>
  );
};

export default AuthPage;

