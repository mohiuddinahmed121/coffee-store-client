import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Users = () => {
   const loadedUser = useLoaderData();
   const [users, setUsers] = useState(loadedUser);

   const handleDelete = (_id) => {
      fetch(`http://localhost:5000/user/${_id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
               const remaining = users.filter((user) => user._id !== _id);
               setUsers(remaining);
            }
         });
   };

   return (
      <div>
         <Header></Header>
         <h2 className="text-center text-4xl">User: {loadedUser.length}</h2>
         <div className="overflow-x-auto mx-14">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Email</th>
                     <th>Created At</th>
                     <th>Last Logged In</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {users.map((user) => (
                     <tr key={user._id}>
                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.lastLoggedAt}</td>
                        <td>
                           <button className="btn btn-sm btn-primary mr-2.5">Edit</button>
                           <button
                              onClick={() => handleDelete(user._id)}
                              className="btn btn-sm btn-error"
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Users;
