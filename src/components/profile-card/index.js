import { memo } from "react";
import PropTypes from 'prop-types';
import './style.css';

function ProfileCard({ article, onAdd, t }) {
    const cn = bem('ArticleCard');
    return (
        <div >
            Профиль
        </div>
    );
}

ProfileCard.propTypes = {
    
};

ProfileCard.defaultProps = {
   
}

export default memo(ProfileCard);