import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URI } from '../config';


const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios
            .get(`${BASE_URI}/posts/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Errore nel caricamento del post:", error);
            });
    }, [id]);

    if (!post) {
        return <div>Caricamento...</div>;
    }

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
        </div>
    );
};

export default PostDetails;
