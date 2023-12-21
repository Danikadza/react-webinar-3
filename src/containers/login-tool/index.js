import { memo, useEffect } from "react";
import PropTypes from 'prop-types';
import './style.css';
import { Link } from "react-router-dom";

function LoginButton() {

    return (
        <button>
            <Link to={'/login'}>Вход</Link>
        </button>
    )
}

LoginButton.propTypes = {

};

LoginButton.defaultProps = {

}

export default memo(LoginButton);
