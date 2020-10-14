import React from 'react';
import { Link } from 'react-router-dom';
import localImg from '../images/Local.svg';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orfMap.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet'


const mapIcon = Leaflet.icon({
    iconUrl: localImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [178, 2]
})


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={localImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estao esperando sua visita ;)</p>
                </header>
                <footer>
                    <strong>Florianopolis</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map 
                center={[-27.7630692,-48.520745]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
                >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
             <Marker
                icon={mapIcon}
                position={[-27.7630692,-48.520745]}
                >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                Lar das meninas
                </Popup>
                </Marker>           
            </Map> 

            <Link to="/" className="create-orph">
                <FiPlus size={32} color="#FFF" />
            </Link>
            
        </div>
      
    );
}

export default OrphanagesMap;