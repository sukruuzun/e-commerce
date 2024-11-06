const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Yorumları getirme hatası', error });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Yorum getirme hatası', error });
    }
};

exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ message: 'Yorum oluşturma hatası', error });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json(review);
    } catch (error) {
        res.status(400).json({ message: 'Yorum güncelleme hatası', error });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json({ message: 'Yorum silindi' });
    } catch (error) {
        res.status(500).json({ message: 'Yorum silme hatası', error });
    }
};