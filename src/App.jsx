import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import Header from "./components/Header";

function App() {
   const [count, setCount] = useState(0);
   const loadedCoffees = useLoaderData();
   const [coffees, setCoffees] = useState(loadedCoffees);

   return (
      <div>
         <Header></Header>
         <div className="m-20">
            <h1 className="text-6xl text-center my-20 text-purple-600">
               Hot cold coffee:{coffees.length}
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
               {coffees.map((coffee) => (
                  <CoffeeCard
                     key={coffee.id}
                     coffee={coffee}
                     coffees={coffees}
                     setCoffees={setCoffees}
                  ></CoffeeCard>
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
