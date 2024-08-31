// UserList.js
import PropTypes from 'prop-types';

const UserList = ({ users, showGames, toggleShowGames }) => {
    return <div className="user-list">
        <h1 className="user-list-title">Registered Users</h1>
        <button className="toggle-button" onClick={ toggleShowGames }>
            { showGames ? "Hide Games" : "Show Games" }
        </button>
        <table className="user-list-table">
            <thead className="user-item">
                <tr>
                    <th className="username"> Username</th>
                    {showGames && <th className="gamesplayed"> Games Played</th>}
                </tr>
            </thead>
            <tbody>
                {Object.entries(users).map((user) => {
                    const [username, name] = user;
                    return (
                        <tr className="user-item" key={username}>
                            <td className="username">
                                {username}
                            </td>
                            {showGames && <td className="game-count">
                                {name.games.toString()}
                            </td>}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
}

UserList.propTypes = {
    users: PropTypes.objectOf(
        PropTypes.shape({
            firstname: PropTypes.string.isRequired,
            lastname: PropTypes.string.isRequired,
            games: PropTypes.number.isRequired,
        })
    ).isRequired,
    showGames: PropTypes.bool.isRequired,
    toggleShowGames: PropTypes.func.isRequired,
};

export default UserList;