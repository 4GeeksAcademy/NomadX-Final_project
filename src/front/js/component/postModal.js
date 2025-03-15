import React, { useContext } from 'react';


export const PostModal = ({ post }) => {
    const { store, actions } = useContext(Context);
    const [favoriteChange, setFavoriteChange ] = useState(false);

    const handleSaveFavorite = () => {
        actions.saveFavorite(post.id, () => setFavoriteChange(!favoriteChange));
    }


    return (
        <div>
            <button onClick={handleSaveFavorite}>Save Favorite</button>
            <ProfileFeed onFavoriteChange = {favoriteChange}/>
        </div>
    );
}


/*

// will remove this and add it to modal. Which will then need to go 
// into store to continually update list of favs displayed in home map
//  need to use global state. 

export const postModal = ({ post }) => {
    const { store, actions } = useContext(Context);
    const [favoriteChange, setFavoriteChange ] = useState(false);



    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState(null);

    const saveAsFavorite = async () => {
        if (saving || saved) return ; // << this is used to prevent having to click multiple times?

        setSaving(true);
        setError(null);

        try{
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('User not authenticated');
            }
            const response = await fetch(`${process.env.BACKEND_URL}/api/fav`,{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ post_id: post.id}),
            });
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Failed to save as favorite');
            }
            setSaved(true);
            setSaving(false)
        } catch (err) {
            setError(err.message);
            setSaving(false);
        }
    };

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.comment}</p> 

            <button onClick={saveAsFavorite} disabled={saving || saved}>
                {saving ? 'Saving...' : saved ? 'Saved' : 'Save as Favorite'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>
    );
}
    */