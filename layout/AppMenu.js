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
                        "label": "Amazonas",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-X"
                      },
                      {
                        "label": "Anzoátegui",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-B"
                      },
                      {
                        "label": "Apure",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-C"
                      },
                      {
                        "label": "Aragua",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-D"
                      },
                      {
                        "label": "Barinas",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-E"
                      },
                      {
                        "label": "Bolívar",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-F"
                      },
                      {
                        "label": "Carabobo",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-G"
                      },
                      {
                        "label": "Cojedes",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-H"
                      },
                      {
                        "label": "Delta Amacuro",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-Y"
                      },
                      {
                        "label": "Distrito Capital",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-A"
                      },
                      {
                        "label": "Falcón",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-I"
                      },
                      {
                        "label": "Guárico",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-J"
                      },
                      {
                        "label": "Lara",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-K"
                      },
                      {
                        "label": "Mérida",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-L"
                      },
                      {
                        "label": "Miranda",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-M"
                      },
                      {
                        "label": "Monagas",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-N"
                      },
                      {
                        "label": "Nueva Esparta",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-O"
                      },
                      {
                        "label": "Portuguesa",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-P"
                      },
                      {
                        "label": "Sucre",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-R"
                      },
                      {
                        "label": "Táchira",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-S"
                      },
                      {
                        "label": "Trujillo",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-T"
                      },
                      {
                        "label": "Vargas",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-W"
                      },
                      {
                        "label": "Yaracuy",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-U"
                      },
                      {
                        "label": "Zulia",
                        "icon": "pi pi-flag-fill",
                        "to": "/estado/VE-V"
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
