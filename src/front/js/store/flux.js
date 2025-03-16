const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			favorites: [],
			userPosts: [], // this is for each individual user on their profile feed.
			post: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			saveFavorite: async (postId, onFavoriteChange) => {
				const token = localStorage.getItem('token');
				if(!token) {
					console.error('User not authenticated');
					return;
				}
				try{
					const response = await fetch(`${process.env.BACKEND_URL}/api/fav`,{
						method: 'POST',
						headers: {
							'Content-type': 'application/json',
							'Authorization': `Bearer ${token}`,
						},
						body: JSON.stringify({ post_id: postId})
					});
					if (response.ok){
						const data = await response.json();
						console.log(data.msg);
						if(onFavoriteChange){
							onFavoriteChange()
						}
					} else {
						const errorData = await response.json();
						console.error('Error saving favorite:', response.status)
					}
				} catch (error) {
					console.error(error)
				}
			},

			fetchUserPosts: async () => {
				const token = localStorage.getItem('token');
				if(!token) {
					console.error('User not authenticated');
					return;
				}
				try{
					const response = await fetch(`${process.env.BACKEND_URL}/api/user/post`, {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					});
					if(response.ok) {
						const posts = await response.json();
						setStore({ userPosts: posts }) // this updates the store?
					} else{
						console.error('Error fetching users posts:', response.status);
					}
				} catch(error) {
					console.error(error);
				}
			}
		}
	};
};

export default getState;
