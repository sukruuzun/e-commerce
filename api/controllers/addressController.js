const Address = require("../models/Address");

exports.getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: "Adresleri getirme hatası", error });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) return res.status(404).json({ message: "Adres bulunamadı" });
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: "Adres getirme hatası", error });
  }
};

exports.createAddress = async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ message: "Adres oluşturma hatası", error });
  }
};

exports.updateAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.id   , req.body  , { new: true });       
        if (!address) return res.status(404).json({ message: "Adres bulunamadı" });
        res.json(address);
        } catch (error) {
        res.status(400).json({ message: "Adres güncelleme hatası", error });
        }
};

exports.deleteAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id);
        if (!address) return res.status(404).json({ message: "Adres bulunamadı" });
        res.json({ message: "Adres silindi" });
        } catch (error) {
        res.status(500).json({ message: "Adres silme hatası", error });
        }
};

