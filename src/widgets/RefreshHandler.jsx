import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function RefreshHandler({ setIsAuthanticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setIsAuthanticated(true);
            if (location.pathname === '/' || 
                location.pathname === '/home' ||
                location.pathname === '/AboutUs' ||
                location.pathname === '/ContactUs' ||
                location.pathname === '/course' ||
                location.pathname === '/StudentEnq' ||
                location.pathname === '/StudentLogin' ||
                location.pathname === '/StudentSearch' ||
                location.pathname === '/FrenchiseReg' ||
                // location.pathname === '/AdminLogin' ||
                // location.pathname === '/dashboard' ||
                // location.pathname === '/add-center' ||
                // location.pathname === '/view-center' ||
                // location.pathname === '/add-course' ||
                // location.pathname === '/view-course' ||
                location.pathname === '/frenchise-details' ||
                location.pathname === '/student-details'
                // location.pathname === '/admin/*'

            ){
                navigate('/home', {replace: false});
            }
        }
    }, [location, navigate, setIsAuthanticated])
}

export default RefreshHandler