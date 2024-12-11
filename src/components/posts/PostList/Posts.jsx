import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../config';
import styles from './post.module.css';
import DeletePosts from '../Delete/DeletePosts';

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

    // Rimuovo il post dalla lista quando viene eliminato
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
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

                        <DeletePosts id={post.id} onDelete={() => handleDelete(post.id)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
