import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Layout from './views/layout.js';
import Landing from './views/landing.js';
import Home from './views/home.js';
import NoPage from './views/no_page.js';
import ListContacts from './views/list_contacts.js';



function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="landing" element={<Landing />} />
          <Route path="list_contacts" element={<ListContacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
