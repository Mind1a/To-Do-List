import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// Routes
import { MainPage } from "./view/home/MainPage";
import { RegistrationPage } from "./view/registration/RegistrationPage";
import { TodoPage } from "./view/todo/TodoPage";

// Components
import { RequireAuth } from "./components/Login/RequireAuth";
import { AuthImg } from "./components/PhotoUpload/PhotoUpload";
import { AuthProvider } from "./components/Login/auth";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthImg>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
              path="/todo"
              element={
                <RequireAuth>
                  <TodoPage />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthImg>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
