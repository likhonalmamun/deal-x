export const getUsersByRole = (role, setData) => {
  fetch(`http://localhost:5000/users?role=${role}`)
    .then((res) => res.json())
    .then((data) => setData(data));
};
