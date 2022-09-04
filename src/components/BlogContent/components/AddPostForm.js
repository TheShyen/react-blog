import "./AddPostForm.css"
const AddPostForm = () => {
    return (
        <>
            <form action="" className="addPostForm">
                <h2>Create post</h2>
                <div>
                    <input type="text" name="postTitle" />
                </div>
                <div>
                    <textarea name="postDescription" />
                </div>
                <div>
                    <button type="button">Add post</button>
                </div>
            </form>
            <div className="overlay"></div>
        </>
    );
};
export default AddPostForm;
