import React, {useState, useMemo, useCallback} from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';
import styles from "./AddPost.module.scss";

export const AddPost = () => {
    const imageUrl = "";
    const [value, setValue] = useState("");

    const handleChangeFile = () => {};

    const onClickRemoveImage = () => {};

    const onChange = useCallback((value) => {
        setValue(value);
    }, []);

    const options = useMemo(
        () => ({
            maxHeight: "300px",
            autofocus: true,
            placeholder: "Введите текст...",
            status: false,
        }),
        []
    );

    return (
        <Paper className={styles.paper} variant="outlined">
            <Button variant="outlined" size="large">
                Загрузить превью
            </Button>
            <input type="file" onChange={handleChangeFile} hidden />
            <img
                className={styles.image}
            />
            
            <br />
            <br />
            <TextField
                className={styles.title }
                variant="standard"
                placeholder="Заголовок статьи..."
                fullWidth
            />
            <SimpleMDE
                className={styles.editor}
                value={value}
                onChange={onChange}
                options={options}
            />
            <div className={styles.buttons}>
                <Button size="large" variant="contained">
                    Опубликовать
                </Button>
                <a href="/">
                    <Button size="large">Отмена</Button>
                </a>
            </div>
        </Paper>
    );
};
