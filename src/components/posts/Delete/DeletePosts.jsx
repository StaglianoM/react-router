import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URI } from '../../../config';
import style from './deletePosts.module.css';

export default function DeletePosts({ onDelete = () => { }, id }) {
    const deletePosts = () => {
        if (confirm('Sei sicuro di voler eliminare questo post?')) {
            axios.delete(`${BASE_URI}/posts/${id}`)
                .then(() => {
                    onDelete();
                })
                .catch(err => {
                    alert('Errore nella cancellazione del post');
                    console.error(err);
                });
        }
    };

    return (
        <button className={style.deleteButton} onClick={deletePosts}>Delete</button>
    );
}

DeletePosts.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
