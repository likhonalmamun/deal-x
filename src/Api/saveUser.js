export const saveUserAndGetToken = (newUser) => {
  fetch(`http://localhost:5000/users/${newUser.email}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => localStorage.setItem("DealX-token", data.token));
};
