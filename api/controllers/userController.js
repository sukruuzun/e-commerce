//controllers/userController.js

const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Kullanıcıları getirme hatası", error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Kullanıcı getirme hatası", error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Kullanıcı oluşturma hatası", error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Kullanıcı güncelleme hatası", error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    res.json({ message: "Kullanıcı silindi" });
  } catch (error) {
    res.status(500).json({ message: "Kullanıcı silme hatası", error });
  }
};
