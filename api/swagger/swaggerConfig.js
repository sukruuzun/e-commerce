const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Documentation with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
    components: {
      schemas: {
        Address: {
          type: 'object',
          properties: {
            userId: { type: 'string', description: 'Kullanıcı ID' },
            addressLine1: { type: 'string', description: 'Adres satırı 1' },
            addressLine2: { type: 'string', description: 'Adres satırı 2' },
            city: { type: 'string', description: 'Şehir' },
            postalCode: { type: 'string', description: 'Posta kodu' },
            country: { type: 'string', description: 'Ülke' },
          },
          required: ['userId', 'addressLine1', 'city', 'postalCode', 'country'],
        },
        Category: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Kategori ismi' },
            parentCategoryId: { type: 'string', description: 'Üst kategori ID' },
          },
          required: ['name'],
        },
        Order: {
          type: 'object',
          properties: {
            userId: { type: 'string', description: 'Kullanıcı ID' },
            orderDate: { type: 'string', format: 'date-time', description: 'Sipariş tarihi' },
            status: {
              type: 'string',
              enum: ['pending', 'shipped', 'delivered'],
              description: 'Sipariş durumu',
            },
          },
          required: ['userId', 'status'],
        },
        OrderItem: {
          type: 'object',
          properties: {
            orderId: { type: 'string', description: 'Sipariş ID' },
            productId: { type: 'string', description: 'Ürün ID' },
            quantity: { type: 'number', description: 'Ürün miktarı' },
            price: { type: 'number', description: 'Ürün fiyatı' },
          },
          required: ['orderId', 'productId', 'quantity', 'price'],
        },
        Product: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Ürün ismi' },
            description: { type: 'string', description: 'Ürün açıklaması' },
            price: { type: 'number', description: 'Ürün fiyatı' },
            stock: { type: 'number', description: 'Stok miktarı' },
            categoryId: { type: 'string', description: 'Kategori ID' },
            sellerId: { type: 'string', description: 'Satıcı ID' },
            createdAt: { type: 'string', format: 'date-time', description: 'Oluşturulma tarihi' },
            updatedAt: { type: 'string', format: 'date-time', description: 'Güncellenme tarihi' },
          },
          required: ['name', 'price', 'stock', 'sellerId'],
        },
        Review: {
          type: 'object',
          properties: {
            userId: { type: 'string', description: 'Kullanıcı ID' },
            productId: { type: 'string', description: 'Ürün ID' },
            rating: { type: 'number', minimum: 1, maximum: 5, description: 'Puan' },
            comment: { type: 'string', description: 'Yorum' },
            createdAt: { type: 'string', format: 'date-time', description: 'Yorum tarihi' },
          },
          required: ['userId', 'productId', 'rating'],
        },
        User: {
          type: 'object',
          properties: {
            username: { type: 'string', description: 'Kullanıcı adı' },
            email: { type: 'string', description: 'Kullanıcı email adresi' },
            password: { type: 'string', description: 'Kullanıcı şifresi' },
            userType: { 
              type: 'string', 
              enum: ['customer', 'seller'], 
              description: 'Kullanıcı tipi (customer veya seller)' 
            },
            createdAt: { type: 'string', format: 'date-time', description: 'Oluşturulma tarihi' },
          },
          required: ['name', 'email', 'password', 'userType'],
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
