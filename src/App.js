import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Article from "./pages/Article"
import Login from "./pages/Login"
import NoPage from "./pages/NoPage"
import Layout from "./components/Layout"
import { Container } from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const cate = ['programming', 'Languages', 'marketing'];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {cate.map((ele, ind) => 
            <Route path={ele} key={ind} element={<Articles />} />
          )}
          {cate.map((ele, ind) => 
            <Route path={ele + '/:id'} key={ind} element={<Article />} />
          )}

        </Route>
        <Route path='login' element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
