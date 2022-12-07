import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import MaterialForm from "./components/materialForm";
import Create from "./components/create";
import Navbar from "./components/navbar";
import Show from "./components/show";
import Update from "./components/update";
import CreateMaterial from "./components/createMaterial";

function App() {
  // return <Show />;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Show />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/materialForm" element={<CreateMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import { useQuery, gql } from "@apollo/client";

// const FILMS_QUERY = gql`
//   {
//     launchesPast(limit: 10) {
//       id
//       mission_name
//     }
//   }
// `;

// export default function App() {
//   const { data, loading, error } = useQuery(FILMS_QUERY);

//   if (loading) return "Loading...";
//   if (error) return <pre>{error.message}</pre>;

//   return (
//     <div>
//       <h1>SpaceX Launches</h1>
//       <ul>
//         {data.launchesPast.map((launch) => (
//           <li key={launch.id}>{launch.mission_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
