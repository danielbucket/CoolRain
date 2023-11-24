// import { handler } from '@api/handler';
import { handler } from "@api/handler";
import { endpoints } from "@api/routers";
import express from "express";

const { PORT = 3000, PUBLIC_DIR = "import.meta.env.PUBLIC_DIR" } = process.env;
const server = express();
server.use(express.json());
server.use("import.meta.env.BASE", epress.static(PUBLIC_DIR));
server.use("import.meta.env.BASE_API", hander);

server.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
	console.log("ENDPOINTS: ", endpoints);
});