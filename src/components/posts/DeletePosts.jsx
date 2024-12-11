import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URI } from '../../config';

export default function DeletePosts({ onDelete = () => { }, id }) {

    function deletePosts() {
        if (confirm('Vuoi eliminare il post?')) {
            console.log('delete post', id);
            axios.delete(`${BASE_URI}/posts/${id}`)
                .then(() => {
                    onDelete();
                })
                .catch(err => {
                    alert('Non è stato possibile eliminare il post');
                    console.error(err);
                });
        }
    }

    return (
        <button onClick={deletePosts}>Delete</button>
    );
}








DeletePosts.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
