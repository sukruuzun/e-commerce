const express = require("express");
const router = express.Router();
const orderItemController = require("../controllers/orderItemController");

/**
 * @swagger
 * /order-items:
 *   get:
 *     summary: Tüm sipariş öğelerini getir
 *     tags: [OrderItems]
 *     responses:
 *       200:
 *         description: Sipariş öğeleri listesi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderItem'
 */
router.get("/", orderItemController.getOrderItems);

/**
 * @swagger
 * /order-items/{id}:
 *   get:
 *     summary: ID'ye göre sipariş öğesi getir
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Sipariş Öğesi ID'si
 *     responses:
 *       200:
 *         description: Tek bir sipariş öğesi bilgisi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 *       404:
 *         description: Sipariş öğesi bulunamadı
 */
router.get("/:id", orderItemController.getOrderItemById);

/**
 * @swagger
 * /order-items:
 *   post:
 *     summary: Yeni bir sipariş öğesi oluştur
 *     tags: [OrderItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderItem'
 *     responses:
 *       201:
 *         description: Sipariş öğesi başarıyla oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 *       400:
 *         description: Geçersiz girdi
 */
router.post("/", orderItemController.createOrderItem);

/**
 * @swagger
 * /order-items/{id}:
 *   put:
 *     summary: Mevcut bir sipariş öğesini güncelle
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Sipariş Öğesi ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderItem'
 *     responses:
 *       200:
 *         description: Sipariş öğesi başarıyla güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 *       404:
 *         description: Sipariş öğesi bulunamadı
 *       400:
 *         description: Geçersiz girdi
 */
router.put("/:id", orderItemController.updateOrderItem);

/**
 * @swagger
 * /order-items/{id}:
 *   delete:
 *     summary: Mevcut bir sipariş öğesini sil
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Sipariş Öğesi ID'si
 *     responses:
 *       200:
 *         description: Sipariş öğesi başarıyla silindi
 *       404:
 *         description: Sipariş öğesi bulunamadı
 */
router.delete("/:id", orderItemController.deleteOrderItem);

module.exports = router;
