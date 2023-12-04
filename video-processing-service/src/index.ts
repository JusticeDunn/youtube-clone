import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => { // Define a 'get' endpoint that calls this function
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(
        `Video processing service listening at https://localhost:${port}`);
});