import "./BlogContent.css";
import AddPostForm from "./components/AddPostForm";
import React, {useState} from 'react'

const BlogContent = () => {
    const [stateForm, setStateAddform] = useState(false);
    const handleOpenForm = () => {
        setStateAddform((prevState) =>!prevState);
    };
    return (
        <>
            {
                stateForm ? <AddPostForm /> : null
            }
            <>
                <h1>TheShy Blog</h1>
                <button onClick={handleOpenForm}>Add new post</button>
            </>
            

        </>
    );
};
export default BlogContent;