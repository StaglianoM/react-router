import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URI } from '../../config';
import Card from '../../components/posts/CardPosts/Card';
import { Link } from 'react-router-dom';

export default function Index() {
    const [posts, setPosts] = useState([]);

    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <main>
            <section>
                <div className="container">
                    <h1 className="title">Lista dei Post</h1>
                    <Link className="link" to="/posts/create">Crea Nuovo Post</Link>
                </div>
                <div className="container">
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <Card onDelete={() => fetchPosts()} post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
