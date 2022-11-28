export const saveUserAndGetToken = (newUser) => {
  fetch(
    `https://assignment-12-server-black.vercel.app/users/${newUser.email}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    }
  )
    .then((res) => res.json())
    .then((data) => localStorage.setItem("DealX-token", data.token))
    .catch((er) => er.message);
};
