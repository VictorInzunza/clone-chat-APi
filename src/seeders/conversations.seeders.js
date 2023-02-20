const Conversations = require( '../models/conversations.models' )

const converstionsSeeders = () => Conversations.bulkCreate([
  {
    "id": "1c755f88-3573-4d1e-837b-9c959c458037",
    "profileImage": "example.com/image.png",
    "firstName": "Julio",
    "lastName": "Sanchez",
    "email": "julio930911@gmail.com",
    "password": "$2b$10$KcKrhJyFH/bb9rEHMKje1eImYwgZN9ZYmMn3cDqpvY4JMGaNhkp12",
    "phone": "+51 673 103 2406"
  },
  {
    "id": "498eecc8-43b9-4be0-a0f9-880f54039122",
    "profileImage": "example2.com/image2.png",
    "firstName": "Cesar",
    "lastName": "Marquez",
    "email": "julio-c-5@ail.com",
    "password": "$2b$10$JFbeV2k4zy6WCIYmsDRHg.RVQVIGhH1AtDAzi5KvcAz0bE.T6LJb.",
    "phone": "+51 673 739 7674"
  },
  {
    "id": "bd6d410d-4294-4ced-ad2c-a09413a73a2d",
    "profileImage": "example3.com/image3.jpg",
    "firstName": "Ernesto",
    "lastName": "Garcia",
    "email": "ernesto980404@gmail.com",
    "password": "$2b$10$zuQUcbTWDqWz7BltGvF3Be02LTPAeNdEzPz4tp8c/biFqHfa5vusm",
    "phone": "+51 644 112 0921",
  }
])
converstionsSeeders()

module.exports = converstionsSeeders