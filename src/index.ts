import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const port = 3000;

const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({
        message: "get endpoint",
        data
    });
});

app.post("/", async (req, res) => {
    const user = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        message: "post endpoint",
        user: user.id
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});