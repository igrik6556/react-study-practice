import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import AppTodoClasses from "./todo-classes/AppTodoClasses"
import AppNep from "./sandbox/AppNep"
import AppMovies from "./movies/AppMovies"

import './App.css'

const AppMain = () => {
    return (
        <div className="main-links-wrap d-flex flex-column align-items-center mt-5">
            <Link to="/sandbox/">Sandbox</Link>
            <Link to="/todo-classes/">To do App</Link>
            <Link to="/movies/">Movies App</Link>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-success text-center py-1">
                <Link to="/" className="text-white">Back to all applications links</Link>
            </div>
            <Routes>
                <Route path="/" element={<AppMain />}></Route>
                <Route path="/todo-classes/" element={<AppTodoClasses />}></Route>
                <Route path="/movies/" element={<AppMovies />}></Route>
                <Route path="/sandbox/" element={<AppNep />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
