import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Header from "./Header";

const UpdateCoffee = () => {
   const coffee = useLoaderData();

   const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const updateCoffee = (updateCoffee) => {
      // send data to the server
      fetch(`http://localhost:5000/coffee/${_id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(updateCoffee),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               Swal.fire({
                  title: "Success!",
                  text: "Coffee Update successfully!",
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
            <h1 className="text-3xl font-extrabold">Update coffee: {name}</h1>
            {/* bg-[#F4F3F0] */}
            <form onSubmit={handleSubmit(updateCoffee)}>
               {/* form row */}
               <div className="md:flex mb-8">
                  <fieldset className="fieldset md:w-1/2">
                     <legend className="fieldset-legend ">Coffee Name</legend>
                     <input
                        {...register("name", { required: true })}
                        className="input w-full"
                        defaultValue={name}
                        placeholder="Coffee Name"
                     />
                  </fieldset>
                  <fieldset className="fieldset md:w-1/2 ml-4">
                     <legend className="fieldset-legend ">Available Quantity</legend>
                     <input
                        {...register("quantity", { required: true })}
                        type="number"
                        className="input w-full"
                        defaultValue={quantity}
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
                        defaultValue={supplier}
                        placeholder="Supplier Name"
                     />
                  </fieldset>
                  <fieldset className="fieldset md:w-1/2 ml-4">
                     <legend className="fieldset-legend ">Taste</legend>
                     <input
                        {...register("taste", { required: true })}
                        className="input w-full"
                        defaultValue={taste}
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
                        defaultValue={category}
                        placeholder="Category"
                     />
                  </fieldset>
                  <fieldset className="fieldset md:w-1/2 ml-4">
                     <legend className="fieldset-legend ">Details</legend>
                     <input
                        {...register("details", { required: true })}
                        className="input w-full"
                        defaultValue={details}
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
                        defaultValue={photo}
                        placeholder="Photo URL"
                     />
                  </fieldset>
               </div>
               <button className="btn btn-block">Update Coffee</button>
            </form>
         </div>
      </div>
   );
};

export default UpdateCoffee;
