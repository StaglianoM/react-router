import PropTypes from 'prop-types';
import { BASE_URI } from '../../../config';
import { Link } from 'react-router-dom';
import DeletePosts from '../DeletePosts';
import style from './Card.module.css';
import placeHolderImage from '../../../assets/card600.jpg';

function Card({ onDelete = () => { }, className, post = {} }) {
    const { title, image, id } = post;

    return (
        <div className={`${style.card} ${className}`}>
            <div className={style.image}>
                <img
                    className={style.thumb}
                    src={image ? `${BASE_URI}/${image}` : placeHolderImage}
                    alt={title || 'Post image'}
                />
            </div>
            <div className={style.body}>
                <div className={style.header}>
                    <h3>{title || 'Post senza nome'}</h3>
                    <DeletePosts onDelete={onDelete} id={id} />
                </div>
                <div className={style.actions}></div>
                <Link className="link" to={`/posts/${id}`}>
                    Vai alla pagina del post
                </Link>
            </div>
        </div>
    );
}







Card.propTypes = {
    onDelete: PropTypes.func,
    className: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        id: PropTypes.number,
    }),
};

export default Card;
