import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import NotFound from "./views/NotFound";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
