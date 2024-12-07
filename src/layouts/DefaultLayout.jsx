import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function DefaultLayout() {
    return (
        <div className='layout'>
            <Header />
            <p>Default layout</p>
            <Outlet />
            <Footer />
        </div>
    )
}