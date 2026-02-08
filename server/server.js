import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// ✅ ENABLE CORS
server.use(cors({
  origin: "*",   // allow all origins (safe for demo/projects)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
