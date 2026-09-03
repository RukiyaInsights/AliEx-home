import { useState } from "react";
function Login({ onLogin, onBack, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      console.log("LOGIN SUCCESS:", data);
      onLogin(data.user);
    } catch (error) {
      console.error("LOGIN ERROR:", error);
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
          Welcome Back
        </h1>
        <p className="text-gray-500 mb-8">
          Login to your account
        </p>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition disabled:opacity-50">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-500">
            Don't have an account?
          </p>
          <button
            type="button"
           onClick={() => {
  console.log("CREATE ACCOUNT CLICKED");
  onRegisterClick();
}}
            className="mt-2 font-semibold text-red-600 hover:underline">
            Create an account
          </button>
        </div>
      </div>
    </section>
  );
}
export default Login;