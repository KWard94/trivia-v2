import "./App.css";
import { Route, Routes } from "react-router";

import Homepage from "./pages/homepage/homepage";
import NoPageFound from "./pages/noPageFound/noPageFound";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
}

export default App;
