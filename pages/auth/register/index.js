import axios from "axios";
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const RegisterPage = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const [credentials, setCredentials] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/auth/register", credentials);
    
        if (res.status === 200) {
          router.push("/");
        }
      };


    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Atlaz logo" className="mb-5 w-12rem flex-shrink-0" />
                            <div className="text-900 text-3xl font-medium mb-5">Nuevo registro</div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="formgroup-inline">
                                <div className="field">
                                    <label htmlFor="name" className="block text-900 text-xl font-medium mb-2">
                                        Nombre
                                    </label>
                                    <InputText id="name" type="text" onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} placeholder="Nombres" />
                                </div>
                                <div className="field">
                                    <label htmlFor="lastName" className="block text-900 text-xl font-medium mb-2">
                                        Apellido
                                    </label>
                                    <InputText id="lastName" type="text" onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })} placeholder="Apellidos" />
                                </div>
                            </div>
                            <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                                Correo
                            </label>
                            <InputText inputid="email" type="text" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} placeholder="Dirección de correo" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="password" className="block text-900 font-medium text-xl mb-2">
                                Contraseña
                            </label>
                            <Password inputid="password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} placeholder="Contraseña" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                            </div>
                            <Button label="Sign In" className="w-full p-3 text-xl"></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

RegisterPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
        </React.Fragment>
    );
};
export default RegisterPage;
