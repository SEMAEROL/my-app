export const products = [
    {
      id: "64a6554291be873a351e9b",
      name: "iPhone 14",
      description: "Short description",
      price: 1299,
      brand: "apple",
      category: "Phone",
      inStock: true,
      image: "/iphone14.jpg",
      reviews: []
    },
    {
      id: "64a4eb389000d44bb5628a",
      name: "Logitech MX",
      description: "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback.",
      price: 102.99,
      brand: "logitech",
      category: "Accesories",
      inStock: true,
      image: "/logitech-mx.jpg",
      reviews: [
        {
          id: "64a5a615b8470c6e06959ee",
          userId: "64a75f1b63ad491745e66e1e",
          productId: "64a4eb389000d44bb5628a"
        }
      ]
    },
    {
      id: "64b1234567890abcdef12345",
      name: "Samsung Galaxy S22",
      description: "Powerful performance with sleek design.",
      price: 999.99,
      brand: "Samsung",
      category: "Phone",
      inStock: true,
      image: "/galaxy-s22.jpg",
      reviews: []
    },
    {
      id: "64b234567890abcdef123456",
      name: "Sony WH-1000XM5",
      description: "Industry-leading noise canceling headphones.",
      price: 349.99,
      brand: "Sony",
      category: "Accessories",
      inStock: false,
      image: "/sony-xm5.jpg",
      reviews: [
        {
          id: "64c34567890abcdef1234567",
          userId: "64c9876543210fedcba65432",
          productId: "64b234567890abcdef123456",
          comment: "Amazing sound quality!",
          rating: 5
        }
      ]
    },
    {
      id: "64b34567890abcdef1234567",
      name: "Dell XPS 13",
      description: "Compact and powerful ultrabook.",
      price: 1399.0,
      brand: "Dell",
      category: "Laptop",
      inStock: true,
      image: "/dell-xps-13.jpg",
      reviews: []
    }
  ];


