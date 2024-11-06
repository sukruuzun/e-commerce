const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Tüm ürünleri getir
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Ürün listesi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/", productController.getProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: ID'ye göre ürün getir
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Ürün ID'si
 *     responses:
 *       200:
 *         description: Tek bir ürün bilgisi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Ürün bulunamadı
 */
router.get("/:id", productController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Yeni bir ürün oluştur
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Ürün başarıyla oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Geçersiz girdi
 */
router.post("/", productController.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Mevcut bir ürünü güncelle
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Ürün ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Ürün başarıyla güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Ürün bulunamadı
 *       400:
 *         description: Geçersiz girdi
 */
router.put("/:id", productController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Mevcut bir ürünü sil
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Ürün ID'si
 *     responses:
 *       200:
 *         description: Ürün başarıyla silindi
 *       404:
 *         description: Ürün bulunamadı
 */
router.delete("/:id", productController.deleteProduct);

module.exports = router;
