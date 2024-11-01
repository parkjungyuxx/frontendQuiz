const products = [
    { id: 1, name: "Laptop", price: 1500, stock: 30, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 800, stock: 50, category: "Electronics" },
    { id: 3, name: "Desk", price: 300, stock: 20, category: "Furniture" },
    { id: 4, name: "Office Chair", price: 200, stock: 15, category: "Furniture" },
    { id: 5, name: "Headphones", price: 150, stock: 100, category: "Electronics" },
    { id: 6, name: "Monitor", price: 400, stock: 25, category: "Electronics" },
    { id: 7, name: "Tablet", price: 600, stock: 40, category: "Electronics" },
    { id: 8, name: "Coffee Table", price: 250, stock: 5, category: "Furniture" },
    { id: 9, name: "Bookshelf", price: 350, stock: 8, category: "Furniture" },
    { id: 10, name: "Smartwatch", price: 300, stock: 70, category: "Electronics" },
    { id: 11, name: "Blender", price: 100, stock: 60, category: "Appliances" },
    { id: 12, name: "Toaster", price: 50, stock: 80, category: "Appliances" },
    { id: 13, name: "Microwave", price: 200, stock: 35, category: "Appliances" },
    { id: 14, name: "Electric Kettle", price: 70, stock: 45, category: "Appliances" },
    { id: 15, name: "Gaming Console", price: 500, stock: 10, category: "Electronics" },
    { id: 16, name: "Refrigerator", price: 1200, stock: 5, category: "Appliances" },
    { id: 17, name: "Sofa", price: 900, stock: 7, category: "Furniture" },
    { id: 18, name: "Dining Table", price: 600, stock: 6, category: "Furniture" },
    { id: 19, name: "Fan", price: 80, stock: 50, category: "Appliances" },
    { id: 20, name: "Printer", price: 250, stock: 22, category: "Electronics" },
  ];

  products.sort((a,b) => b.price - a.price);
  console.log(products);