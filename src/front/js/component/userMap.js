import React, { useState, useEffect, useRef, useContext } from "react";
import { Map, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";
import L, { map } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/leaflet.css";
import { useLocation } from "react-router-dom";

import { Context } from "../store/appContext";
// Estilos CSS integrados para el componente
const mapStyles = {
  container: {
    position: "relative",
    height: "81vh",
    width: "100%",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  popupContent: {
    padding: "0",
    borderRadius: "8px",
    overflow: "hidden",
    width: "300px",
    maxWidth: "300px",
  },
  popupHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "12px 15px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  },
  popupBody: {
    padding: "15px",
    backgroundColor: "#fff",
  },
  popupMedia: {
    width: "100%",
    borderRadius: "4px",
    marginBottom: "10px",
    objectFit: "cover",
  },
  popupText: {
    marginBottom: "15px",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
  },
  popupActions: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
  popupButton: {
    padding: "8px 15px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
  },
  favoriteButton: {
    backgroundColor: "#f9f9f9",
    color: "#333",
    border: "1px solid #ddd",
  },
  favoriteButtonActive: {
    backgroundColor: "#ffcc00",
    color: "#fff",
    border: "1px solid #ffcc00",
  },
  uploadLabel: {
    display: "inline-block",
    padding: "8px 15px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    textAlign: "center",
    marginTop: "10px",
    width: "100%",
  },
  ratings: {
    display: "flex",
    marginBottom: "15px",
  },
  star: {
    fontSize: "20px",
    cursor: "pointer",
    margin: "0 2px",
  },
  commentSection: {
    marginTop: "15px",
  },
  commentInput: {
    width: "100%",
    padding: "8px 10px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  },
  commentList: {
    maxHeight: "120px",
    overflowY: "auto",
    padding: "0",
    listStyle: "none",
  },
  commentItem: {
    padding: "8px 0",
    borderBottom: "1px solid #f5f5f5",
    fontSize: "13px",
  },
  mediaContainer: {
    position: "relative",
    width: "100%",
    height: "180px",
    marginBottom: "15px",
    overflow: "hidden",
    borderRadius: "4px",
  },
  textareaStyle: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    height: "80px",
    resize: "none",
    fontFamily: "inherit",
    fontSize: "14px",
  }
};

// Iconos personalizados para los marcadores - versión mejorada
const createCustomIcon = (isMedia = false, isFavorite = false) => {
  let color = "#3388ff"; // Color normal
  let icon = "📍"; // Icono normal
  
  // Si tiene media
  if (isMedia) {
    icon = "📸";
    color = isFavorite ? "#ffcc00" : "#ff5252"; // Dorado si es favorito, rojo si solo tiene media
  } 
  // Si no tiene media pero es favorito
  else if (isFavorite) {
    color = "#ffcc00"; // Dorado para favoritos
  }
  
  return L.divIcon({
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background-color: ${color};
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
      ">
        ${icon}
      </div>
    `
  });
};


const MapComponent = ({ mapCenter = [40.7128, -74.006], mapZoom = 4 }) => {
  const [points, setPoints] = useState([
    //useeffect donde hace el request a la api, para que traiga el post
  ]);

  const { store, actions } = useContext(Context);
  const [userLocation, setUserLocation] = useState(null);
  const [ratings, setRatings] = useState({});
  const [media, setMedia] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [favorites, setFavorites] = useState({});
  const mapRef = useRef(null);
  const location = useLocation();
  console.log(location);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationInfo = await getCityName(latitude, longitude);
          setUserLocation({ 
            lat: latitude, 
            lng: longitude, 
            city: locationInfo.city,
            country: locationInfo.country 
          });
          

          // Centrar el mapa en la ubicación del usuario
          if (mapRef.current && mapRef.current.leafletElement) {
            mapRef.current.leafletElement.flyTo([latitude, longitude], 12);

          }
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        { 
          enableHighAccuracy: true, 
          timeout: 5000,
          maximumAge: 0
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
        city: data.address?.city || data.address?.town || data.address?.village || data.address?.state || "Ubicación desconocida",
        country: data.address.country || "Ubicación desconocida"
      });
    } catch (error) {
      console.error("Error fetching city name:", error);
      return {
        city: "Ubicación desconocida",
        country: "Ubicación desconocida"
      };
    }
  };
  
  const handleMapClick = async (e) => {
    const location = await getCityName(e.latlng.lat, e.latlng.lng);
    const newPoint = {
      id: Date.now(), // Usar timestamp para IDs únicos
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      city: location.city,
      text: "Descripción del nuevo punto",
      country: location.country
    };
    console.log(newPoint);
    
    // setPoints([...points, newPoint]);
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

  const addComment = (id) => {
    if (commentInputs[id] && commentInputs[id].trim()) {
      setComments({ 
        ...comments, 
        [id]: [...(comments[id] || []), commentInputs[id]] 
      });
      setCommentInputs({ ...commentInputs, [id]: "" });
    }
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addComment(id);
    }
  };

  return (
    <div style={mapStyles.container}>
      <Map 
        center={mapCenter} 
        zoom={mapZoom} 
        style={mapStyles.map}
        ref={mapRef}
        zoomControl={false}
        attributionControl={false}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {userLocation && (
          <Marker 
            position={[userLocation.lat, userLocation.lng]}
            icon={L.divIcon({
              className: "",
              iconSize: [40, 40],
              iconAnchor: [20, 40],
              popupAnchor: [0, -40],
              html: `
                <div style="
                  width: 40px; 
                  height: 40px; 
                  background-color: #4CAF50; 
                  border-radius: 50%; 
                  border: 3px solid white;
                  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  font-weight: bold;
                  animation: pulse 2s infinite;
                ">
                  😊
                </div>
                <style>
                  @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                  }
                </style>
              `
            })}
          >
            <Popup>
              <div style={mapStyles.popupContent}>
                <div style={mapStyles.popupHeader}>Tu ubicación</div>
                <div style={mapStyles.popupBody}>
                  <p style={mapStyles.popupText}>
                    {userLocation.city}, {userLocation.country}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {store.userPosts && store.userPosts.map((point) => (
          <React.Fragment key={point.id}>
            {media[point.id] && media[point.id].type === "image" && (
              <ImageOverlay
                url={media[point.id].src}
                bounds={[
                  [point.latitude - 0.005, point.longitude - 0.005], 
                  [point.latitude + 0.005, point.longitude + 0.005]
                ]}
                opacity={0.8}
                zIndex={1000}
              />
            )}
            
            <Marker 
              position={[point.latitude, point.longitude]}
              icon={createCustomIcon(!!media[point.id], favorites[point.id])}
            >
              <Popup minWidth={300} maxWidth={300}>
                <div style={mapStyles.popupContent}>
                  <div style={mapStyles.popupHeader}>{point.city}</div>
                  <div style={mapStyles.popupBody}>
                    {media[point.id] && (
                      <div style={mapStyles.mediaContainer}>
                        {media[point.id].type === "image" ? (
                          <img 
                            src={media[point.id].src} 
                            alt={point.city} 
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }} 
                          />
                        ) : (
                          <video 
                            controls 
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          >
                            <source src={media[point.id].src} type="video/mp4" />
                            Tu navegador no soporta el formato de video.
                          </video>
                        )}
                      </div>
                    )}
                    
                    <textarea
                      style={mapStyles.textareaStyle}
                      value={point.text}
                      onChange={(e) => setPoints(points.map(p => 
                        p.id === point.id ? { ...p, text: e.target.value } : p
                      ))}
                      placeholder="Describe este lugar..."
                    />
                    
                    <div style={mapStyles.ratings}>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <span
                          key={num}
                          style={{
                            ...mapStyles.star,
                            color: num <= (ratings[point.id] || 0) ? "#ffcc00" : "#ddd"
                          }}
                          onClick={() => setRatings({ ...ratings, [point.id]: num })}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    
                    <label style={mapStyles.uploadLabel}>
                      {media[point.id] ? "Cambiar" : "Añadir"} foto/video
                      <input 
                        type="file" 
                        accept="image/,video/" 
                        onChange={(e) => handleMediaUpload(e, point.id)} 
                        style={{ display: "none" }}
                      />
                    </label>
                    
                    <div style={mapStyles.commentSection}>
                      <input
                        type="text"
                        style={mapStyles.commentInput}
                        value={commentInputs[point.id] || ""}
                        onChange={(e) => setCommentInputs({ ...commentInputs, [point.id]: e.target.value })}
                        onKeyPress={(e) => handleKeyPress(e, point.id)}
                        placeholder="Escribe un comentario"
                      />
                      {(comments[point.id] && comments[point.id].length > 0) && (
                        <ul style={mapStyles.commentList}>
                          {comments[point.id].map((comment, index) => (
                            <li key={index} style={mapStyles.commentItem}>{comment}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    <div style={mapStyles.popupActions}>
                      <button 
                        onClick={() => toggleFavorite(point.id)} 
                        style={{
                          ...mapStyles.popupButton,
                          ...(favorites[point.id] ? mapStyles.favoriteButtonActive : mapStyles.favoriteButton)
                        }}
                      >
                        {favorites[point.id] ? "★ Favorito" : "☆ Favorito"}
                      </button>
                    </div>

                  </div>
                </div>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
      </Map>
    </div>
  );
};

export default MapComponent;

