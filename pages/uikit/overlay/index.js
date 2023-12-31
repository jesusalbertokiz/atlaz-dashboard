import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { confirmPopup, ConfirmPopup } from 'primereact/confirmpopup';


const LogoutTest = () => {
    const toast = useRef(null);
    const router = useRouter();

    const accept = async () => {
        
        
        const res = await axios.post("/api/auth/logout");
    
        if (res.status === 200) {
          await toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Se cerrara la sesión', life: 3000 });  
          router.push("/auth/login");
        }

    };

    const reject = () => {
        toast.current.show({ severity: 'error', summary: 'Rechazado', detail: 'No se cerrará la sesión', life: 3000 });
        
    };

    const confirm = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: '¿Deseas cerrar sesión?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup />
            <button onClick={confirm} type="button" className="p-link layout-topbar-button">
                <i className="pi pi-sign-out"></i>
            </button>
        </>
    );
};

export default LogoutTest;
