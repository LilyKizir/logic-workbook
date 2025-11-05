import { Outlet } from 'react-router-dom'

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginMenu from '../components/LoginMenu';


const Root = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-danger">
                <LoginMenu/>
                <Header />
            </header>
            

            <main>
                <Outlet />
            </main>
            

            <footer className="bg-secondary px-5 py-3 mt-auto">
                <Footer />
            </footer>
        </div>

    )
}

export default Root