import axios from "axios";
import { useState } from "react";
import { BASE_URI } from "../../config";
import { useNavigate } from "react-router-dom";
import style from "../../components/Create.module.css"

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
        <main className={style.main}>
            <section>
                <div className={style.container}>
                    <h1 className={style.title}>Nuovo Post</h1>
                </div>
                <div className={style.container}>
                    <form onSubmit={savePosts} className={style.form}>
                        <p>
                            <label htmlFor="title" className={style.label}>Titolo</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Titolo del post"
                                value={formData.title}
                                className={style.input}
                            />
                        </p>
                        <p>
                            <label htmlFor="slug" className={style.label}>Slug</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="slug"
                                name="slug"
                                placeholder="Slug del post"
                                value={formData.slug}
                                className={style.input}
                            />
                        </p>
                        <p>
                            <label htmlFor="content" className={style.label}>Contenuto</label>
                            <textarea
                                onChange={handleFormData}
                                id="content"
                                name="content"
                                placeholder="Contenuto del post"
                                value={formData.content}
                                className={style.textarea}
                            />
                        </p>
                        <p>
                            <label htmlFor="image" className={style.label}>Immagine</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="image"
                                name="image"
                                placeholder="URL immagine"
                                value={formData.image}
                                className={style.input}
                            />
                        </p>
                        <p>
                            <label htmlFor="tags" className={style.label}>Tag</label>
                            <input
                                onChange={handleFormData}
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Tag separati da virgola"
                                value={formData.tags}
                                className={style.input}
                            />
                        </p>
                        <p className={style.formGroupCheckbox}>
                            <input
                                onChange={handleFormData}
                                type="checkbox"
                                id="is-available"
                                name="isAvailable"
                                checked={formData.isAvailable}
                                className={style.checkbox}
                            />
                            <label htmlFor="is-available" className={style.label}>Disponibile</label>
                        </p>
                        <button type="submit" className={style.button}>Salva</button>
                    </form>
                </div>
            </section>
        </main>
    );
}