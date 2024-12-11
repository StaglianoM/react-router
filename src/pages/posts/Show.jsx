import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URI } from '../../config';
import placeHolderImage from '../../assets/card600.jpg';
import DeletePosts from '../../components/posts/Delete/DeletePosts';

export default function Show() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`${BASE_URI}/posts/${id}`)
                .then(res => setPost(res.data))
                .catch(err => console.error(err));
        }
    }, [id]);

    const navigate = useNavigate();

    return (
        <main>
            <div className="container">
                <button onClick={() => navigate(-1)}>Indietro</button>
                {post && <DeletePosts id={post.id} onDelete={() => navigate('/posts')} />}
            </div>
            <section>
                {post ? (
                    <>
                        <figure>
                            <img src={post.image ? `${BASE_URI}/${post.image}` : placeHolderImage} alt="" />
                        </figure>
                        <div className="container">
                            <h1 className="title">{post.title}</h1>
                        </div>
                    </>
                ) : (
                    <div>Caricamento...</div>
                )}
            </section>
        </main>
    );
}
