import React from "react";
import {Routes, Route} from "react-router-dom";

import MainLayout from "./hoc/MainLayout";
import {AuthProvider} from "./hoc/AuthContext";
import Home from "./components/Home";
import {Blog, BlogDetails} from "./components/Blog";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import './AppRouter.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function AppRouter() {
    return (
        <AuthProvider>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={
                        <RequireAuth>
                            <Blog />
                        </RequireAuth>
                    } />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </MainLayout>
        </AuthProvider>
    )
}

export default AppRouter;