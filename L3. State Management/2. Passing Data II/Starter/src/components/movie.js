const Movie = ({movies, profiles, users}) => {
    return <div>
        {movies.map((movie) => {
            const likeUsers = profiles.filter((profile) => {
                return profile.favoriteMovieID == movie.id;
            });
            const usernames =likeUsers.map((likeUser) => {
                return <p>{users[likeUser.userID].name}</p>
            })
            if (usernames.length === 0) {
                return <div>
                <h2>{movie.name}</h2>
                <p>No one favorited the movie</p>
                </div>
            } else {
                return <div>
                <h2>{movie.name}</h2>
                <ul>
                    {usernames.map((name) =>{
                        return <li>{name}</li>
                    })}
                </ul>
                </div>
            }
    })}
    </div>;
};

export default Movie;