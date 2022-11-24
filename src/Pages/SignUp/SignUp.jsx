import { RadioGroup } from "@headlessui/react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { saveUserAndGetToken } from "../../Api/saveUser";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const {
    createUser,
    user,
    updateUserProfile,
    loading,
    setLoading,
    googleLogin,
  } = useContext(AuthContext);
  let [role, setRole] = useState("Buyer");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const signUp = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=fb6cc3c6e303eb1ff45d56f923305ae0",
      { method: "POST", body: formData }
    )
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData.data.display_url);
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            updateUserProfile(name, imgData.data.display_url)
              .then((result) => {
                setLoading(true);
                toast.success("user created successfully");
                const newUser = {
                  name: name,
                  role: role,
                  email: email,
                  image: imgData.data.display_url,
                  verified: false,
                };
                saveUserAndGetToken(newUser);
                setLoading(false);
                navigate(from);
              })
              .catch((er) => toast.error(er.message));
          })
          .catch((er) => toast.error(er.message));
      })
      .catch((er) => {
        toast.error("Failed to upload image !");
        console.log(er.message);
        setLoading(false);
      });
  };
  const createUserWithGoogle = () => {
    googleLogin()
      .then((result) => {
        toast.success("user created successfully");
        const newUser = {
          name: result.user.displayName,
          role: role,
          email: result.user.email,
          image: result.user.photoURL,
          verified: true,
        };
        console.log(newUser);
        saveUserAndGetToken(newUser);
        navigate(from);
      })
      .catch((er) => {
        toast.error(er.message);
        setLoading(false);
      });
  };
  return (
    <div className="min-h-[900px] flex items-center justify-center">
      <div className="min-h-[700px] p-5 bg-[#2b2d42] w-[430px] rounded-xl shadow-xl shadow-[#8d99ae]">
        <form onSubmit={signUp} action="">
          <h1 className="text-3xl mt-3 text-[#d90429] font-bold  text-center">
            Sign Up
          </h1>
          <div className="text-white">
            <label className="block mt-2 font-semibold mb-2" htmlFor="">
              Name :
            </label>
            <input
              name="name"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
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
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Image :
            </label>
            <input
              name="image"
              required
              className="w-full  text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="file"
            />
            <RadioGroup className={"mt-3"} value={role} onChange={setRole}>
              <RadioGroup.Label className="mt-4 font-semibold mb-2 inline-block mr-7">
                Sign In As :{" "}
              </RadioGroup.Label>
              <RadioGroup.Option className="inline-block mr-3" value="Buyer">
                {({ checked }) => (
                  <span
                    className={
                      checked
                        ? "bg-[#ef233c] border-white border-2  text-lg font-bold px-3 py-1 text-white rounded-lg"
                        : "bg-white text-lg font-semibold px-3 py-1 text-[#d90429] rounded-lg"
                    }
                  >
                    Buyer
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option className="inline" value="Seller">
                {({ checked }) => (
                  <span
                    className={
                      checked
                        ? "bg-[#ef233c]  text-lg border-white border-2 font-bold px-3 py-1 text-white rounded-lg"
                        : "bg-white text-lg font-semibold px-3 py-1 text-[#d90429] rounded-lg"
                    }
                  >
                    Seller
                  </span>
                )}
              </RadioGroup.Option>
            </RadioGroup>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-7 hover:bg-[#edf2f4] hover:text-[#d90429] duration-300 rounded-lg bg-[#ef233c] text-[#edf2f4] text-lg font-bold"
          >
            {loading ? "Loading..." : " Sign Up"}
          </button>
        </form>
        <h1 className="text-white text-lg text-center font-bold mt-3">OR</h1>
        <button
          onClick={createUserWithGoogle}
          className="w-full py-2 mt-4 rounded-lg ring-2 ring-[#8d99ae] hover:scale-105 duration-300 bg-[#edf2f4] text-[#2b2d42] text-lg font-bold"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
