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

    // example routing below
    //      <Routes>
    //     <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="blogs" element={<Blogs />} />
    //     <Route path="contact" element={<Contact />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
