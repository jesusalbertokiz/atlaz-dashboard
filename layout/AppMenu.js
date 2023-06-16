import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {

    const model = [
        {
            label: 'Inicio',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                {
                    label: 'Estados',
                    icon: 'pi pi-map',
                    items: [
                        {
                          label: "Amazonas",
                          icon: "pi pi-flag-fill",
                          to: "/estado/amazonas"
                        },
                        {
                          label: "Anzoátegui",
                          icon: "pi pi-flag-fill",
                          to: "/estado/anzoátegui"
                        },
                        {
                          label: "Apure",
                          icon: "pi pi-flag-fill",
                          to: "/estado/apure"
                        },
                        {
                          label: "Aragua",
                          icon: "pi pi-flag-fill",
                          to: "/estado/aragua"
                        },
                        {
                          label: "Barinas",
                          icon: "pi pi-flag-fill",
                          to: "/estado/barinas"
                        },
                        {
                          label: "Bolívar",
                          icon: "pi pi-flag-fill",
                          to: "/estado/bolívar"
                        },
                        {
                          label: "Carabobo",
                          icon: "pi pi-flag-fill",
                          to: "/estado/carabobo"
                        },
                        {
                          label: "Cojedes",
                          icon: "pi pi-flag-fill",
                          to: "/estado/cojedes"
                        },
                        {
                          label: "Delta Amacuro",
                          icon: "pi pi-flag-fill",
                          to: "/estado/delta-amacuro"
                        },
                        {
                          label: "Distrito Capital",
                          icon: "pi pi-flag-fill",
                          to: "/estado/distrito-capital"
                        },
                        {
                          label: "Falcón",
                          icon: "pi pi-flag-fill",
                          to: "/estado/falcón"
                        },
                        {
                          label: "Guárico",
                          icon: "pi pi-flag-fill",
                          to: "/estado/guárico"
                        },
                        {
                          label: "Lara",
                          icon: "pi pi-flag-fill",
                          to: "/estado/lara"
                        },
                        {
                          label: "Mérida",
                          icon: "pi pi-flag-fill",
                          to: "/estado/mérida"
                        },
                        {
                          label: "Miranda",
                          icon: "pi pi-flag-fill",
                          to: "/estado/miranda"
                        },
                        {
                          label: "Monagas",
                          icon: "pi pi-flag-fill",
                          to: "/estado/monagas"
                        },
                        {
                          label: "Nueva Esparta",
                          icon: "pi pi-flag-fill",
                          to: "/estado/nueva-esparta"
                        },
                        {
                          label: "Portuguesa",
                          icon: "pi pi-flag-fill",
                          to: "/estado/portuguesa"
                        },
                        {
                          label: "Sucre",
                          icon: "pi pi-flag-fill",
                          to: "/estado/sucre"
                        },
                        {
                          label: "Táchira",
                          icon: "pi pi-flag-fill",
                          to: "/estado/táchira"
                        },
                        {
                          label: "Trujillo",
                          icon: "pi pi-flag-fill",
                          to: "/estado/trujillo"
                        },
                        {
                          label: "Vargas",
                          icon: "pi pi-flag-fill",
                          to: "/estado/vargas"
                        },
                        {
                          label: "Yaracuy",
                          icon: "pi pi-flag-fill",
                          to: "/estado/yaracuy"
                        },
                        {
                          label: "Zulia",
                          icon: "pi pi-flag-fill",
                          to: "/estado/zulia"
                        }
                      ]
                },
                { label: 'Notas', icon: 'pi pi-fw pi-home', to: '/notes' }
            
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
