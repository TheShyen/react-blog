import React from "react";
import Grid from "@mui/material/Grid";
import { Post } from "../components/Post/Post";

const Home = () => {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid>
                    {[...Array(5)].map(() => (
                        <Post
                            id={1}
                            title="Roast the code #1 | Rock Paper Scissors"
                            imageUrl="https://nemob.ru/wp-content/uploads/2021/08/memy-pro-volkov-42ec5de.jpg"
                            user={{
                                fullName: "Keff",
                            }}
                            createdAt={"12 июня 2022 г."}
                            commentsCount={3}
                            isEditable
                        />
                    ))}
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
