import React from 'react';
import { Link } from 'react-router-dom';
import localImg from '../images/Local.svg';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orfMap.css';
import { Map, TileLayer } from 'react-leaflet';


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
                center={[-27.4212683,-48.4287712]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
                >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
            </Map> 

            <Link to="" className="create-orph">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
      
    );
}

export default OrphanagesMap;