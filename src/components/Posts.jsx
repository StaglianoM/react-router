import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URI } from '../config';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URI}/posts`)
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.error('Errore nel recupero dei posts:', err));
    }, []);

    return (
        <div>
            <h1>Elenco dei Post</h1>
            <div className="post-list">
                {posts.map((posts) => (
                    <div key={posts.id} className="posts-card">
                        <h2>{posts.title}</h2>
                        <img src={`${BASE_URI}/${posts.image}`} alt={posts.title} />
                        <p>{posts.content.substring(0, 100)}...</p>
                        <Link to={`/posts/${posts.id}`}>Leggi di più</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
