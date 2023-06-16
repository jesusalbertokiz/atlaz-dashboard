import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { confirmPopup, ConfirmPopup } from 'primereact/confirmpopup';


const Logout = () => {
    const router = useRouter();

    const accept = async () => {
        
        const res = await axios.post("/api/auth/logout");
    
        if (res.status === 200) {
          router.push("/auth/login");
        }

    };

    const confirm = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: '¿Deseas cerrar sesión?',
            icon: 'pi pi-exclamation-triangle',
            accept
        });
    };

    return (
        <>
            <ConfirmPopup />
            <button onClick={confirm} type="button" className="p-link layout-topbar-button">
                <i className="pi pi-sign-out"></i>
            </button>
        </>
    );
};

export default Logout;
