import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Header from "./Header";

const AddCoffee = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const addNewCoffee = (data) => {
      // send data to the server
      fetch("http://localhost:5000/coffee/create", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.insertedId) {
               Swal.fire({
                  title: "Success!",
                  text: "Coffee added successfully!",
                  icon: "success",
                  confirmButtonText: "Cool",
               });
            }
         });
   };

   return (
      <div>
         <Header></Header>
         <div className=" p-24">
            <h1 className="text-3xl font-extrabold">add coffee</h1>
            {/* bg-[#F4F3F0] */}
            <form onSubmit={handleSubmit(addNewCoffee)}>
               {/* form row */}
               <div className="md:flex mb-8">
                  <fieldset className="fieldset md:w-1/2">
                     <legend className="fieldset-legend ">Coffee Name</legend>
                     <input
                        {...register("name", { required: true })}
                        className="input w-full"
                        placeholder="Coffee Name"
                     />
                  </fieldset>
                  <fieldset className="fieldset md:w-1/2 ml-4">
                     <legend className="fieldset-legend ">Available Quantity</legend>
                     <input
                        {...register("quantity", { required: true })}
                        type="number"
                        className="input w-full"
                        placeholder="Available Quantity"
                     />
                  </fieldset>
               </div>
               {/* form Supplier row */}
               <div className="md:flex mb-8">
                  <fieldset className="fieldset md:w-1/2">
                     <legend className="fieldset-legend ">Supplier Name</legend>
                     <input
                        {...register("supplier", { required: true })}
                        className="input w-full"
                        placeholder="Supplier Name"
                     />
                  </fieldset>
                  <fieldset className="fieldset md:w-1/2 ml-4">
                     <legend className="fieldset-legend ">Taste</legend>
                     <input
                        {...register("taste", { required: true })}
                        className="input w-full"
                        placeholder="Taste"
                     />
                  </fieldset>
               </div>
               {/* form row */}
               <div className="md:flex mb-8">
                  <fieldset className="fieldset md:w-1/2">
                     <legend className="fieldset-legend ">Category</legend>
                     <input
                        {...register("category", { required: true })}
                        className="input w-full"
                        placeholder="Category"
                     />
                  </fieldset>
                  <fieldset className="fieldset md:w-1/2 ml-4">
                     <legend className="fieldset-legend ">Details</legend>
                     <input
                        {...register("details", { required: true })}
                        className="input w-full"
                        placeholder="Category"
                     />
                  </fieldset>
               </div>
               {/* form row */}
               <div className="mb-8">
                  <fieldset className="fieldset w-full">
                     <legend className="fieldset-legend ">Photo URL</legend>
                     <input
                        {...register("photo", { required: true })}
                        className="input w-full"
                        placeholder="Photo URL"
                     />
                  </fieldset>
               </div>
               <button className="btn btn-block">Add Coffee</button>
            </form>
         </div>
      </div>
   );
};

export default AddCoffee;
