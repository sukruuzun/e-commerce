const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: Kullanıcı email adresi
 *               password:
 *                 type: string
 *                 description: Kullanıcı şifresi
 *     responses:
 *       200:
 *         description: Başarılı giriş
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Erişim tokenı
 *       400:
 *         description: Geçersiz istek
 *       401:
 *         description: Yetkisiz giriş
 */

router.post("/login", authController.loginUser);

module.exports = router;