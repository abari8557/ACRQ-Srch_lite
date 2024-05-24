import { server }  from "./api/server";


// explicitly specify base-10 for parseInt
const port: number = parseInt(<string>process.env.PORT, 10) || 3000;
server.listen(port), () => {
    console.log(`Server is up and running on port ${port}`);
}

