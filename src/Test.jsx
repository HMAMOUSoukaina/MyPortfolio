import React, { useState } from "react";

export default function Test() {
  // État pour gérer le mode sombre
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Fonction pour basculer le mode sombre
  const toggleDarkMode = () => {
    setDarkModeEnabled((prevMode) => !prevMode);
  };

  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-[url('https://i.imgur.com/1O8ovx1.jpeg')] bg-cover">
    {/*<div className={darkModeEnabled ? "dark" : ""}>*/}
      {/* <button onClick={toggleDarkMode}>Dark Mode</button>
      <div className="absolute bottom-4 left-4">
        <span className="block sm:hidden">XS</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block">XL</span>
      </div>
      <main className="w-full bg-zinc-100 h-screen flex justify-center items-center flex-col">
        <div className="bg-zinc-50 dark:bg-stone-400 dark:text-white shadow-lg p-8 gap-6 flex flex-col justify-start max-w-sm lg:max-w-md w-full border border-zinc-300 rounded-lg">
          <div>
            <h1 className="italic font-bold text-2xl">Hello</h1>
            <p className="text-sm text-black/50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus debitis a neque officia asperiores? Et aut impedit
              totam corrupti quidem nobis ratione repellat eaque repudiandae, non
              ab excepturi doloremque atque consequatur accusantium, ipsum
              dolorem. Quibusdam consectetur consequatur ut reprehenderit quam.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <li className="bg-purple-200/30 group-hover:bg-blue-500 px-4 py-1 w-full shadow-sm border rounded-md">
              Orange
            </li>
            <li className="group-hover:bg-blue-500 bg-purple-200/30 px-4 py-1 w-full shadow-sm border rounded-md">
              Apple
            </li>
            <li className="group-hover:bg-blue-500 bg-purple-200/30 px-4 py-1 w-full shadow-sm border rounded-md">
              Lemon
            </li>
            <li className="group-hover:bg-blue-500 bg-purple-200/30 px-4 py-1 w-full shadow-sm border rounded-md">
              Strawberry
            </li>
          </ul>
          <button className="bg-purple-500/50 hover:bg-violet-300 shadow-lg rounded-lg w-40 px-4 py-2">
            Hover
          </button>
          <button className="bg-green-500/50 focus:bg-pink-300 shadow-lg rounded-lg w-40 px-4 py-2">
            Focus
          </button>
          <button className="bg-yellow-500/50 active:bg-blue-300 shadow-lg rounded-lg w-40 px-4 py-2">
            Active
          </button>
          <div className="flex flex-col gap-2 md:flex-row">
            <button className="bg-orange-600 hover:ring-1 ring-orange-400 ring-offset-2 ring-offset-white shadow-lg rounded-lg w-40 px-4 py-2">
              Ring
            </button>
            <button className="bg-red-400/70 shadow-lg rounded-lg w-40 ring-1 ring-black ring-opacity-40 ring-offset-4 px-4 py-2">
              Active
            </button>
           
          </div>
        </div>
      </main> */}
      <main  className="group h-fit gap-44 w-fit  flex flex-col border-4 px-16 py-12 border-white rounded-3xl backdrop-blur-sm bg-white/30  ">
        <div className="flex space-x-40 ">
          <h2 className=" text-white text-4xl font-bold transition ease-in-out delay-150 group-hover:scale-110 -translate-y-1">Mastercard</h2>
          <img className="size-10" src="https://i.imgur.com/eLwgPd2.png" />
        </div>
        <div className="flex justify-between">
          <div className="flex-col ">
          <div className="flex gap-6">
          <p className="text-white text-xl uppercase">Ruchi DWIVEDI</p>
          <p className="text-white text-xl font-bold">8/24</p>
          </div>
          <div className="flex space-x-32">
          <p className="text-white text-xl font-bold mt-5">1234 1234 1234 1234</p>
          <div className="bg-white/30 px-2 py-2 rounded-md ">
          <img className="w-10 " src="https://i.imgur.com/GaIY1JU.png" />
        </div>
       </div>
          </div>
          
          
        </div>
      </main>
    </div>
  );
}
