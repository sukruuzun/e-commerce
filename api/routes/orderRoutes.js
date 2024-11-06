const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Tüm siparişleri getir
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Sipariş listesi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get("/", orderController.getOrders);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: ID'ye göre sipariş getir
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Sipariş ID'si
 *     responses:
 *       200:
 *         description: Tek bir sipariş bilgisi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Sipariş bulunamadı
 */
router.get("/:id", orderController.getOrderById);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Yeni bir sipariş oluştur
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Sipariş başarıyla oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Geçersiz girdi
 */
router.post("/", orderController.createOrder);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Mevcut bir siparişi güncelle
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Sipariş ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Sipariş başarıyla güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Sipariş bulunamadı
 *       400:
 *         description: Geçersiz girdi
 */
router.put("/:id", orderController.updateOrder);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Mevcut bir siparişi sil
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Sipariş ID'si
 *     responses:
 *       200:
 *         description: Sipariş başarıyla silindi
 *       404:
 *         description: Sipariş bulunamadı
 */
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
