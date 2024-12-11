import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URI } from '../../../config';

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);

    // Carica i dati di tutti i post al caricamento
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


    // Carica il post specifico in base all'ID
    useEffect(() => {
        if (posts.length === 0) return; // Se i post non sono ancora stati caricati, non fare nulla
        const postFound = posts.find((p) => p.id === parseInt(id));
        setPost(postFound); // Imposto il post
    }, [id, posts]);

    if (!post) {
        return <div>Caricamento...</div>; // Loader mentre carica il post
    }

    const handlePrevious = () => {
        const currentIndex = posts.findIndex((post) => post.id === parseInt(id));
        const previousIndex = (currentIndex - 1 + posts.length) % posts.length; // Ciclo indietro
        navigate(`/posts/${posts[previousIndex].id}`);
    };

    const handleNext = () => {
        const currentIndex = posts.findIndex((post) => post.id === parseInt(id));
        const nextIndex = (currentIndex + 1) % posts.length; // Ciclo avanti
        navigate(`/posts/${posts[nextIndex].id}`);
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={`${BASE_URI}/${post.image}`} alt={post.title} />
            <p>{post.content}</p>
            <ul>
                {post.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>

            <div className="navigation-buttons">
                <button onClick={handlePrevious}>Indietro</button>
                <button onClick={handleNext}>Avanti</button>
            </div>
        </div>
    );
};

export default PostDetails;
