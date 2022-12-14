import React from "react";
import toast from "react-hot-toast";

const Notified = () => {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold  text-center">
        Get notified from Deal
        <span className="text-[#ef233c]">X</span> .
      </h1>
      <div className="mt-10 p-5 sm:p-10 text-center bg-gradient-to-b from-rose-200 via-[#ffffff] to-[#edf2f4]">
        <p className="text-lg font-semibold mb-3">
          Get update mails from Deal
          <span className="text-[#ef233c]">X</span>
        </p>
        <label className="font-bold block mb-2" htmlFor="">
          Email :
        </label>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("You will be notified from DealX!");
          }}
          action=""
        >
          <input
            placeholder="Your email address"
            required
            className="input outline"
            type="email"
          />
          <br />
          <button
            type="submit"
            className="btn btn-sm mt-3 bg-gradient-to-b from-rose-600 via-rose-600  to-[#4e3838] border-0"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notified;
