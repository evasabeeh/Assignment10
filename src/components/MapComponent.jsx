import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "/node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";

const locations = [
    { name: "New Delhi", position: [28.6139, 77.2090], info: "New Delhi is India's capital, known for its rich history and political significance." },
    { name: "Mumbai", position: [19.0760, 72.8777], info: "Mumbai is India's financial hub, famous for Bollywood and its bustling lifestyle." },
    { name: "Lucknow", position: [26.8467, 80.9462], info: "Lucknow, the City of Nawabs, is famous for its Mughlai cuisine, historical monuments, and Tehzeeb (etiquette)." },
    { name: "Bangalore", position: [12.9716, 77.5946], info: "Bangalore, India's Silicon Valley, is known for its tech industry and pleasant climate." },
    { name: "Chennai", position: [13.0827, 80.2707], info: "Chennai is a cultural capital, famous for its temples, beaches, and classical music." },
    { name: "Kolkata", position: [22.5726, 88.3639], info: "Kolkata is known for its colonial architecture, art, and rich literary heritage." }
];

const customIcon = new L.Icon({       // for marker logo
    iconUrl: "/marker-icon.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -40]            // area covered
});

const MapComponent = () => {
    const India = [20.5937, 78.9629];         // India's center

    return (
        <div className="h-full w-full flex justify-center items-center">
            <MapContainer center={India} zoom={5} className="h-[90vh] w-[90vw] rounded-xl shadow-[5px_-5px_6px_0px_rgba(0,_0,_0,_0.3)]">
                
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                {locations.map((location, index) => (
                    <Marker key={index} position={location.position} icon={customIcon}>
                        <Popup>
                            <strong>📍{location.name}</strong>
                            <br/>
                            {location.info}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
