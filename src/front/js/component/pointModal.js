import React from "react";
// Eliminamos la importación del CSS para resolver el error
// import "./PointModal.css";

const PointModal = ({
  point,
  isOpen,
  onClose,
  media,
  rating,
  isFavorite,
  comments,
  commentInput,
  onTextChange,
  onRatingChange,
  onToggleFavorite,
  onMediaUpload,
  onDelete,
  onCommentInputChange,
  onAddComment
}) => {
  if (!isOpen) return null;

  const handleCommentKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddComment(commentInput);
    }
  };

  // Añadimos los estilos inline para evitar necesitar el archivo CSS
  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: "8px",
      width: "90%",
      maxWidth: "500px",
      maxHeight: "90vh",
      overflowY: "auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "column"
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      borderBottom: "1px solid #eee"
    },
    modalTitle: {
      margin: 0,
      fontSize: "1.5rem"
    },
    closeButton: {
      background: "none",
      border: "none",
      fontSize: "1.8rem",
      cursor: "pointer",
      color: "#555"
    },
    modalBody: {
      padding: "20px",
      flexGrow: 1
    },
    mediaContent: {
      width: "100%",
      maxHeight: "250px",
      objectFit: "contain",
      borderRadius: "5px",
      marginBottom: "15px"
    },
    noMedia: {
      textAlign: "center",
      padding: "30px",
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginBottom: "15px",
      color: "#777"
    },
    descriptionTextarea: {
      width: "100%",
      minHeight: "80px",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      resize: "vertical",
      marginBottom: "15px"
    },
    ratingSection: {
      marginBottom: "20px"
    },
    star: {
      cursor: "pointer",
      fontSize: "24px",
      color: "#ccc",
      marginRight: "5px"
    },
    activeStar: {
      cursor: "pointer",
      fontSize: "24px",
      color: "gold",
      marginRight: "5px"
    },
    commentInputContainer: {
      display: "flex",
      marginBottom: "10px"
    },
    commentInput: {
      flexGrow: 1,
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px 0 0 4px"
    },
    addCommentButton: {
      padding: "8px 15px",
      backgroundColor: "#4285f4",
      color: "white",
      border: "none",
      borderRadius: "0 4px 4px 0",
      cursor: "pointer"
    },
    commentsList: {
      listStyleType: "none",
      padding: 0,
      margin: 0
    },
    commentItem: {
      padding: "8px 10px",
      backgroundColor: "#f5f5f5",
      marginBottom: "5px",
      borderRadius: "4px"
    },
    modalFooter: {
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 20px",
      borderTop: "1px solid #eee"
    },
    favoriteButton: {
      padding: "8px 15px",
      backgroundColor: "#f8f8f8",
      color: "#333",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold"
    },
    favoriteButtonActive: {
      padding: "8px 15px",
      backgroundColor: "#f8f8f8",
      color: "gold",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold"
    },
    deleteButton: {
      padding: "8px 15px",
      backgroundColor: "#f44336",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold"
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>{point.city}</h2>
          <button style={styles.closeButton} onClick={onClose}>×</button>
        </div>
        
        <div style={styles.modalBody}>
          {media ? (
            media.type === "image" ? (
              <img src={media.src} alt={point.city} style={styles.mediaContent} />
            ) : (
              <video controls style={styles.mediaContent}>
                <source src={media.src} type="video/mp4" />
                Tu navegador no soporta el formato de video.
              </video>
            )
          ) : (
            <div style={styles.noMedia}>No hay multimedia</div>
          )}
          
          <div>
            <label htmlFor="media-upload">Subir imagen o video:</label>
            <input 
              id="media-upload" 
              type="file" 
              accept="image/*,video/*" 
              onChange={onMediaUpload} 
              style={{marginTop: "5px", marginBottom: "15px", display: "block"}}
            />
          </div>
          
          <div>
            <label htmlFor="point-description" style={{display: "block", marginBottom: "5px", fontWeight: "bold"}}>Descripción:</label>
            <textarea
              id="point-description"
              value={point.text}
              onChange={(e) => onTextChange(e.target.value)}
              style={styles.descriptionTextarea}
            />
          </div>
          
          <div style={styles.ratingSection}>
            <span>Valoración: </span>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                style={num <= rating ? styles.activeStar : styles.star}
                onClick={() => onRatingChange(num)}
              >
                ★
              </span>
            ))}
          </div>
          
          <div style={{marginTop: "20px"}}>
            <h3 style={{marginTop: 0, marginBottom: "10px"}}>Comentarios</h3>
            <div style={styles.commentInputContainer}>
              <input
                type="text"
                value={commentInput}
                onChange={(e) => onCommentInputChange(e.target.value)}
                onKeyPress={handleCommentKeyPress}
                placeholder="Escribe un comentario"
                style={styles.commentInput}
              />
              <button 
                onClick={() => onAddComment(commentInput)}
                style={styles.addCommentButton}
              >
                Añadir
              </button>
            </div>
            
            {comments.length > 0 ? (
              <ul style={styles.commentsList}>
                {comments.map((comment, index) => (
                  <li key={index} style={styles.commentItem}>{comment}</li>
                ))}
              </ul>
            ) : (
              <p style={{color: "#777", fontStyle: "italic"}}>No hay comentarios todavía</p>
            )}
          </div>
        </div>
        
        <div style={styles.modalFooter}>
          <button 
            onClick={onToggleFavorite}
            style={isFavorite ? styles.favoriteButtonActive : styles.favoriteButton}
          >
            {isFavorite ? "★ Favorito" : "☆ Agregar a Favoritos"}
          </button>
          <button 
            onClick={onDelete}
            style={styles.deleteButton}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointModal;