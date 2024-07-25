import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Blog } from "./routes/Blog";
import { Contacto } from "./routes/Contacto";
import { Inicio } from "./routes/Inicio";
import NoEncontrada from "./routes/NoEncontrada";
import { Post } from "./routes/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Inicio />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<Post />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="*" element={<NoEncontrada />} />
            </Route>
        </Routes>
    </BrowserRouter>,
  </React.StrictMode>
);
