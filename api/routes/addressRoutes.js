const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

/**
 * @swagger
 * /addresses:
 *   get:
 *     summary: Tüm adresleri getir
 *     tags: [Addresses]
 *     responses:
 *       200:
 *         description: Adres listesi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 */
router.get("/", addressController.getAddresses);

/**
 * @swagger
 * /addresses/{id}:
 *   get:
 *     summary: ID'ye göre adres getir
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Adres ID'si
 *     responses:
 *       200:
 *         description: Tek bir adres bilgisi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Adres bulunamadı
 */
router.get("/:id", addressController.getAddressById);

/**
 * @swagger
 * /addresses:
 *   post:
 *     summary: Yeni bir adres oluştur
 *     tags: [Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       201:
 *         description: Adres başarıyla oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       400:
 *         description: Geçersiz girdi
 */
router.post("/", addressController.createAddress);

/**
 * @swagger
 * /addresses/{id}:
 *   put:
 *     summary: Mevcut bir adresi güncelle
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Adres ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Adres başarıyla güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Adres bulunamadı
 *       400:
 *         description: Geçersiz girdi
 */
router.put("/:id", addressController.updateAddress);

/**
 * @swagger
 * /addresses/{id}:
 *   delete:
 *     summary: Mevcut bir adresi sil
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Adres ID'si
 *     responses:
 *       200:
 *         description: Adres başarıyla silindi
 *       404:
 *         description: Adres bulunamadı
 */
router.delete("/:id", addressController.deleteAddress);

module.exports = router;
