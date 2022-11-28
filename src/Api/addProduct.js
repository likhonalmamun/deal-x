import toast from "react-hot-toast";
export const addProductToDb = (newProduct, setLoading, email) => {
  fetch(
    `https://assignment-12-server-black.vercel.app/products?email=${email}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        toast.error(data.message);
      } else {
        toast.success("Product added successfully!!");
      }
    })
    .catch((er) => {
      toast.error(er.message);
      setLoading(false);
    });
};
