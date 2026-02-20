export const PRODUCTS = [
  // Pulses & Beans
  { id: 1,  name: 'Toor Dal',               price: '₹140/kg', category: 'Pulses & Beans', rating: 4.8, desc: 'Freshly stocked, cleaned & sorted' },
  { id: 2,  name: 'Chana Dal',              price: '₹110/kg', category: 'Pulses & Beans', rating: 4.7, desc: 'Split chickpeas, premium quality' },
  { id: 3,  name: 'Rajma',                  price: '₹160/kg', category: 'Pulses & Beans', rating: 4.9, desc: 'Jammu variety, rich flavour' },
  { id: 27, name: 'Moong Dal',              price: '₹120/kg', category: 'Pulses & Beans', rating: 4.8, desc: 'Yellow split moong dal' },
  { id: 28, name: 'Urad Dal',               price: '₹130/kg', category: 'Pulses & Beans', rating: 4.7, desc: 'White split urad dal' },
  { id: 29, name: 'Kabuli Chana',           price: '₹160/kg', category: 'Pulses & Beans', rating: 4.8, desc: 'Large white chickpeas' },
  
  // Spices
  { id: 4,  name: 'Everest Garam Masala',   price: '₹95',     category: 'Spices',          rating: 4.9, desc: '100g pack, aromatic blend' },
  { id: 5,  name: 'MDH Chilli Powder',      price: '₹75',     category: 'Spices',          rating: 4.7, desc: 'Fine ground, vibrant colour' },
  { id: 6,  name: 'Haldi & Dhania Pack',    price: '₹60',     category: 'Spices',          rating: 4.6, desc: 'Turmeric & coriander combo' },
  { id: 30, name: 'Jeera (Cumin Seeds)',    price: '₹400/kg', category: 'Spices',          rating: 4.9, desc: 'Premium grade, aromatic' },
  { id: 31, name: 'MDH Chana Masala',       price: '₹70',     category: 'Spices',          rating: 4.8, desc: '100g pack, tangy flavour' },
  { id: 32, name: 'Catch Black Pepper',     price: '₹60',     category: 'Spices',          rating: 4.7, desc: '50g sprinkler pack' },
  
  // Beverages
  { id: 7,  name: 'Coca-Cola',        price: '₹40',     category: 'Beverages',       rating: 4.8, desc: 'Chilled & ready to drink' },
  { id: 8,  name: 'Frooti Mango',     price: '₹20',     category: 'Beverages',       rating: 4.7, desc: 'Real mango taste' },
  { id: 9,  name: 'Limca',               price: '₹35',     category: 'Beverages',       rating: 4.5, desc: 'Lemony & refreshing' },
  { id: 33, name: 'Thums Up',         price: '₹35',     category: 'Beverages',       rating: 4.5, desc: 'Cola Fizz' },
  { id: 34, name: 'Sprite',           price: '₹40',     category: 'Beverages',       rating: 4.6, desc: 'Clear lime drink' },
  { id: 35, name: 'Sting Energy',  price: '₹125',    category: 'Beverages',       rating: 4.8, desc: 'Energy drink' },

  // Snacks
  { id: 10, name: 'Haldiram Aloo Bhujia',   price: '₹30',     category: 'Snacks',          rating: 4.9, desc: '150g pack of classic namkeen' },
  { id: 11, name: "Lay's Classic Salted",   price: '₹20',     category: 'Snacks',          rating: 4.7, desc: 'Crispy potato chips' },
  { id: 12, name: 'Kurkure Masala Munch',   price: '₹20',     category: 'Snacks',          rating: 4.8, desc: 'Tangy, crunchy, irresistible' },
  { id: 36, name: 'Bingo Mad Angles',       price: '₹20',     category: 'Snacks',          rating: 4.6, desc: 'Tomato madness' },
  { id: 37, name: 'Parle-G Biscuits',       price: '₹10',     category: 'Snacks',          rating: 4.9, desc: 'Original glucose biscuits' },
  { id: 38, name: 'Britannia Good Day',     price: '₹25',     category: 'Snacks',          rating: 4.8, desc: 'Cashew cookies' },

  // Dairy
  { id: 13, name: 'Mother Dairy Milk',      price: '₹62',     category: 'Dairy',           rating: 4.9, desc: 'Full-cream homogenised milk' },
  { id: 14, name: 'Amul Butter 500g',       price: '₹285',    category: 'Dairy',           rating: 4.9, desc: 'Pasteurised table butter' },
  { id: 15, name: 'Amul Masti Dahi 400g',   price: '₹45',     category: 'Dairy',           rating: 4.8, desc: 'Thick, creamy set curd' },
  { id: 16, name: 'Chach Buttermilk 200ml', price: '₹20',     category: 'Dairy',           rating: 4.6, desc: 'Light & probiotic-rich' },
  { id: 39, name: 'Amul Paneer 200g',       price: '₹85',     category: 'Dairy',           rating: 4.8, desc: 'Fresh malai paneer' },
  { id: 40, name: 'Amul Cheese Slices',     price: '₹135',    category: 'Dairy',           rating: 4.7, desc: 'Individually wrapped slices' },

  // Confectionery
  { id: 17, name: 'Dairy Milk Silk 60g',    price: '₹60',     category: 'Confectionery',   rating: 4.9, desc: 'Smooth milk chocolate bar' },
  { id: 18, name: 'KitKat 4-Finger',        price: '₹40',     category: 'Confectionery',   rating: 4.8, desc: 'Crispy wafer chocolate' },
  { id: 19, name: 'Parle Melody Candy',     price: '₹5',      category: 'Confectionery',   rating: 4.7, desc: 'Chocolate-filled toffee, 10-pc' },
  { id: 20, name: 'Alpenliebe Lollipop',    price: '₹5',      category: 'Confectionery',   rating: 4.6, desc: 'Creamy caramel candy' },
  { id: 41, name: 'Cadbury 5 Star 20g',     price: '₹10',     category: 'Confectionery',   rating: 4.6, desc: 'Caramel and nougat' },
  { id: 42, name: 'Snickers Bar 45g',       price: '₹40',     category: 'Confectionery',   rating: 4.8, desc: 'Peanut-filled chocolate' },

  // Cooking Oil
  { id: 21, name: 'Fortune Soyabean Oil',  price: '₹170/L',  category: 'Cooking Oil',     rating: 4.8, desc: 'Light & cholesterol-free' },
  { id: 22, name: 'Lal Quila Mustard Oil',   price: '₹185',    category: 'Cooking Oil',     rating: 4.7, desc: 'Kacchi Ghani, pungent & pure' },
  { id: 26, name: 'Seasame Oil',    price: '₹195',    category: 'Cooking Oil',     rating: 4.8, desc: 'Blended edible oil, heart-friendly' },


  // Stationery
  { id: 23, name: 'Classmate Notebook',     price: '₹45',     category: 'Stationery',      rating: 4.8, desc: '172-page ruled, A4 size' },
  { id: 24, name: 'Reynolds 045 Pen',       price: '₹10',     category: 'Stationery',      rating: 4.9, desc: 'Fine ball pen, blue ink' },
  { id: 25, name: 'Apsara Pencil Pack',     price: '₹30',     category: 'Stationery',      rating: 4.7, desc: 'Pack of 10 HB pencils' },
  { id: 45, name: 'Cello Gripper Pen',      price: '₹15',     category: 'Stationery',      rating: 4.6, desc: 'Smooth writing pen' },
  { id: 46, name: 'Linc Pen',      price: '₹350',    category: 'Stationery',      rating: 4.9, desc: 'Premium rollerball pen' },
  { id: 47, name: 'Pencil Colours',      price: '₹15',    category: 'Stationery',      rating: 4.9, desc: 'Premium rollerball pen' },

];
