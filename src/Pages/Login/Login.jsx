import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { saveUserAndGetToken } from "../../Api/saveUser";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { signInWithPass, loading, setLoading, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const login = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithPass(email, password)
      .then((result) => {
        setLoading(true);
        toast.success("Logged in successfully !");
        saveUserAndGetToken(result.user.email);
        setLoading(false);
        navigate(from);
      })
      .catch((er) => {
        setLoading(false);
        toast.error(er.message);
      });
  };

  const googleSignIn = () => {
    googleLogin()
      .then((result) => {
        setLoading(true);
        toast.success("Logged in successfully !");
        saveUserAndGetToken(result.user.email);
        setLoading(false);
        navigate(from);
      })
      .catch((er) => {
        setLoading(false);
        toast.error(er.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="min-h-[520px] p-5 bg-[#2b2d42] w-[430px] rounded-xl shadow-xl shadow-[#8d99ae]">
        <form onSubmit={login} action="">
          <h1 className="text-3xl mt-3 text-[#d90429] font-bold  text-center">
            Login
          </h1>
          <div className="text-white">
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Email :
            </label>
            <input
              name="email"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="email"
            />
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Password :
            </label>
            <input
              name="password"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="password"
            />
            <label
              className="block mt-2 hover:underline text-sm font-semibold mb-2"
              htmlFor=""
            >
              Forgot Password ?
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 hover:bg-[#edf2f4] hover:text-[#d90429] duration-300 rounded-lg bg-[#ef233c] text-[#edf2f4] text-lg font-bold"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <h1 className="text-white text-lg text-center font-bold mt-3">OR</h1>
        <button
          onClick={googleSignIn}
          className="w-full py-2 mt-4 rounded-lg ring-2 ring-[#8d99ae] hover:scale-105 duration-300 bg-[#edf2f4] text-[#2b2d42] text-lg font-bold"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
