import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Login3 = lazy(() => import("./pages/auth/login3"));
const Register3 = lazy(() => import("./pages/auth/register3"));
const ForgotPass3 = lazy(() => import("./pages/auth/forgot-password3"));
const LockScreen3 = lazy(() => import("./pages/auth/lock-screen3"));
const Error = lazy(() => import("./pages/404"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";


import Loading from "@/components/Loading";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/">
          <Route path="/login" element={<Login3 />} />
          <Route path="/signup" element={<Register3 />} />
          <Route path="/forgot-password" element={<ForgotPass3 />} />
          <Route path="/lock-screen3" element={<LockScreen3 />} />
        </Route>
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
        <Route path="/404" element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
        }/>
      </Routes>
    </main>
  );
}

export default App;
