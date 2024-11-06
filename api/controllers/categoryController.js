const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Kategorileri getirme hatası", error });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Kategori bulunamadı" });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Kategori getirme hatası", error });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: "Kategori oluşturma hatası", error });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: "Kategori bulunamadı" });
    res.json(category);
    } catch (error) {
    res.status(400).json({ message: "Kategori güncelleme hatası", error });
    }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Kategori bulunamadı" });
    res.json({ message: "Kategori silindi" });
    } catch (error) {
    res.status(500).json({ message: "Kategori silme hatası", error });
    }
};