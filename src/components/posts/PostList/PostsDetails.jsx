import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URI } from '../../../config';
import styles from './post.module.css';

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URI}/posts`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Errore nel recupero dei post:", error);
            });
    }, []);


    useEffect(() => {
        if (posts.length === 0) return;
        const postFound = posts.find((p) => p.id === parseInt(id));
        setPost(postFound);
    }, [id, posts]);

    if (!post) {
        return <div>Caricamento...</div>;
    }

    const handlePrevious = () => {
        const currentIndex = posts.findIndex((post) => post.id === parseInt(id));
        const previousIndex = (currentIndex - 1 + posts.length) % posts.length;
        navigate(`/posts/${posts[previousIndex].id}`);
    };

    const handleNext = () => {
        const currentIndex = posts.findIndex((post) => post.id === parseInt(id));
        const nextIndex = (currentIndex + 1) % posts.length;
        navigate(`/posts/${posts[nextIndex].id}`);
    };

    return (
        <div className={styles.postDetailContainer}>
            <h1>{post.title}</h1>
            <img src={`${BASE_URI}/${post.image}`} alt={post.title} />
            <p>{post.content}</p>
            <ul>
                {post.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>

            <div className={styles["navigation-buttons"]}>
                <button onClick={handlePrevious}>Indietro</button>
                <button onClick={handleNext}>Avanti</button>
            </div>
        </div>
    );
};

export default PostDetails;
