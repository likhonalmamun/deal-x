export const myProducts = (email, setData) => {
  fetch(`http://localhost:5000/myProducts?email=${email}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
};
