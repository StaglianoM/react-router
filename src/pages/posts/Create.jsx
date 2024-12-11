import axios from "axios";
import { useState } from "react";
import { BASE_URI } from "../../config";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    title: "",
    slug: "",
    content: "",
    image: "",
    tags: "",
    isAvailable: false,
};

export default function Create() {
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    function handleFormData(e) {
        const key = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormData({
            ...formData,
            [key]: value,
        });
    }

    function savePosts(e) {
        e.preventDefault();

        const body = {
            ...formData,
            tags: formData.tags.split(",").map((tag) => tag.trim()),
        };

        axios
            .post(`${BASE_URI}/posts`, body)
            .then((res) => {
                const newPost = res.data;
                console.log(newPost);
                navigate(`/posts/${newPost.id}`);
            })
            .catch((err) => console.error(err));
    }

    return (
        <main>
            <section>
                <div className="container">
                    <h1 className="title">Nuovo Post</h1>
                </div>
                <div className="container">
                    <form onSubmit={savePosts}>
                        <p className="form-group">
                            <label htmlFor="title">Titolo</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Titolo del post"
                                value={formData.title}
                            />
                        </p>
                        <p className="form-group">
                            <label htmlFor="slug">Slug</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="slug"
                                name="slug"
                                placeholder="Slug del post"
                                value={formData.slug}
                            />
                        </p>
                        <p className="form-group">
                            <label htmlFor="content">Contenuto</label>
                            <textarea
                                onChange={handleFormData}
                                id="content"
                                name="content"
                                placeholder="Contenuto del post"
                                value={formData.content}
                            />
                        </p>
                        <p className="form-group">
                            <label htmlFor="image">Immagine</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="image"
                                name="image"
                                placeholder="URL immagine"
                                value={formData.image}
                            />
                        </p>
                        <p className="form-group">
                            <label htmlFor="tags">Tag</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Tag separati da virgola"
                                value={formData.tags}
                            />
                        </p>
                        <p className="form-group-checkbox">
                            <input
                                onChange={handleFormData}
                                type="checkbox"
                                id="is-available"
                                name="isAvailable"
                                checked={formData.isAvailable}
                            />
                            <label htmlFor="is-available">Disponibile</label>
                        </p>
                        <button type="submit">Salva</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
