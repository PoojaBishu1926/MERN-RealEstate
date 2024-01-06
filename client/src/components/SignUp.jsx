import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const fetchData = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await fetchData.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(null);
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return (
    <div className="max-w-lg mx-auto space-y-5 py-10">
      <h1 className="text-center font-medium text-3xl">Sign Up</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="p-3 rounded-lg border"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="p-3 rounded-lg border"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="on"
          className="p-3 rounded-lg border"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-800 text-white text-xl p-2 rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {error && <p className="text-red-700">{error}</p>}
      </form>
      <div className="flex gap-3">
        <p className="font-medium">Have an account?</p>
        <Link to="/signin" className="text-blue-700 font-medium">
          Sign In
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
