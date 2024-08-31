import PropTypes from 'prop-types';

const RegistrationForm = ({ RegisterUser, username, firstname, lastname, updateUsername, updateFirstname, updateLastname, error }) => {
    const isFormValid = username && firstname && lastname;

    return (
        <form className="registration-form" onSubmit={RegisterUser}>
            <label className="username-label">
                <input 
                    className="username-input" 
                    type="text" 
                    placeholder="Enter your username" 
                    name="username" 
                    value={username} 
                    onChange={updateUsername} 
                    required 
                />
            </label>
            <br />
            <label className="first-name-label">
                <input 
                    className="first-name-input" 
                    type="text" 
                    placeholder="Enter your first name" 
                    name="firstname" 
                    value={firstname} 
                    onChange={updateFirstname} 
                    required 
                />
            </label>
            <br />
            <label className="last-name-label"> 
                <input 
                    className="last-name-input" 
                    type="text" 
                    placeholder="Enter your last name" 
                    name="lastname" 
                    value={lastname} 
                    onChange={updateLastname} 
                    required 
                />
            </label>
            <br />
            <input 
                className="submit-button" 
                type="submit" 
                value="Submit"  
                disabled={!isFormValid} 
            />
            {error && <p className="error-message">{error}</p>} {/* Display error if exists */}
        </form>
    );
}

RegistrationForm.propTypes = {
    RegisterUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    updateUsername: PropTypes.func.isRequired,
    updateFirstname: PropTypes.func.isRequired,
    updateLastname: PropTypes.func.isRequired,
    error: PropTypes.string, // New PropType for error
};

export default RegistrationForm;
