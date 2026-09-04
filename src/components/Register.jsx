import { useState } from "react";
function Register({ onRegister, onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await fetch(
        "https://aliex-home-back.onrender/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      setSuccess("Registration successful!");
      console.log("REGISTER SUCCESS:", data);
      if (onRegister) {
        onRegister(data.user);
      }
    } catch (error) {
      console.error("REGISTER ERROR:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="max-w-md mx-auto px-6 py-12">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 font-semibold hover:text-red-600">
        ← Back
      </button>
      <div className="bg-white border rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Create Account
        </h1>
        <p className="text-gray-500 mb-8">
          Register for your AliExpress account
        </p>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-5">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
  if (/^[A-Za-z ]*$/.test(e.target.value)) {
    setName(e.target.value);
  }
}}
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"/>
          </div>
          <div className="mb-5">
            <label className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
             className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black" />
          </div>
          <div className="mb-6">
            <label className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"/>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition disabled:opacity-50">
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default Register;