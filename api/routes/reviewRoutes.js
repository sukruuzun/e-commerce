const express = require('express');
const router = express.Router();
const reviewController = require("../controllers/reviewController");

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Tüm incelemeleri getir
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: İnceleme listesi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get("/", reviewController.getReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: ID'ye göre inceleme getir
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: İnceleme ID'si
 *     responses:
 *       200:
 *         description: Tek bir inceleme bilgisi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: İnceleme bulunamadı
 */
router.get("/:id", reviewController.getReviewById);

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Yeni bir inceleme oluştur
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: İnceleme başarıyla oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Geçersiz girdi
 */
router.post("/", reviewController.createReview);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Mevcut bir incelemeyi güncelle
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: İnceleme ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: İnceleme başarıyla güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: İnceleme bulunamadı
 *       400:
 *         description: Geçersiz girdi
 */
router.put("/:id", reviewController.updateReview);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Mevcut bir incelemeyi sil
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: İnceleme ID'si
 *     responses:
 *       200:
 *         description: İnceleme başarıyla silindi
 *       404:
 *         description: İnceleme bulunamadı
 */
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
