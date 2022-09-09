import React from "react";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import styles from "./Post.module.scss";

export const Post = ({
    title,
    imageUrl,
    commentsCount,

}) => {
    const onClickRemove = () => {};

    return (
        <div className={styles.root}>
            <div className={styles.editButtons}>
                <a>
                    <IconButton color="primary">
                        <EditIcon />
                    </IconButton>
                </a>
                <IconButton onClick={onClickRemove} color="secondary">
                    <DeleteIcon />
                </IconButton>
            </div>

            <img
                className={styles.image}
                src={imageUrl}   
            />

            <div className={styles.wrapper}>
                <div className={styles.indention}>
                    <h2 className={styles.title}>{title}</h2>

                    <ul className={styles.postDetails}>
                        <li>
                            <CommentIcon />
                            <span>{commentsCount}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
