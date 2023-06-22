import axios from "axios";
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import VenezuelaMap from "../../src/components/venezuelaMap";

const MapPage = () => {

    const [countSvg, setCountSvg] = useState(1)
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [xInicial, setXInicial] = useState(0)
    const [yInicial, setYInicial] = useState(0)
    const [translate, setTranslate] = useState({x:0,y:0})
    const [nuevaX, setNuevaX] = useState(0);
    const [nuevaY, setNuevaY] = useState(0);


    const crecerMapa = (e) => {
        console.log(e);
        setCountSvg(countSvg + 0.1);
    };


    const encogerMapa = (e)=>{
        setCountSvg(countSvg - 0.1)
    }


    const idConsola = (event)=>{
        if (event.target.tagName === 'path') {
            console.log(event.target.id);
          }
    }

    
    //Eventos del Mouse
    const handleMouseDown = (event) => {
        setXInicial(event.clientX)
        setYInicial(event.clientY)
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (event) => {
        if (isMouseDown) {
            const nuevaX = translate.x + (event.clientX - xInicial);
            const nuevaY = translate.y + (event.clientY - yInicial);
            setTranslate({x: nuevaX, y: nuevaY});
            setXInicial(event.clientX);
            setYInicial(event.clientY);
            setNuevaX(nuevaX);
            setNuevaY(nuevaY);
            const mapa = document.getElementById("mapa")
            mapa.setAttribute("transform",`scale(${countSvg}) translate(${nuevaX},${nuevaY})`);
        }
    }

    
    //Eventos del Touch
    const handleTouchStart = (event) => {
        setXInicial(event.touches[0].clientX);
        setYInicial(event.touches[0].clientY);
        setIsMouseDown(true);
    };


    const handleTouchEnd = () => {
        setIsMouseDown(false);
    };


    const handleTouchMove = (event) => {
        if (isMouseDown) {
            const nuevaX = translate.x + (event.touches[0].clientX - xInicial);
            const nuevaY = translate.y + (event.touches[0].clientY - yInicial);
            console.log(translate, xInicial, yInicial);
            setTranslate({x: nuevaX, y: nuevaY});
            setXInicial(event.touches[0].clientX);
            setYInicial(event.touches[0].clientY);
            setNuevaX(nuevaX);
            setNuevaY(nuevaY);
            const mapa = document.getElementById("mapa")
            mapa.setAttribute("transform",`scale(${countSvg}) translate(${nuevaX},${nuevaY})`);

        }
    }

    useEffect(() => {
        const mapa = document.getElementById("mapa");
        mapa.setAttribute(
          "transform",
          `scale(${countSvg}) translate(${nuevaX},${nuevaY})`
        );
        console.log(countSvg);
    }, [countSvg]);

    return (  
        <>
            <div className="grid" style={{justifyContent:"center"}}>
                <button style={{margin:"0px 5px 15px 5px"}} onClick={(e)=> crecerMapa(e)}>+</button>
                <button style={{margin:"0px 5px 15px 5px"}} onClick={(e)=> encogerMapa(e)}>-</button>
            </div>
            <div className="grid"  onMouseUp={(e)=> idConsola(e)} style={{justifyContent:"center", marginBottom:"15px"}} >
                <div id="mapContainer" 
                    onTouchStart={handleTouchStart} 
                    onMouseDown={handleMouseDown}
                    onTouchEnd={handleTouchEnd}   
                    onMouseUp={handleMouseUp}
                    onTouchMove={handleTouchMove} 
                    onMouseMove={handleMouseMove} 
                    style={{width: '73vw', height: '400px', overflow:"hidden" }}
                >
                    <VenezuelaMap/>
                </div>
            </div>
            <div className="grid" style={{justifyContent:"center", gap:"20px"}}>
                <div className="col-12 lg:col-6 xl:col-2" style={{margin:"10px 25px"}}>
                    <div className="cardMetric card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Supervisores </span>
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-id-card text-blue-500 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" style={{margin:"10px 25px"}}>
                    <div className="cardMetric card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Sup. Atlaz</span>
                                <div className="text-900 font-medium text-xl">100</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-user text-orange-500 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" style={{margin:"10px 25px"}}>
                    <div className="cardMetric card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Embajadores </span>
                                <div className="text-900 font-medium text-xl">2441</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-users text-cyan-500 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" style={{margin:"10px 25px"}}>
                    <div className="cardMetric card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Registros </span>
                                <div className="text-900 font-medium text-xl">4512</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-purple-500 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapPage;