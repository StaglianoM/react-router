import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../config';
import styles from './post.module.css';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BASE_URI}/posts`)
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.error('Errore nel recupero dei posts:', err));
    }, []);

    const NavigateToCreate = () => {
        navigate('/posts/create');
    };

    return (
        <div>
            <h1 className={styles.postTitle}>Elenco dei Post</h1>
            <button className={styles.createPostButton} onClick={NavigateToCreate}>
                Crea Nuovo Post
            </button>
            <div className={styles.postList}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.postsCard}>
                        <h2>{post.title}</h2>
                        <img src={`${BASE_URI}/${post.image}`} alt={post.title} />
                        <p>{post.content.substring(0, 100)}...</p>
                        <button
                            className={styles.readMoreButton}
                            onClick={() => navigate(`/posts/${post.id}`)}
                        >
                            Leggi di più
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
