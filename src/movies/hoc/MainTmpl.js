import Header from '../Header'
import Footer from '../Footer'

const MainTmpl = ({children}) => {
    return (
        <>
            <Header />
            <main className="main">
                { children }
            </main>
            <Footer />
        </>
    )
}

export default MainTmpl