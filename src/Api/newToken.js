export const newToken= (email) => {
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => localStorage.setItem("DealX-token", data.token));
  };
  