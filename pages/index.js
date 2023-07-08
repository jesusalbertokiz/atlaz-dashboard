import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { EstatesService } from '../service/EstatesService';
import { RegisterServices } from '../service/RegisterService';
import { LayoutContext } from '../layout/context/layoutcontext';
import Link from 'next/link';
import { ProgressBar } from 'primereact/progressbar';



function Dashboard({datos}){
    
    const [states, setStates] = useState(null);
    const [lineData, setLineData] = useState(null);
    const [lineOptions, setLineOptions] = useState(null);
    const { layoutConfig } = useContext(LayoutContext);

    const valueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };


    const applyLightTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);


/////////////////////
    useEffect(() => {
        EstatesService.getStates().then((data) => setStates(data));
    }, []);

    useEffect(() => {
        setLineData(RegisterServices.getCompanyData())
    }, []);



////////////////////

    return (
        <div className="grid">
          

            {/*Parte derecha del dashboard*/}
            <div className="col-12 xl:col-6">
                <h1>Bienvenido Hussein...</h1>
                {/*Sales Overview*/}
                <div className="card">
                    <h5>Ultimos Registros</h5>
                    <Chart type="line" data={lineData} options={lineOptions} />
                </div>
            </div>

{/*Parte del panel principal*/}
            <div className="grid col-12 lg:col-6 xl:col-6">
                <div className="col-12 xl:col-6">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Supervisores</span>
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-id-card text-blue-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 nuevos </span>
                        <span className="text-500">desde el dia de hoy</span>
                    </div>
                </div>
                <div className="col-12 xl:col-6">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Supervisores Atlaz</span>
                                <div className="text-900 font-medium text-xl">100</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-user text-orange-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">52 nuevos </span>
                        <span className="text-500">desde el dia de hoy</span>
                    </div>
                </div>
                <div className="col-12 xl:col-6">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Embajadores</span>
                                <div className="text-900 font-medium text-xl">2441</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-users text-cyan-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">520 nuevos </span>
                        <span className="text-500">desde el dia de hoy</span>
                    </div>
                </div>
                <div className="col-12 xl:col-6">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Registros</span>
                                <div className="text-900 font-medium text-xl">4512</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-purple-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">100 nuevos </span>
                        <span className="text-500">desde el dia de hoy</span>
                    </div>
                </div> 
            </div>




{/*Parte izquierda del dashboard*/}
            <div className="col-12 ">
                
                {/*Recent Sales*/}
                <div className="card">
                    <h5>Registros Recientes</h5>
                    <DataTable value={states} rows={5} paginator responsiveLayout="scroll">
                    <Column field="estado" header="Estado" sortable  />
                    <Column field="municipios" header="Municipios" sortable style={{ textAlign:'center' }} />
                    <Column
                            header="Objetivo por Estado"
                            style={{ width: '20%' }}
                            body={(e) =>(
                                <>
                                    <ProgressBar value={50} displayValueTemplate={valueTemplate}></ProgressBar>
                                </>
                            )}
                        />
                    <Column field="registros" header="Registros" sortable style={{ textAlign:'center' }} />
                    <Column field="embajadores" header="Embajadores" sortable style={{ textAlign:'center' }} />
                        
                        <Column
                            header="View"
                            style={{ width: '15%' }}
                            body={(e) => (
                                <>
                                    <Link href={`/estado/${e.iso}`}>
                                        <Button icon="pi pi-search" type="button" text />
                                    </Link>
                                </>
                                
                            )}
                        />
                        
                    </DataTable>
                </div>
            </div>


        </div>
    );
};


  


export default Dashboard;
