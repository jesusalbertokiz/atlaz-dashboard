import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import CardPanel from '../../../src/components/cardPanel';
import VenezuelaMap from '../../../src/components/venezuelaMap';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { EstatesService } from '../../../service/EstatesService';
import { RegisterServices } from '../../../service/RegisterService';
import { RegionService } from '../../../service/RegionServices';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';

function EstatePage() {
    const router = useRouter();
    const [states, setStates] = useState(null);
    const [lineData, setLineData] = useState(null);
    const [lineOptions, setLineOptions] = useState(null);
    const { layoutConfig } = useContext(LayoutContext);

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
    
    const { iso } = router.query;
    RegionService.getRegion(iso)
    

  return (
    <>
      <p>El ID de la página es: {iso}</p>
      <div className="grid">
        <div className="col-12 lg:col-6 xl:col-3">
          <CardPanel
            title="Supervisor Titán"
            number="152"
            icon="pi pi-id-card text-blue-500 text-xl"
            newItems="16"
            lastVisit={true}
          />
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <CardPanel
            title="Supervisor Titán"
            number="152"
            icon="pi pi-id-card text-blue-500 text-xl"
            newItems="16"
            lastVisit={true}
          />
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <CardPanel
            title="Supervisor Titán"
            number="152"
            icon="pi pi-id-card text-blue-500 text-xl"
            newItems="16"
            lastVisit={true}
          />
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <CardPanel
            title="Supervisor Titán"
            number="152"
            icon="pi pi-id-card text-blue-500 text-xl"
            newItems="16"
            lastVisit={true}
          />
        </div>
      </div>
      <div className="grid">
        <div className="col-12 lg:col-6 xl:col-6 mt-4">
          <div className='card grid' style={{ overflow:"hidden", height: 'auto', justifyContent:'center', width:'100%'}}>
            <img src={`/images/${iso}.svg`} width="350px"  alt={`${iso}`} />
          </div>
          <div className="card" style={{ width:'100%' }}>
              <h5>Ultimos Registros</h5>
              <Chart type="line" data={lineData} options={lineOptions} />
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-6 mt-3">
          <div className="card ">
              <h5>Registros Recientes</h5>
              <DataTable value={states} rows={5} paginator responsiveLayout="scroll">
              <Column field="estado" header="Estado" sortable style={{ width: '35%' }} />
              <Column field="registros" header="Registros" sortable style={{ width: '35%', textAlign:'center' }} />
              <Column field="embajadores" header="Embajadores" sortable style={{ width: '35%', textAlign:'center' }} />
                  
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
    </>
  );
}

export default EstatePage;