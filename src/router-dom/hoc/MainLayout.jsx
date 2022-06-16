import {BrowserRouter} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({children}) => {
    return (
        <BrowserRouter>
            <div className="main-layout d-flex flex-column justify-content-between">
                <Header />
                <main className="flex-grow-1 h-100">
                    { children }
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default MainLayout