import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./components/show";
import Create from "./components/create";
import Update from "./components/update";
import AddEdit from "./components/addEdit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Show />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>

        <Route path="/addEdit" element={<AddEdit />}></Route>
        <Route path="/addEdit/:id" element={<AddEdit />}></Route>
      </Routes>
    </Router>
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
