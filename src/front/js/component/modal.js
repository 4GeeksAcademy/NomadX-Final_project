import React, { Component } from "react";



export const MyModal = () => {
    return (
        <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="myModalLabel">Los Ángeles</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="description-area">
                            <textarea placeholder="La ciudad de las estrellas"></textarea>
                        </div>
                        <div class="star-rating">
                            ☆☆☆☆☆
                        </div>
                        <button className="add-media">Añadir foto/video</button>
                        <div className="comment-area">
                            <input type="text" placeholder="Escribe un comentario" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="favorite">☆ Favorito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export const PostModal = ({ post }) => {
//     const { store, actions } = useContext(Context);
//     const [favoriteChange, setFavoriteChange ] = useState(false);

//     const handleSaveFavorite = () => {
//         actions.saveFavorite(post.id, () => setFavoriteChange(!favoriteChange));
//     }


//     return (
//         <div>
//             <button onClick={handleSaveFavorite}>Save Favorite</button>
//             <ProfileFeed onFavoriteChange = {favoriteChange}/>
//         </div>
//     );
// }
