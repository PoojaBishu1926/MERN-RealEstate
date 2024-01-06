import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto space-y-5 py-10">
      <h1 className="text-center font-medium text-3xl">Sign Up</h1>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-lg border"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg border"
        />
        <button className="bg-slate-800 text-white text-xl p-2 rounded-lg hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
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
