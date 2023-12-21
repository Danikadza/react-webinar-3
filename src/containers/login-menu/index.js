import { memo, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function LoginMenu() {

    return (
        <div>
            <h1>Вход</h1>
            <form>
                <label>
                    Логин
                <input></input>
                </label>
                <label>
                    Пароль
                <input></input>
                </label>
            <input type="submit" value="Войти"/>
            </form>
        </div>
    )
}

LoginMenu.propTypes = {

};

LoginMenu.defaultProps = {

}

export default memo(LoginMenu);