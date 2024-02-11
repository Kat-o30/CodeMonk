import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Plane from "../../Images/plane3.png";
import Earth from "../../Images/earth2.png";
import Logo from "../../Images/logo1.png"




const Landing = () => {
    const navigate = useNavigate();
    const navigateToComponent = () => {
        // 👇️ navigate to /contacts
        navigate('/Component');
    };

    const navigateToDashboard = () => {
        // 👇️ navigate to /dashboard
        navigate('/Home');
    };
    return (
        <div className='landing'>
            <motion.section className='plane'
                initial={{ opacity: 0, x: 0, y: 500, rotate: 0 }}
                animate={{ opacity: 2, x: 410, y: 210, rotate: 20 }}
                transition={{ duration: 5 }}
            >
                <img
                    src={Plane}
                    width={250}
                    height={250}
                    alt="Picture of the author"
                />
            </motion.section>

            <motion.section className='earth'
                initial={{ opacity: -30, x: 450, y: 300, rotate: 0 }}
                animate={{ opacity: 2, x: 450, y: -50, rotate: 0 }}
                transition={{ duration: 5 }}
            >
              
              <img
                    src={Earth}
                    width={300}
                    height={300}
                />
            </motion.section>

            <motion.section className='text'
                initial={{ opacity: 0, y: -700, x: 0 }}
                animate={{ opacity: 1, y: -550, x: 0 }}
                transition={{ delay: 5, duration: 1 }}
            >
                <img
                    src={Logo}
                    width={300}
                    height={300}
                    alt="Logo"
                />
            </motion.section>
            <motion.section className='text'
                initial={{ opacity: 0, y: -300, x: 900 }}
                animate={{ opacity: 1, y: -300, x: 800 }}
                transition={{ delay: 5, duration: 1 }}
            >
                <button type="button" className={"bg-white p-[10px], z-[100]"} onClick={navigateToComponent}>
                    Dashboard
                </button>
            </motion.section> 
        </div>
    );
};

export default Landing;