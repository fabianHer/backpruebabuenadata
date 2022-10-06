import { Router } from "express";
import {
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuarios,
    getUsuario,
} from "../controllers/usuario.controller.js";

const router = Router();

// Routes
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
router.get("/", getUsuarios);
router.get("/:id", getUsuario);

export default router;
