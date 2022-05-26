import { BrowserRouter, Route, Routes } from "react-router-dom";

// Nav bar and footer
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";
// Pages

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

import Alert from "./components/layouts/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="conatiner mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
                <Route path="/user/:login" element={<User />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
