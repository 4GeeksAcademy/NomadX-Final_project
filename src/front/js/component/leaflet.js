import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/leaflet.css";

const MapComponent = ({ mapCenter, mapZoom }) => {

  const [points, setPoints] = useState([
    { id: 1, lat: 40.7128, lng: -74.006, city: "Nueva York", text: "Un lugar icónico" },
    { id: 2, lat: 34.0522, lng: -118.2437, city: "Los Ángeles", text: "La ciudad de las estrellas" },
    { id: 3, lat: 41.8781, lng: -87.6298, city: "Chicago", text: "La ciudad del viento" },
  ]);

  const [userLocation, setUserLocation] = useState(null);
  const [ratings, setRatings] = useState({});
  const [media, setMedia] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const cityName = await getCityName(latitude, longitude);
          setUserLocation({ lat: latitude, lng: longitude, city: cityName });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const getCityName = async (lat, lng) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      console.log(data);
      
      return ({
        city:data.address?.city || data.address?.town || data.address?.village || data.address?.state || "Ubicación desconocida",
        country: data.address.country || "Ubicación desconocida"
      })
    } catch (error) {
      console.error("Error fetching city name:", error);
      return "Ubicación desconocida";
    }
  };
  
  const handleMapClick = async (e) => {
    const location = await getCityName(e.latlng.lat, e.latlng.lng);
    const newPoint = {
      id: points.length + 1,
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      city: location.city ,
      text: "Descripción del nuevo punto",
      country : location.country
    };
    console.log(newPoint);
    
    setPoints([...points, newPoint]);
  };

  const handleDeletePoint = (id) => {
    setPoints(points.filter(point => point.id !== id));
  };
  
  const toggleFavorite = (id) => {
    setFavorites({ ...favorites, [id]: !favorites[id] });
  };

  const handleMediaUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileType = file.type.split('/')[0];
        setMedia({ ...media, [id]: { type: fileType, src: reader.result } });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Map center={mapCenter} zoom={mapZoom} style={{ height: "80vh", width: "100%" }} onClick={handleMapClick}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>
              <h3>Tu ubicación</h3>
              <p>{userLocation.city}</p>
            </Popup>
          </Marker>
        )}
        {points.map((point) => (
          <>
            {media[point.id] && media[point.id].type === "image" && (
              <ImageOverlay
                key={`image-${point.id}`}
                url={media[point.id].src}
                bounds={[[point.lat - 0.005, point.lng - 0.005], [point.lat + 0.005, point.lng + 0.005]]}
              />
            )}
            <Marker key={point.id} position={[point.lat, point.lng]}>
              <Popup>
                <div style={{ textAlign: "center" }}>
                  <h3>{point.city}</h3>
                  {media[point.id] ? (
                    media[point.id].type === "image" ? (
                      <img src={media[point.id].src} alt={point.city} style={{ width: "100%", borderRadius: "5px" }} />
                    ) : (
                      <video controls style={{ width: "100%", borderRadius: "5px" }}>
                        <source src={media[point.id].src} type="video/mp4" />
                        Tu navegador no soporta el formato de video.
                      </video>
                    )
                  ) : (
                    <p>No media uploaded</p>
                  )}
                  <input type="file" accept="image/*,video/*" onChange={(e) => handleMediaUpload(e, point.id)} />
                  <textarea
                    value={point.text}
                    onChange={(e) => setPoints(points.map(p => p.id === point.id ? { ...p, text: e.target.value } : p))}
                    style={{ width: "100%", height: "50px" }}
                  />
                  <p>
                    Rating:
                    {[1, 2, 3, 4, 5].map((num) => (
                      <span
                        key={num}
                        style={{ cursor: "pointer", color: num <= (ratings[point.id] || 0) ? "gold" : "gray", fontSize: "20px" }}
                        onClick={() => setRatings({ ...ratings, [point.id]: num })}
                      >
                        ★
                      </span>
                    ))}
                  </p>
                  <button onClick={() => handleDeletePoint(point.id)} style={{ marginTop: "10px", color: "red" }}>Eliminar</button>
                  <button onClick={() => toggleFavorite(point.id)} style={{ marginTop: "10px", color: favorites[point.id] ? "gold" : "black" }}>
                    {favorites[point.id] ? "★ Favorito" : "☆ Agregar a Favoritos"}
                  </button>
                  <div>
                    <input
                      type="text"
                      value={commentInputs[point.id] || ""}
                      onChange={(e) => setCommentInputs({ ...commentInputs, [point.id]: e.target.value })}
                      onKeyPress={(e) => e.key === "Enter" && setComments({ ...comments, [point.id]: [...(comments[point.id] || []), commentInputs[point.id]] })}
                      placeholder="Escribe un comentario"
                    />
                    <button onClick={() => setComments({ ...comments, [point.id]: [...(comments[point.id] || []), commentInputs[point.id]] })}>Añadir</button>
                    <ul>
                      {(comments[point.id] || []).map((comment, index) => (
                        <li key={index}>{comment}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Popup>
            </Marker>
          </>
        ))}
      </Map>
    </div>
  );
};
export default MapComponent;





















