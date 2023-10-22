const products = [
  {
    id: 1,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/0755353d24487896ff68f51449fa6807/b/a/bauer-hockey-gloves-x-int.jpg",
    title: "MSI MPG Trident 3 :",
    descripcion: "MSI MPG Trident 3 10SC-005AU Intel i7 10700F",
    previousPrice: "499.00",
    price: "499.00",
    codigoSeguridad: "ASTR01232",
    count: 0,
  },
  {
    id: 2,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/category/Senior_Hockey_Skates.jpg",
    title: "Senior Ice Hockey Skates :",
    descripcion: "CCM Jetspeed FT475 Senior Ice Hockey Skates",
    previousPrice: "174.99",
    price: "174.99",
    codigoSeguridad: "ASTR012321",
    count: 0,
  },
  {
    id: 3,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/0755353d24487896ff68f51449fa6807/b/a/bauer-hockey-helmet-ims-5-ii-combo.jpg",
    title: "Senior Hockey Helmets :",
    descripcion: "Bauer IMS 5.0 II Hockey Helmet Combo",
    previousPrice: "64.99",
    price: "64.99",
    codigoSeguridad: "ASTR0411",
    count: 0,
  },
  {
    id: 4,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/category/Hockey_Shoulder_Pads.jpg",
    title: "Hockey Shoulder Pads :",
    descripcion: "Warrior Alpha DX Junior Hockey Shoulder Pads",
    previousPrice: "69.98",
    price: "69.98",
    codigoSeguridad: "AR04114",
    count: 0,
  },
  {
    id: 5,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/category/Ice_Hockey_Pants.jpg",
    title: "Ice Hockey Pants :",
    descripcion: "Bauer Supreme Mach Youth Ice Hockey Pants",
    previousPrice: "69.99",
    price: "69.99",
    codigoSeguridad: "A4114",
    count: 0,
  },
  {
    id: 6,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/0755353d24487896ff68f51449fa6807/h/o/homerun-shock-doctor-bioflex-cup.jpg",
    title: "Shock Doctor :",
    descripcion: "by Shock Doctor",
    previousPrice: "10.99",
    price: "10.99",
    codigoSeguridad: "A415414",
    count: 0,
  },
  {
    id: 7,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/0755353d24487896ff68f51449fa6807/b/a/bauer-hockey-gloves-x-int.jpg",
    title: "MSI MPG Trident 3 :",
    descripcion: "MSI MPG Trident 3 10SC-005AU Intel i7 10700F",
    previousPrice: "499.00",
    price: "499.00",
    codigoSeguridad: "ASTR01232",
    count: 0,
  },
  {
    id: 8,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/category/Senior_Hockey_Skates.jpg",
    title: "Senior Ice Hockey Skates :",
    descripcion: "CCM Jetspeed FT475 Senior Ice Hockey Skates",
    previousPrice: "174.99",
    price: "174.99",
    codigoSeguridad: "ASTR012321",
    count: 0,
  },
  {
    id: 9,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/0755353d24487896ff68f51449fa6807/b/a/bauer-hockey-helmet-ims-5-ii-combo.jpg",
    title: "Senior Hockey Helmets :",
    descripcion: "Bauer IMS 5.0 II Hockey Helmet Combo",
    previousPrice: "64.99",
    price: "64.99",
    codigoSeguridad: "ASTR0411",
    count: 0,
  },
  {
    id: 10,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/category/Hockey_Shoulder_Pads.jpg",
    title: "Hockey Shoulder Pads :",
    descripcion: "Warrior Alpha DX Junior Hockey Shoulder Pads",
    previousPrice: "69.98",
    price: "69.98",
    codigoSeguridad: "AR04114",
    count: 0,
  },
  {
    id: 11,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/category/Ice_Hockey_Pants.jpg",
    title: "Ice Hockey Pants :",
    descripcion: "Bauer Supreme Mach Youth Ice Hockey Pants",
    previousPrice: "69.99",
    price: "69.99",
    codigoSeguridad: "A4114",
    count: 0,
  },
  {
    id: 12,
    stock: "in stock",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/0755353d24487896ff68f51449fa6807/h/o/homerun-shock-doctor-bioflex-cup.jpg",
    title: "Shock Doctor :",
    descripcion: "by Shock Doctor",
    previousPrice: "10.99",
    price: "10.99",
    codigoSeguridad: "A415414",
    count: 0,
  },
];

const users = [
  {
    id: 1,
    name: "Cory House",
    image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
  },
  {
    id: 2,
    name: "Scott Allen",
    image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
  },
  {
    id: 3,
    name: "Dan Wahlin",
    image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
  },
];

const debitCards = [
  {
    id: 1,
    authorId: 1,
    cardHolderName: "Rebecca Soto :",
    cardNumber: "9999 8888 9999 0909",
    expDate: "02/2022",
    cvc: "123",
  },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

const pourchase = [];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  products,
  users,
  debitCards,
  pourchase,
};
