import toast from "react-hot-toast";

export const getToken = (email) => {
  fetch(`https://assignment-12-server-black.vercel.app/token/${email}`)
    .then((res) => res.json())
    .then((data) => localStorage.setItem("DealX-token", data.token))
    .catch((er) => toast.error(er.message));
};
