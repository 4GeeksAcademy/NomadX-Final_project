const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			favorites: [],
			userPosts: [], 
			post: [],
			token: null
		},
		actions: {
			// Use getActions to call a function within a fuction

			updateToken: () => {
				if(localStorage.getItem('access_token')) {
					setStore({token: localStorage.getItem('access_token')})
				}
			},
			setToken: (token) => {
				setStore({token: token})
			},

			saveFavorite: async (postId, isFavorite, onFinish) => {

				const token = localStorage.getItem('access_token');
				if (!token) {
					console.error('User not authenticated');
					return;
				}
				try {
					if (isFavorite) {
						const response = await fetch(`${process.env.BACKEND_URL}/api/fav/${postId}`, {
							method: 'DELETE',
							headers: {
								'Content-type': 'application/json',
								'Authorization': `Bearer ${token}`,
							},
							body: JSON.stringify({ post_id: postId })
						});
						if (response.ok) {
							const data = await response.json();
							console.log("DELETE",data.msg);
							if(onFinish) {onFinish()}
						} else {
							const errorData = await response.json();
							console.error('Error saving favorite:', response.status)
						}
					}
					else {
						const response = await fetch(`${process.env.BACKEND_URL}/api/fav`, {
							method: 'POST',
							headers: {
								'Content-type': 'application/json',
								'Authorization': `Bearer ${token}`,
							},
							body: JSON.stringify({ post_id: postId })
						});
						if (response.ok) {
							const data = await response.json();
							console.log("save",data.msg);
							if(onFinish) {onFinish()}
						} else {
							const errorData = await response.json();
							console.error('Error saving favorite:', response.status)
						}
					}

				} catch (error) {
					console.error(error)
				}
			},

			fetchUserPosts: async () => {
				const token = localStorage.getItem('access_token');
				if (!token) {
					console.error('User not authenticated');
					return;
				}
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/user/post`, {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					});
					if (response.ok) {
						const posts = await response.json();
						setStore({ userPosts: posts }) 
					} else {
						console.error('Error fetching users posts:', response.status);
					}
				} catch (error) {
					console.error(error);
				}
			},
			fetchUserFavorites: async () => {
				const token = localStorage.getItem('access_token');
				if (!token) {
					console.error('User not authenticated');
					return;
				}
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/fav/list`, {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					});
					if (response.ok) {
						const favPosts = await response.json();
						setStore({ favorites: favPosts.favorites }) // this updates the store?
					} else {
						console.error('Error fetching favorites posts:', response.status);
					}
				} catch (error) {
					console.error("errorfavorites", error);
				}
			},
			fetchAllPosts: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/post`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});

					if (response.ok) {
						const posts = await response.json();
						setStore({ post: posts });
					} else {
						console.error('Error fetching posts:', response.status);
					}
				} catch (error) {
					console.error(error);
				}
			},


		}

	};
};

export default getState;
