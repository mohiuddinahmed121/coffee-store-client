import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import Header from "./Header";

const SignUp = () => {
   const { createUser } = useContext(AuthContext);

   const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log(email, password);
      createUser(email, password)
         .then((result) => {
            console.log(result.user);

            const createdAt = result.user?.metadata?.creationTime;

            const user = { email, createdAt: createdAt };
            fetch("http://localhost:5000/user", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(user),
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.insertedId) {
                     console.log("User added to the database");
                  }
               });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div>
         <Header></Header>
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Sign up now!</h1>
                  <p className="py-6">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                     exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
               </div>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleSignUp} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="email"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           name="password"
                           placeholder="password"
                           className="input input-bordered"
                           required
                        />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
