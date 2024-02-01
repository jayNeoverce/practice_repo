import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((e) => e.user);
  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ border: "black 2px solid", width: "300px", padding: "10px" }}
      >
        <h3>Add new user</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((val, index) => (
            <tr key={index}>
              <td>{val.id} </td>
              <td>{val.name} </td>
              <td>{val.email} </td>
              <td>
                <button>Edit</button>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
