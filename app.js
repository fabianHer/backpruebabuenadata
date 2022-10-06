import express from "express";
import morgan from "morgan";
const app = express();

// Import routes
import usuarioRoutes from "./routes/usuario.routes.js";

// Middlewares
app.use(morgan("dev"));

app.use(express.json());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });
// Routes
app.use("/api/usuarios", usuarioRoutes);

export default app;
