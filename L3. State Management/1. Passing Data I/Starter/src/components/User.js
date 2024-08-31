const User = ({profiles, users, movies}) => {
    console.log(users);
    return (
        <ol>
            {profiles.map((profile) => {

                const id = profile.id;
                const userID = profile.userID;
                const favoriteMovieID = profile.favoriteMovieID;

                return <div key={id} className="profile-list" style={{
                    margin: 20,
                }}>
                    <span className="profile-user-name">{users[userID].name} </span>
                    favorite movie is
                    <span className="profile-movie-name">{movies[favoriteMovieID].name}</span>.
                </div>
            })}
        </ol>
    );
};

export default User; 