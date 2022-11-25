export const getToken = (email) => {
  fetch(`http://localhost:5000/token/${email}`)
    .then((res) => res.json())
    .then((data) => localStorage.setItem("DealX-token", data.token));
};
