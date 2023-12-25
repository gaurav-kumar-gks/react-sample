import "./App.css";
import { Person } from "./pages/User";
import { Cat } from "./pages/Cat";
import { Predict } from "./pages/Predict";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Form } from "./pages/Form";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const AppContext = createContext();

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const [loggedInUser, setLoggedInUser] = useState("user");

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/form" element={<Form />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<Person />} />
              <Route path="/cat" element={<Cat />} />
              <Route path="/predict" element={<Predict />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
