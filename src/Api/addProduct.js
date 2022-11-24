import toast from "react-hot-toast";

export const addProductToDb = (newProduct, setLoading) => {
  fetch(`http://localhost:5000/products`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Product added successfully!!");
    })
    .catch((er) => {
      toast.error(er.message);
      setLoading(false);
    });
};
