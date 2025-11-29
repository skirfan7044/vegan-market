//Category dummy data
const categories = [
  {
    id: 1,
    item_name: "Fresh Fruit",
  },
  {
    id: 2,
    item_name: "Fresh Vegetable",
  },
  {
    id: 5,
    item_name: "Dairy, Egg & Cheese",
  },
  {
    id: 6,
    item_name: "Milk, Curd & Yogurt",
  },
  {
    id: 7,
    item_name: "Paneer & Tofu",
  },
  {
    id: 8,
    item_name: "Bakery & Bread",
  },
  {
    id: 9,
    item_name: "Cake & Pastry",
  },
  {
    id: 10,
    item_name: "Biscuit & Cookie",
  },
  {
    id: 11,
    item_name: "Breakfast Cereal",
  },
  {
    id: 12,
    item_name: "Jam, Honey & Spread",
  },
  {
    id: 13,
    item_name: "Snack & Namkeen",
  },
  {
    id: 14,
    item_name: "Chip & Popcorn",
  },
  {
    id: 15,
    item_name: "Soft Drink & Juice",
  },
  {
    id: 16,
    item_name: "Tea, Coffee & Beverage",
  },
  {
    id: 17,
    item_name: "Spice & Masala",
  },
  {
    id: 18,
    item_name: "Salt, Sugar & Jaggery",
  },
  {
    id: 19,
    item_name: "Pulse & Grain",
  },
  {
    id: 20,
    item_name: "Rice & Rice Product",
  },
  {
    id: 21,
    item_name: "Flour & Sooji",
  },
  {
    id: 22,
    item_name: "Oil & Ghee",
  },
  {
    id: 23,
    item_name: "Dry Fruit & Nut",
  },
  {
    id: 24,
    item_name: "Frozen Food",
  },
  {
    id: 25,
    item_name: "Ice Cream & Dessert",
  },
  {
    id: 26,
    item_name: "Pickle & Chutney",
  },
  {
    id: 27,
    item_name: "Instant Food & Noodle",
  },
  {
    id: 28,
    item_name: "Sauce & Ketchup",
  },
  {
    id: 29,
    item_name: "Baby Care Product",
  },
  {
    id: 30,
    item_name: "Cleaning Supply",
  },
  {
    id: 31,
    item_name: "Detergent & Dishwash",
  },
  {
    id: 32,
    item_name: "Personal Care",
  },
  {
    id: 33,
    item_name: "Health & Wellness",
  },
  {
    id: 34,
    item_name: "Pet Supply",
  },
  {
    id: 35,
    item_name: "Stationery & Household",
  },
  {
    id: 36,
    item_name: "Plastic & Kitchenware",
  },
  {
    id: 37,
    item_name: "Pooja Essential",
  },
];

//Product dummy data
const products = [
  {
    p_id: 1,
    c_id: 1,
    img: "images/apple.png",
    product_name: "Apple",
    weight: "500 gm",
    price: 96,
    mrp: 120,
    description:
      "Fresh, crisp, and sweet apples packed with fiber, vitamins, and antioxidants.",
    item_type: "fruit",
    stock: 1,
  },
  {
    p_id: 2,
    c_id: 1,
    img: "images/banana.png",
    product_name: "Banana",
    weight: "12 Pcs",
    price: 72,
    mrp: 90,
    description:
      "Naturally sweet bananas, a great source of potassium and quick energy.",
    item_type: "fruit",
    stock: 0,
  },
  {
    p_id: 3,
    c_id: 1,
    img: "images/dragon-fruit.png",
    product_name: "Dragon fruit",
    weight: "1 pc",
    price: 80,
    mrp: 100,
    description:
      "Exotic dragon fruit with a mildly sweet flavor and rich in vitamin C.",
    item_type: "fruit",
    stock: 12,
  },
  {
    p_id: 4,
    c_id: 1,
    img: "images/grape.png",
    product_name: "Grape",
    weight: "500 gm",
    price: 88,
    mrp: 110,
    description:
      "Juicy, sweet grapes full of antioxidants and refreshing taste.",
    item_type: "fruit",
    stock: 15,
  },
  {
    p_id: 5,
    c_id: 1,
    img: "images/guava.png",
    product_name: "Guava",
    weight: "500 gm",
    price: 74,
    mrp: 80,
    description:
      "Tropical guavas with high vitamin C content and a unique flavor.",
    item_type: "fruit",
    stock: 18,
  },
  {
    p_id: 6,
    c_id: 1,
    img: "images/kiwi.png",
    product_name: "Kiwi",
    weight: "4 pcs",
    price: 80,
    mrp: 100,
    description:
      "Tangy-sweet kiwis rich in vitamin C, fiber, and antioxidants.",
    item_type: "fruit",
    stock: 10,
  },
  {
    p_id: 7,
    c_id: 1,
    img: "images/litchi.png",
    product_name: "Litchi",
    weight: "1 kg",
    price: 90,
    mrp: 120,
    description: "Deliciously sweet and fragrant litchis, rich in vitamin C.",
    item_type: "fruit",
    stock: 8,
  },
  {
    p_id: 8,
    c_id: 1,
    img: "images/mango.png",
    product_name: "Mango",
    weight: "1 kg",
    price: 80,
    mrp: 100,
    description:
      "Juicy, sweet mangoes — the king of fruits — rich in vitamins and flavor.",
    item_type: "fruit",
    stock: 20,
  },
  {
    p_id: 9,
    c_id: 1,
    img: "images/muskmelon.png",
    product_name: "Muskmelon",
    weight: "1 pc",
    price: 48,
    mrp: 60,
    description:
      "Refreshing and sweet muskmelons packed with hydration and nutrients.",
    item_type: "fruit",
    stock: 14,
  },
  {
    p_id: 10,
    c_id: 1,
    img: "images/orange.png",
    product_name: "Orange",
    weight: "12 pcs",
    price: 40,
    mrp: 50,
    description: "Tangy-sweet oranges bursting with vitamin C and fresh juice.",
    item_type: "fruit",
    stock: 30,
  },
  {
    p_id: 11,
    c_id: 1,
    img: "images/pineapple.png",
    product_name: "Pineapple",
    weight: "1 pc",
    price: 60,
    mrp: 90,
    description:
      "Tropical pineapple with a perfect balance of sweetness and tartness.",
    item_type: "fruit",
    stock: 6,
  },
  {
    p_id: 12,
    c_id: 1,
    img: "images/pomegranate.png",
    product_name: "Pomegranate",
    weight: "500 gm",
    price: 74,
    mrp: 80,
    description:
      "Juicy pomegranate seeds packed with antioxidants and vitamins.",
    item_type: "fruit",
    stock: 9,
  },
  {
    p_id: 13,
    c_id: 2,
    img: "images/tomato.png",
    product_name: "Tomato",
    weight: "1 kg",
    price: 40,
    mrp: 50,
    description:
      "Fresh, juicy red tomatoes perfect for salads, curries, and cooking.",
    item_type: "vegetable",
    stock: 35,
  },
  {
    p_id: 14,
    c_id: 2,
    img: "images/potato.png",
    product_name: "Potato",
    weight: "1 kg",
    price: 30,
    mrp: 40,
    description:
      "Premium-quality potatoes ideal for fries, curries, and baking.",
    item_type: "vegetable",
    stock: 50,
  },
  {
    p_id: 15,
    c_id: 2,
    img: "images/onion.png",
    product_name: "Onion",
    weight: "1 kg",
    price: 35,
    mrp: 45,
    description:
      "Fresh onions with a strong aroma, essential for Indian cooking.",
    item_type: "vegetable",
    stock: 40,
  },
  {
    p_id: 16,
    c_id: 2,
    img: "images/spinach.png",
    product_name: "Spinach",
    weight: "500 gm",
    price: 25,
    mrp: 35,
    description: "Nutritious green spinach leaves, rich in iron and vitamins.",
    item_type: "vegetable",
    stock: 12,
  },
  {
    p_id: 17,
    c_id: 2,
    img: "images/carrot.png",
    product_name: "Carrot",
    weight: "500 gm",
    price: 28,
    mrp: 38,
    description: "Crisp, sweet carrots full of beta-carotene and antioxidants.",
    item_type: "vegetable",
    stock: 15,
  },
  {
    p_id: 18,
    c_id: 2,
    img: "images/cabbage.png",
    product_name: "Cabbage",
    weight: "1 pc",
    price: 20,
    mrp: 30,
    description:
      "Fresh cabbage with crunchy leaves, perfect for salads and stir-fry.",
    item_type: "vegetable",
    stock: 8,
  },
  {
    p_id: 19,
    c_id: 2,
    img: "images/cauliflower.png",
    product_name: "Cauliflower",
    weight: "1 pc",
    price: 30,
    mrp: 40,
    description: "White, tender cauliflower, ideal for curries and frying.",
    item_type: "vegetable",
    stock: 6,
  },
  {
    p_id: 20,
    c_id: 2,
    img: "images/brinjal.png",
    product_name: "Brinjal",
    weight: "500 gm",
    price: 25,
    mrp: 35,
    description:
      "Glossy purple brinjal with soft texture, great for roasting and curries.",
    item_type: "vegetable",
    stock: 10,
  },
  {
    p_id: 21,
    c_id: 2,
    img: "images/cucumber.png",
    product_name: "Cucumber",
    weight: "1 kg",
    price: 35,
    mrp: 45,
    description: "Cool, refreshing cucumbers perfect for salads and juices.",
    item_type: "vegetable",
    stock: 18,
  },
  {
    p_id: 22,
    c_id: 2,
    img: "images/capsicum.png",
    product_name: "Capsicum",
    weight: "500 gm",
    price: 40,
    mrp: 50,
    description:
      "Fresh green capsicum with a crisp texture, great for stir-fry.",
    item_type: "vegetable",
    stock: 11,
  },
  {
    p_id: 23,
    c_id: 2,
    img: "images/beans.png",
    product_name: "French Bean",
    weight: "500 gm",
    price: 45,
    mrp: 55,
    description: "Tender, green French beans full of fiber and nutrients.",
    item_type: "vegetable",
    stock: 14,
  },
  {
    p_id: 24,
    c_id: 2,
    img: "images/bittergourd.png",
    product_name: "Bitter Gourd",
    weight: "500 gm",
    price: 35,
    mrp: 45,
    description: "Healthy bitter gourds, known for their medicinal properties.",
    item_type: "vegetable",
    stock: 9,
  },
  {
    p_id: 25,
    c_id: 5,
    img: "images/egg.png",
    product_name: "Egg",
    weight: "12 pcs",
    price: 90,
    mrp: 100,
    description: "Organic farm fresh eggs, rich in protein and nutrients.",
    item_type: "egg",
    stock: 60,
  },
  {
    p_id: 26,
    c_id: 5,
    img: "images/cheese.png",
    product_name: "Cheese",
    weight: "200 gm",
    price: 250,
    mrp: 280,
    description: "Aged cheddar cheese with a sharp and rich flavor.",
    item_type: "cheese",
    stock: 20,
  },
  {
    p_id: 27,
    c_id: 5,
    img: "images/butter.png",
    product_name: "Butter",
    weight: "500 gm",
    price: 170,
    mrp: 210,
    description: "Soft and fresh homemade paneer, perfect for cooking.",
    item_type: "dairy",
    stock: 15,
  },
  {
    p_id: 28,
    c_id: 5,
    img: "images/buttermilk.png",
    product_name: "Butter Milk",
    weight: "500 ml",
    price: 35,
    mrp: 40,
    description: "Traditional buttermilk, refreshing and good for digestion.",
    item_type: "dairy",
    stock: 25,
  },
  {
    p_id: 29,
    c_id: 6,
    img: "images/fullcream_milk.png",
    product_name: "Full Cream Milk",
    weight: "1 Litre",
    price: 60,
    mrp: 70,
    description: "Fresh and pure full cream milk from local farms.",
    item_type: "dairy",
    stock: 40,
  },
  {
    p_id: 30,
    c_id: 6,
    img: "images/curd.png",
    product_name: "Fresh Curd",
    weight: "500 gm",
    price: 40,
    mrp: 50,
    description: "Creamy and homemade style fresh curd for daily use.",
    item_type: "dairy",
    stock: 30,
  },
  {
    p_id: 31,
    c_id: 6,
    img: "images/greek_yogurt.png",
    product_name: "Greek Yogurt",
    weight: "200 gm",
    price: 90,
    mrp: 110,
    description: "Thick and creamy Greek yogurt, rich in protein.",
    item_type: "dairy",
    stock: 18,
  },
  {
    p_id: 32,
    c_id: 6,
    img: "images/lassi.png",
    product_name: "Lassi",
    weight: "250 ml",
    price: 35,
    mrp: 50,
    description:
      "Smooth and creamy salted butter lassi for cooking and baking.",
    item_type: "dairy",
    stock: 22,
  },
  {
    p_id: 33,
    c_id: 7,
    img: "images/paneer.png",
    product_name: "Fresh Paneer",
    weight: "500 gm",
    price: 180,
    mrp: 210,
    description: "Soft and fresh homemade paneer, perfect for cooking.",
    item_type: "dairy",
    stock: 16,
  },
];

// Some user's dummy data
const users = [
  {
    u_id: 1,
    address: "123 MG Road, Bengaluru, KA",
    user_password: "pass@123",
    email_id: "john.doe@example.com",
    mobile: "9876543210",
    user_name: "John Doe",
  },
  {
    u_id: 2,
    address: "45 Park Street, Kolkata, WB",
    user_password: "abc#456",
    email_id: "jane.smith@example.com",
    mobile: "9123456780",
    user_name: "Jane Smith",
  },
  {
    u_id: 3,
    address: "7 Gandhi Nagar, Chennai, TN",
    user_password: "helloWorld1!",
    email_id: "rohan.kumar@example.com",
    mobile: "9988776655",
    user_name: "Rohan Kumar",
  },
  {
    u_id: 4,
    address: "88 Nehru Place, New Delhi, DL",
    user_password: "secure@2023",
    email_id: "ananya.verma@example.com",
    mobile: "9876501234",
    user_name: "Ananya Verma",
  },
  {
    u_id: 5,
    address: "22 Law College Rd, Pune, MH",
    user_password: "myPass_321",
    email_id: "rahul.sharma@example.com",
    mobile: "9090909090",
    user_name: "Rahul Sharma",
  },
  {
    u_id: 6,
    address: "14 Civil Lines, Jaipur, RJ",
    user_password: "pass@jaipur",
    email_id: "meera.kapoor@example.com",
    mobile: "9123450987",
    user_name: "Meera Kapoor",
  },
  {
    u_id: 7,
    address: "3 Station Rd, Nagpur, MH",
    user_password: "nagpur_789",
    email_id: "sahil.raj@example.com",
    mobile: "9812345678",
    user_name: "Sahil Raj",
  },
  {
    u_id: 8,
    address: "78 Residency Rd, Lucknow, UP",
    user_password: "lucknow@pass",
    email_id: "priya.sen@example.com",
    mobile: "9871112233",
    user_name: "Priya Sen",
  },
  {
    u_id: 9,
    address: "9 Mission Rd, Kochi, KL",
    user_password: "kochi#pass",
    email_id: "ajay.nair@example.com",
    mobile: "9543218760",
    user_name: "Ajay Nair",
  },
  {
    u_id: 10,
    address: "56 Carter Rd, Mumbai, MH",
    user_password: "mumbai@123",
    email_id: "riya.patel@example.com",
    mobile: "9001122334",
    user_name: "Riya Patel",
  },
  {
    u_id: 11,
    address: "12 Brigade Rd, Bengaluru, KA",
    user_password: "brigade_999",
    email_id: "vishal.mehta@example.com",
    mobile: "9819981998",
    user_name: "Vishal Mehta",
  },
  {
    u_id: 12,
    address: "67 Golf Links, New Delhi, DL",
    user_password: "golf@pass",
    email_id: "nidhi.agarwal@example.com",
    mobile: "9822223333",
    user_name: "Nidhi Agarwal",
  },
  {
    u_id: 13,
    address: "1 Church St, Shimla, HP",
    user_password: "shimla_456",
    email_id: "amit.chopra@example.com",
    mobile: "9778899001",
    user_name: "Amit Chopra",
  },
  {
    u_id: 14,
    address: "4 MG Marg, Gangtok, SK",
    user_password: "gangtok@pass",
    email_id: "karan.malhotra@example.com",
    mobile: "9867543210",
    user_name: "Karan Malhotra",
  },
  {
    u_id: 15,
    address: "19 Park Ave, Hyderabad, TS",
    user_password: "hyderabad@999",
    email_id: "pallavi.reddy@example.com",
    mobile: "9812345600",
    user_name: "Pallavi Reddy",
  },
  {
    u_id: 16,
    address: "50 Mall Rd, Dehradun, UK",
    user_password: "dehradun_123",
    email_id: "arjun.bhatt@example.com",
    mobile: "9800112233",
    user_name: "Arjun Bhatt",
  },
  {
    u_id: 17,
    address: "33 Beach Rd, Puducherry, PY",
    user_password: "beach@pass",
    email_id: "isha.menon@example.com",
    mobile: "9822334455",
    user_name: "Isha Menon",
  },
  {
    u_id: 18,
    address: "27 Hill View, Darjeeling, WB",
    user_password: "darjeeling@999",
    email_id: "soumya.das@example.com",
    mobile: "9876543201",
    user_name: "Soumya Das",
  },
  {
    u_id: 19,
    address: "5 Main Bazar, Leh, LA",
    user_password: "leh@pass",
    email_id: "tashi.lama@example.com",
    mobile: "9900112233",
    user_name: "Tashi Lama",
  },
  {
    u_id: 20,
    address: "8 Lotus Ln, Bhopal, MP",
    user_password: "bhopal@123",
    email_id: "mohit.khan@example.com",
    mobile: "9877766554",
    user_name: "Mohit Khan",
  },
];

const orders = [
  {
    u_id: 1,
    orderID: 106021375601,
    address: "Kalipur, Dankuni, Hooghly, WB, 712289",
    gst: "12.00",
    item_id: [
      { p_id: 1, qty: 2 },
      { p_id: 5, qty: 1 },
    ],
    shipping: "50.00",
    subtotal: "240.80",
    total: "309.30",
    status: "Pending",
    payment_mode: "COD",
    orderDate: "2025-09-01",
  },
  {
    u_id: 2,
    orderID: 106021375602,
    address: "Park Street, Kolkata, WB, 700016",
    gst: "12.00",
    item_id: [
      { p_id: 7, qty: 3 },
      { p_id: 8, qty: 2 },
    ],
    shipping: "40.00",
    subtotal: "180.50",
    total: "232.50",
    status: "Processing",
    payment_mode: "UPI",
    orderDate: "2025-09-02",
  },
  {
    u_id: 3,
    orderID: 106021375603,
    address: "MG Road, Bengaluru, KA, 560001",
    gst: "12.00",
    item_id: [
      { p_id: 3, qty: 1 },
      { p_id: 9, qty: 4 },
    ],
    shipping: "60.00",
    subtotal: "320.00",
    total: "395.00",
    status: "Shipped",
    payment_mode: "Credit Card",
    orderDate: "2025-09-03",
  },
  {
    u_id: 4,
    orderID: 106021375604,
    address: "Connaught Place, New Delhi, DL, 110001",
    gst: "12.00",
    item_id: [
      { p_id: 6, qty: 2 },
      { p_id: 10, qty: 2 },
    ],
    shipping: "55.00",
    subtotal: "400.00",
    total: "475.00",
    status: "Delivered",
    payment_mode: "Net Banking",
    orderDate: "2025-09-04",
  },
  {
    u_id: 5,
    orderID: 106021375605,
    address: "Banjara Hills, Hyderabad, TS, 500034",
    gst: "12.00",
    item_id: [
      { p_id: 11, qty: 1 },
      { p_id: 12, qty: 3 },
    ],
    shipping: "35.00",
    subtotal: "210.00",
    total: "263.00",
    status: "Cancelled",
    payment_mode: "UPI",
    orderDate: "2025-09-05",
  },
  {
    u_id: 6,
    orderID: 106021375606,
    address: "Anna Nagar, Chennai, TN, 600040",
    gst: "12.00",
    item_id: [
      { p_id: 13, qty: 5 },
      { p_id: 14, qty: 2 },
    ],
    shipping: "45.00",
    subtotal: "150.00",
    total: "205.00",
    status: "Pending",
    payment_mode: "Debit Card",
    orderDate: "2025-09-06",
  },
  {
    u_id: 7,
    orderID: 106021375607,
    address: "Sector 17, Chandigarh, CH, 160017",
    gst: "12.00",
    item_id: [
      { p_id: 15, qty: 2 },
      { p_id: 16, qty: 1 },
    ],
    shipping: "50.00",
    subtotal: "270.00",
    total: "342.50",
    status: "Shipped",
    payment_mode: "Credit Card",
    orderDate: "2025-09-07",
  },
  {
    u_id: 8,
    orderID: 106021375608,
    address: "Civil Lines, Jaipur, RJ, 302006",
    gst: "12.00",
    item_id: [
      { p_id: 17, qty: 4 },
      { p_id: 18, qty: 2 },
    ],
    shipping: "40.00",
    subtotal: "190.00",
    total: "246.00",
    status: "Delivered",
    payment_mode: "UPI",
    orderDate: "2025-09-08",
  },
  {
    u_id: 9,
    orderID: 106021375609,
    address: "Alkapuri, Vadodara, GJ, 390007",
    gst: "12.00",
    item_id: [
      { p_id: 19, qty: 1 },
      { p_id: 20, qty: 5 },
    ],
    shipping: "55.00",
    subtotal: "310.00",
    total: "379.75",
    status: "Processing",
    payment_mode: "Net Banking",
    orderDate: "2025-09-09",
  },
  {
    u_id: 10,
    orderID: 106021375610,
    address: "Patia, Bhubaneswar, OR, 751024",
    gst: "12.00",
    item_id: [
      { p_id: 21, qty: 2 },
      { p_id: 22, qty: 3 },
    ],
    shipping: "60.00",
    subtotal: "280.00",
    total: "353.00",
    status: "Pending",
    payment_mode: "COD",
    orderDate: "2025-09-10",
  },
  {
    u_id: 11,
    orderID: 106021375611,
    address: "Salt Lake, Kolkata, WB, 700064",
    gst: "12.00",
    item_id: [
      { p_id: 23, qty: 1 },
      { p_id: 24, qty: 4 },
    ],
    shipping: "45.00",
    subtotal: "260.00",
    total: "324.00",
    status: "Delivered",
    payment_mode: "Credit Card",
    orderDate: "2025-09-11",
  },
  {
    u_id: 12,
    orderID: 106021375612,
    address: "Jayanagar, Bengaluru, KA, 560011",
    gst: "12.00",
    item_id: [
      { p_id: 25, qty: 2 },
      { p_id: 26, qty: 2 },
    ],
    shipping: "40.00",
    subtotal: "300.00",
    total: "357.50",
    status: "Shipped",
    payment_mode: "Debit Card",
    orderDate: "2025-09-12",
  },
  {
    u_id: 13,
    orderID: 106021375613,
    address: "Andheri West, Mumbai, MH, 400053",
    gst: "12.00",
    item_id: [
      { p_id: 27, qty: 3 },
      { p_id: 28, qty: 1 },
    ],
    shipping: "50.00",
    subtotal: "350.00",
    total: "420.00",
    status: "Cancelled",
    payment_mode: "UPI",
    orderDate: "2025-09-13",
  },
  {
    u_id: 14,
    orderID: 106021375614,
    address: "Rajajinagar, Bengaluru, KA, 560010",
    gst: "12.00",
    item_id: [
      { p_id: 29, qty: 2 },
      { p_id: 30, qty: 3 },
    ],
    shipping: "55.00",
    subtotal: "275.00",
    total: "342.00",
    status: "Processing",
    payment_mode: "Credit Card",
    orderDate: "2025-09-14",
  },
  {
    u_id: 15,
    orderID: 106021375615,
    address: "Charminar, Hyderabad, TS, 500002",
    gst: "12.00",
    item_id: [
      { p_id: 5, qty: 4 },
      { p_id: 12, qty: 2 },
    ],
    shipping: "35.00",
    subtotal: "180.00",
    total: "230.00",
    status: "Pending",
    payment_mode: "Net Banking",
    orderDate: "2025-09-15",
  },
  {
    u_id: 16,
    orderID: 106021375616,
    address: "T Nagar, Chennai, TN, 600017",
    gst: "12.00",
    item_id: [
      { p_id: 7, qty: 3 },
      { p_id: 14, qty: 2 },
    ],
    shipping: "40.00",
    subtotal: "220.00",
    total: "278.00",
    status: "Shipped",
    payment_mode: "Debit Card",
    orderDate: "2025-09-16",
  },
  {
    u_id: 17,
    orderID: 106021375617,
    address: "Hazratganj, Lucknow, UP, 226001",
    gst: "12.00",
    item_id: [
      { p_id: 2, qty: 1 },
      { p_id: 9, qty: 5 },
    ],
    shipping: "50.00",
    subtotal: "260.00",
    total: "326.00",
    status: "Delivered",
    payment_mode: "Credit Card",
    orderDate: "2025-09-17",
  },
  {
    u_id: 18,
    orderID: 106021375618,
    address: "Ashok Nagar, Pune, MH, 411007",
    gst: "12.00",
    item_id: [
      { p_id: 11, qty: 2 },
      { p_id: 19, qty: 3 },
    ],
    shipping: "45.00",
    subtotal: "240.00",
    total: "298.00",
    status: "Cancelled",
    payment_mode: "UPI",
    orderDate: "2025-09-18",
  },
  {
    u_id: 19,
    orderID: 106021375619,
    address: "Gandhinagar, Ahmedabad, GJ, 382010",
    gst: "12.00",
    item_id: [
      { p_id: 6, qty: 2 },
      { p_id: 20, qty: 4 },
    ],
    shipping: "55.00",
    subtotal: "290.00",
    total: "359.50",
    status: "Processing",
    payment_mode: "COD",
    orderDate: "2025-09-19",
  },
  {
    u_id: 20,
    orderID: 106021375620,
    address: "Civil Lines, Nagpur, MH, 440001",
    gst: "12.00",
    item_id: [
      { p_id: 8, qty: 3 },
      { p_id: 15, qty: 2 },
    ],
    shipping: "40.00",
    subtotal: "310.00",
    total: "369.00",
    status: "Delivered",
    payment_mode: "Net Banking",
    orderDate: "2025-09-20",
  },
];

const date = new Date();

const myCart = JSON.parse(window.localStorage.getItem("myCart")) || [];

// const p_id = [0, 5, 7, 8, 12];
// const filteredProducts = products.filter(product => p_id.includes(product.p_id));

//Accessing the data
let product_data = JSON.parse(window.localStorage.getItem("product_data"));
let user_data = JSON.parse(window.localStorage.getItem("user_data"));
let loged_user = JSON.parse(window.localStorage.getItem("userLoggedIn"));
let order_data = JSON.parse(window.localStorage.getItem("orders"));
window.sessionStorage.removeItem("c_data");

function handleReload() {
  window.location.reload();
}

// If the local Storage does not has the data then it will run and dummy Product's data will be saved
if (!product_data) {
  window.localStorage.setItem("product_data", JSON.stringify(products));
  handleReload();
}

// If the local Storage does not has the data then it will run and dummy user's data will be saved
if (!user_data) {
  window.localStorage.setItem("user_data", JSON.stringify(users));
  handleReload();
}

if (!order_data) {
  window.localStorage.setItem("orders", JSON.stringify(orders));
  handleReload();
}

//Proteced Admin's page
const adminPages = [
  "product.html",
  "dashboard.html",
  "orders.html",
  "users.html",
];

const pageName = window.location.pathname.split("/").pop();

//Checking to redirect the Admin to sign in page if the Admin is not logged in.
// if (adminPages.includes(pageName)) {
//   const isLoggedIn = window.localStorage.getItem("isAdminLoggedIn");

//   if (!isLoggedIn) {
//     window.location.href = "admin-sign-in.html";
//   }
// }

//Proteced user's page
const userPages = ["cart.html", "profile.html", "my-order.html"];

//Checking to redirect the user to sign in page if the user is not logged in.
if (userPages.includes(pageName)) {
  if (!loged_user) {
    window.location.href = "user-auth.html";
  }
}

// Add to cart function
function addToCart(itemId, event) {
  event.stopPropagation();
  const numericId = Number(itemId);

  // Find the product
  const findData = products.find((fi) => fi.p_id === numericId);
  if (!findData) {
    console.error(`Product with ID ${itemId} not found.`);
    return;
  }

  // Check if already in cart
  const existingIndex = myCart.findIndex((item) => item.p_id === numericId);
  if (existingIndex > -1) {
    myCart[existingIndex].qty += 1; // Increment qty
    Toastify({
      text: `✅ ${findData.product_name}'s quantity is increased`,
      duration: 1000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4caa26",
      close: true,
    }).showToast();
  } else {
    myCart.push({ ...findData, qty: 1 }); // Clone + add qty
    Toastify({
      text: `✅ ${findData.product_name} is added to your cart`,
      duration: 1000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4caa26",
      close: true,
    }).showToast();
  }

  // Save to localStorage
  window.localStorage.setItem("myCart", JSON.stringify(myCart));

  // Toastify
}

// Category sidebar
const categoryContainer = document.getElementById("categoryList");
let ulHTML = "<ul>";
categories.forEach((cat) => {
  const dataFil = product_data.filter((fl) => fl.c_id == cat.id);

  if (dataFil && dataFil.length > 0) {
    let subUlHTML = "<ul>";
    dataFil.forEach((sub) => {
      subUlHTML += `<li><a onclick="handleProduct('${sub.product_name}')"><i class="bi bi-caret-right-fill"></i> ${sub.product_name}</a></li>`;
    });
    subUlHTML += "</ul>";

    ulHTML += `
                <li>
                    <a onclick="handleProduct('${cat.id}')">
                        ${cat.item_name}
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    ${subUlHTML}
                </li>
            `;
  } else {
    ulHTML += `<li><a>${cat.item_name} <i class="bi bi-caret-down-fill"></i></a> </li>`;
  }
});

ulHTML += "</ul>";
if (categoryContainer) {
  categoryContainer.innerHTML = ulHTML;
}

// Sidebar Event Listener of ul and li
document.querySelectorAll("#categoryList > ul > li > a").forEach((a) => {
  a.addEventListener("click", function (e) {
    const li = this.parentElement;
    const icon = this.querySelector("i");

    if (li.querySelector("ul")) {
      e.preventDefault();

      li.classList.toggle("open");

      if (li.classList.contains("open")) {
        icon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
      } else {
        icon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
      }
    }
  });
});

const productList = document.getElementById("productList");

// For smooth exp a custom skeleton, while loading it will be shown
function showSkeleton(count) {
  if (productList) {
    productList.innerHTML = Array(count)
      .fill(
        `<div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <div class="skeleton-img"></div>
                <div class="skeleton" style="height: 20px; width: 80%;"></div>
                <div class="skeleton" style="height: 18px; width: 60%;"></div>
                <div class="skeleton" style="height: 30px; width: 100%;"></div>
            </div>
        </div>`
      )
      .join("");
  }
}

// To display data of items to user
function handleProduct(dataId) {
  const cData = window.sessionStorage.getItem("c_data");

  // If category hasn't changed, skip
  if (String(cData) === String(dataId)) {
    return;
  }

  const searchTerm = String(dataId || "")
    .trim()
    .toLowerCase();

  const productFilter = product_data.filter((val) => {
    if (searchTerm === "") return true;
    if (searchTerm === String(val.c_id)) return true;
    if (val.product_name?.toLowerCase().includes(searchTerm)) return true;
    if (val.item_type?.toLowerCase().includes(searchTerm)) return true;
    return false;
  });

  showSkeleton(12);

  setTimeout(() => {
    if (productList) {
      if (productFilter.length > 0) {
        productList.innerHTML = productFilter
          .map(
            (product) => `
          <div class="col-xxl-3 col-lg-4 col-sm-6 col-12">
           <div class="card" role="button">
  <img src="${product.img}" alt="${product.product_name}" 
       loading="lazy" 
       data-bs-toggle="modal" data-bs-target="#exampleModal"
       onclick="modalFun(${product.p_id})">

  <h6 data-bs-toggle="modal" data-bs-target="#exampleModal">
    ${product.product_name} ${product.weight}
  </h6>
  <h5><strong>₹${product.price.toFixed(2)}</strong> <del>₹${product.mrp.toFixed(
              2
            )}</del></h5>
  <button type="button" data-id="${product.p_id}" 
          onclick="addToCart(${product.p_id}, event)"
          ${product.stock == 0 ? "disabled" : ""}>
    ${product.stock > 0 ? "Add to cart" : "Out of stock"}
  </button>
</div>

          </div>
        `
          )
          .join("");
      } else {
        productList.innerHTML = `
        <h4 class="not-found">
          404 <br> The product is missing, <br> but the adventure continues.
        </h4>
      `;
      }
    }
  }, 1000);

  window.sessionStorage.setItem("c_data", dataId);
}

handleProduct(1);

//product Detail Modal
const modaal = document.getElementById("modal-data");
function modalFun(mpodalData) {
  const productFind = product_data.find((val) => val.p_id == mpodalData);
  modaal.innerHTML = `<div class="col-lg-5 col-sm-12"><img src="${
    productFind.img
  }" alt="${productFind.product_name}" class="my-1"></div>
  <div class="col-lg-7 col-sm-12 mt-4"><h4>${
    productFind.product_name
  }</h4> <h5><strong>Quantity - </strong>${productFind.weight}</h5>
  <h5><strong>₹${productFind.price.toFixed(
    2
  )}</strong> <del>₹${productFind.mrp.toFixed(
    2
  )}</del></h5> <p><strong>Description - </strong>${
    productFind.description
  }</p> <button  ${
    productFind.stock == 0 ? "disabled" : ""
  } onclick="addToCart('${productFind.p_id}', event)">${
    productFind.stock > 0 ? "Add to cart" : "Out of stock"
  }</button></div>`;
}

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const productScroll = document.getElementById("productList");

// Search Input
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchValue = input.value.trim();

    if (pageName != "index.html") {
      window.location.href = "index.html";
    }

    handleProduct(searchValue);
    const y =
      productList.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
}

// Product Delete Function
function removeProduct(rid) {
  const remove = product_data.filter((fi) => fi.p_id != rid);
  window.localStorage.setItem("product_data", JSON.stringify(remove));
  handleReload();
}

const productTable = document.getElementById("item-list");

//Product Skeleton
function showProductTableSkeleton(rows, cols) {
  const rowCount = Number(rows) || 0;
  const colCount = Array.isArray(cols) ? cols.length : Number(cols) || 0;

  return Array.from({ length: rowCount }, (_, index) => {
    const cells = Array.from(
      { length: colCount },
      () => `<td><div class="skeleton skeleton-text"></div></td>`
    ).join("");

    return `
      <tr class="${index % 2 === 0 ? "tr-one" : "tr-two"}">
        <td><div class="skeleton skeleton-btn"></div></td>
        ${cells}
      </tr>
    `;
  }).join("");
}

function listProduct(list) {
  if (productTable) {
    let filterProduct = [];
    if (list) {
      filterProduct = product_data.filter((fi) => fi.c_id == list);
    } else {
      filterProduct = product_data;
    }
    productTable.innerHTML = showProductTableSkeleton(20, 7);

    // Load actual data after a delay
    setTimeout(() => {
      if (filterProduct.length > 0) {
        productTable.innerHTML = filterProduct
          .map(
            (mapData, index) => `
      <tr class="${index % 2 === 0 ? "tr-one" : "tr-two"}">
        <td>
          <button class="btn-red" onclick="removeProduct(${mapData.p_id})">
            <i class="bi bi-trash"></i>
          </button> 
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="productForEdit(${
            mapData.p_id
          })">
            <i class="bi bi-pencil"></i>
          </button>
        </td>
        <td>${mapData.product_name}</td>
        <td><img src="${mapData.img}" loading="lazy"/></td>
        <td>${mapData.weight}</td>
        <td>${mapData.stock}</td>
        <td>${mapData.mrp}</td>
        <td>${mapData.price}</td>
        <td>${mapData.description}</td>
      </tr>`
          )
          .join("");
      } else {
        productTable.innerHTML =
          "<tr><td colspan='8'><h4>Error 404: The requested data could not be found in the table.</h4></td></tr>";
      }
    }, 1000);
  }
}

listProduct(null);

const productSelect = document.getElementById("product-select");

if (productSelect) {
  productSelect.addEventListener("change", function () {
    const selectedValue = this.value;
    listProduct(selectedValue);
  });
}

let editProductId = null;

// Product Add modal Title
function modalTitle() {
  document.getElementById("modal-head").textContent = "Product Creation";
  editProductId = null;
}

const productCategory = document.getElementsByClassName("category-select");

// Product Category dynamic select
if (productCategory.length > 0) {
  const optionsHTML =
    `<option value="">---Select---</option>` +
    categories
      .map(
        (mapData) =>
          `<option value="${mapData.id}">${mapData.item_name}</option>`
      )
      .join("");

  Array.from(productCategory).forEach((selectEl) => {
    selectEl.innerHTML = optionsHTML;
  });
}

const formProduct = document.getElementById("product-add");

//Product Edit Handler Function
function productForEdit(pId) {
  const product = product_data.find((p) => p.p_id === pId);
  if (!product) return;

  document.getElementById("modal-head").textContent = "Edit Product";
  document.getElementById("c_id").value = product.c_id;
  document.getElementById("product_name").value = product.product_name;
  document.getElementById("img").value = product.img;
  document.getElementById("qty").value = product.weight;
  document.getElementById("mrp").value = product.mrp;
  document.getElementById("price").value = product.price;
  document.getElementById("stock").value = product.stock;
  document.getElementById("description").value = product.description;

  editProductId = pId; // switch to edit mode
}

// Handle Add / Edit
if (formProduct) {
  formProduct.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      p_id: editProductId
        ? editProductId
        : product_data.length
        ? product_data[product_data.length - 1].p_id + 1
        : 1,
      c_id: Number(document.getElementById("c_id").value.trim()),
      product_name: document.getElementById("product_name").value.trim(),
      img: document.getElementById("img").value.trim(),
      weight: document.getElementById("qty").value.trim(),
      mrp: parseFloat(document.getElementById("mrp").value) || 0,
      price: parseFloat(document.getElementById("price").value) || 0,
      stock: parseInt(document.getElementById("stock").value) || 0,
      description: document.getElementById("description").value.trim(),
    };

    if (editProductId) {
      // update
      const index = product_data.findIndex((p) => p.p_id === editProductId);
      if (index !== -1) product_data[index] = formData;
      editProductId = null;
    } else {
      // add new
      product_data.push(formData);
    }

    window.localStorage.setItem("product_data", JSON.stringify(product_data));
    setTimeout(() => window.location.reload(), 500);
  });
}

//Chart Data
const optionsChart = {
  series: [
    {
      name: "Actual Sell",
      type: "column",
      data: [
        448000, 500305, 550514, 658871, 675227, 785413, 798201, 814352, 865752,
        898320, 925257, 525880,
      ],
    },
    {
      name: "Expected Sell",
      type: "line",
      data: [40, 42, 45, 40, 43, 49, 45, 46, 46, 50, 55, 60],
    },
  ],
  chart: {
    height: 450,
    type: "line",
  },
  stroke: {
    width: [0, 4],
  },
  colors: ["#4caa26", "#11432b"], // First for bars, second for line
  title: {
    text: "Revenue",
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
  },
  labels: [
    "01 Jan 2001",
    "02 Jan 2001",
    "03 Jan 2001",
    "04 Jan 2001",
    "05 Jan 2001",
    "06 Jan 2001",
    "07 Jan 2001",
    "08 Jan 2001",
    "09 Jan 2001",
    "10 Jan 2001",
    "11 Jan 2001",
    "12 Jan 2001",
  ],
  yaxis: [
    {
      title: { text: "Actual Sell" },
    },
    {
      opposite: true,
      title: { text: "Expected Sell" },
    },
  ],
};

const chartId = document.getElementById("chart");
if (chartId) {
  var chart = new ApexCharts(chartId, optionsChart);
  chart.render();
}

const adminsignin = document.getElementById("admin-signin");

if (adminsignin) {
  adminsignin.addEventListener("submit", function (event) {
    event.preventDefault();

    const profile = {
      name: "Vegan Admin",
      userId: "admin@vegan-market.com",
      password: "pass@vegan",
    };

    const adminUserId = document.getElementById("admin-userid").value.trim();
    const adminPassword = document
      .getElementById("admin-password")
      .value.trim();

    if (adminUserId === profile.userId && adminPassword === profile.password) {
      window.localStorage.setItem("isAdminLoggedIn", true);
      Toastify({
        text: "✅ Welcome Back! " + profile.name,
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor: "#4caa26",
        close: true,
      }).showToast();

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 500);
    } else {
      Toastify({
        text: "❌ Wrong User ID or Password",
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor: "#fa6060ff",
        close: true,
      }).showToast();
    }
  });
}

// Function For Sign Out
function signOut() {
  window.localStorage.removeItem("isAdminLoggedIn");
  window.localStorage.removeItem("userLoggedIn");
  setTimeout(() => {
    handleReload();
  }, 500);
}

const signPage = document.getElementById("user-form");

//Function to switch sign up and Sign In
function handleSignAuth() {
  signPage.classList.toggle("reg-form");
}

const signUp = document.getElementById("user-signup");

// Sign Up form
if (signUp) {
  signUp.addEventListener("submit", function (event) {
    event.preventDefault();

    const userDetail = {
      user_name: document.getElementById("user_name").value.trim(),
      mobile: document.getElementById("mobile").value.trim(),
      email_id: document.getElementById("email_id").value.trim(),
      user_password: document.getElementById("user_password").value.trim(),
      address: document.getElementById("address").value.trim(),
      u_id: user_data.length ? user_data[user_data.length - 1].u_id + 1 : 1,
    };

    user_data.push(userDetail);
    window.localStorage.setItem("user_data", JSON.stringify(user_data));

    setTimeout(() => {
      handleReload();
    }, 500);
  });
}

const signIn = document.getElementById("user-signin");

//Sign In form
if (signIn) {
  signIn.addEventListener("submit", function (event) {
    event.preventDefault();

    const userId = document.getElementById("userid").value.trim();
    const userPassword = document.getElementById("user-password").value.trim();

    const findUser = user_data.find(
      (fi) => fi.email_id == userId && fi.user_password === userPassword
    );

    if (findUser) {
      window.localStorage.setItem("userLoggedIn", JSON.stringify(findUser));
      Toastify({
        text: "✅ Welcome Back! " + findUser.user_name,
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor: "#4caa26",
        close: true,
      }).showToast();

      setTimeout(() => {
        window.location.href = "index.html";
      }, 500);
    } else {
      Toastify({
        text: "❌ Wrong User ID or Password",
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor: "#fa6060ff",
        close: true,
      }).showToast();
    }
  });
}

const userAddress = document.getElementById("user-address");

if (userAddress) {
  userAddress.textContent = loged_user.address
    ? loged_user.address.slice(0, 20) + "..."
    : "Enter Your Adress...";
}

//Delete User
function removeUser(uid) {
  const remove = user_data.filter((fi) => fi.u_id != uid);
  window.localStorage.setItem("user_data", JSON.stringify(remove));
  handleReload();
}

const userTable = document.getElementById("user-list");

// All Users Data in Admin Table
if (userTable) {
  userTable.innerHTML = showProductTableSkeleton(20, 5);

  // Load actual data after a delay
  setTimeout(() => {
    userTable.innerHTML = user_data
      .map(
        (mapData, index) => `
      <tr class="${index % 2 === 0 ? "tr-one" : "tr-two"}">
        <td>
          <button class="btn-red" onclick="removeUser(${mapData.u_id})">
            <i class="bi bi-trash"></i>
          </button>
        </td>
        <td>${mapData.user_name}</td>
        <td>${mapData.email_id}</td>
        <td>${mapData.mobile}</td>
        <td>${mapData.user_password}</td>
        <td>${mapData.address}</td>
      </tr>`
      )
      .join("");
  }, 1200);
}

// For showing data to dashboard
if (pageName === "dashboard.html") {
  // ✅ Calculate total revenue properly
  const filterData = order_data.filter((fi) => fi.status != "Cancelled");
  const totalCalc = filterData.reduce((sum, order) => {
    return sum + Number(order.total || 0);
  }, 0);

  // ✅ Update DOM
  document.getElementById("total-products").textContent = product_data.length;
  document.getElementById("total-users").textContent = user_data.length;
  document.getElementById("total-orders").textContent = orders.length;
  document.getElementById("total-revenue").textContent =
    "₹" + totalCalc.toFixed(0);
}

let cartObj = {};

function generateRandom10Digit() {
  return Math.floor(100000000000 + Math.random() * 9045850000);
}

const cartContainer = document.getElementById("cart-container");
const summaryContainer = document.getElementById("summary-container");

function renderCart() {
  if (cartContainer) {
    // Ensure price is treated as a number
    let calc = myCart.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.qty),
      0
    );

    let shipping = calc > 0 && calc < 199 ? 60 : 0;
    // Total cost
    let total = calc + shipping;
    let subtotal = calc * 0.88;
    // GST calculation
    let gst = calc * 0.12;

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    cartObj = {
      orderDate: `${yyyy}-${mm}-${dd}`,
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2),
      status: "Pending",
      u_id: loged_user.u_id,
      address: loged_user.address,
      orderID: generateRandom10Digit(),
      item_id: myCart.map((mapD) => ({ p_id: mapD.p_id, qty: mapD.qty })),
    };

    // Left side (Products)
    if (myCart.length > 0) {
      cartContainer.innerHTML = myCart
        .map(
          (item) => `
        <div class="cart-product">
          <div class="product-img">
            <img src="${item.img}" alt="${item.product_name}" />
          </div>
          <div class="quantity">
            <h5>${item.product_name} ${item.weight} - ₹${item.price}</h5>
            <div class="q-controller">
              <button onclick="updateQty(${item.p_id}, -1)" ${
            item.qty === 1 ? "disabled" : ""
          }>-</button>
              <h6>${item.qty}</h6>
              <button onclick="updateQty(${item.p_id}, 1)" ${
            item.qty === item.stock ? "disabled" : ""
          }>+</button>
            </div>
          </div>
          <div class="product-price">
            <button onclick="removeItem(${item.p_id})">
              <i class="bi bi-x-square"></i>
            </button>
            <h5>₹${(Number(item.price) * Number(item.qty)).toFixed(2)}</h5>
          </div>
        </div>
      `
        )
        .join("");
    } else {
      cartContainer.innerHTML = `<h4 class="cart-message">Your cart is empty. Add products to begin your order.</h4>`;
    }

    // Right side (Summary)
    summaryContainer.innerHTML = `
        <h4>Summary</h4>
        <table>
          <tbody>
            <tr><td>Subtotal</td><td class="text-end">₹${subtotal.toFixed(
              2
            )}</td></tr>
            <tr><td>Shipping Charges</td><td class="text-end">₹${shipping.toFixed(
              2
            )}</td></tr>
            <tr class="border-bottom"><td>GST @ 12%</td><td class="text-end">₹${gst.toFixed(
              2
            )}</td></tr>
            <tr>
              <td class="py-4"><strong>Total</strong></td>
              <td class="text-end"><strong>₹${total.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
        <h6 class="mb-2">Payment Mode</h6>
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Card" checked>
  <label class="form-check-label" for="inlineRadio1">Card</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="UPI">
  <label class="form-check-label" for="inlineRadio2">UPI</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="COD">
  <label class="form-check-label" for="inlineRadio3">COD</label>
</div>
<button id="product-order" ${
      myCart.length === 0 ? "disabled" : ""
    }>Place Order</button>
    `;
  }
}

const handleSidebar = document.getElementById("handle-sidebar");
const sidebarID = document.getElementById("sidebar-div");

if (handleSidebar && sidebarID) {
  handleSidebar.addEventListener("click", function () {
    sidebarID.classList.toggle("active");
  });
}

function updateQty(id, change) {
  const product = myCart.find((p) => p.p_id === id);
  const ProductData = product_data.find((p) => p.p_id === id);
  if (!product || (ProductData.stock === product.qty && change === +1)) return;
  product.qty = Math.max(1, product.qty + change); // Prevent zero or negative
  window.localStorage.setItem("myCart", JSON.stringify(myCart));
  renderCart();
}

function removeItem(id) {
  const index = myCart.findIndex((p) => p.p_id === id);
  if (index > -1) {
    myCart.splice(index, 1);
    window.localStorage.setItem("myCart", JSON.stringify(myCart));
    renderCart();
  }
}

// Initial render
if (cartContainer) {
  renderCart();
}

const orderProduct = document.getElementById("product-order");

if (orderProduct) {
  orderProduct.addEventListener("click", function (e) {
    e.preventDefault();
    const selected = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    );
    if (selected) {
      cartObj.payment_mode = selected.value;
    }
    order_data.push(cartObj);
    window.localStorage.setItem("orders", JSON.stringify(order_data));
    window.localStorage.removeItem("myCart");

    // Minus product quantity
    cartObj.item_id.forEach((item) => {
      const findIndex = product_data.findIndex((fi) => fi.p_id === item.p_id);
      product_data[findIndex].stock =
        Number(product_data[findIndex].stock) - Number(item.qty);
    });

    // Update localStorage
    window.localStorage.setItem("product_data", JSON.stringify(product_data));

    Toastify({
      text: `Order Placed Successfully`,
      duration: 1000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4caa26",
      close: true,
    }).showToast();

    setTimeout(() => {
      window.location.href = "my-order.html";
    }, 1000);

    setTimeout(() => {
      handleReload();
    }, 1200);
  });
}

function removeOrder(oid) {
  const remove = order_data.filter((fi) => fi.orderID != oid);
  window.localStorage.setItem("orders", JSON.stringify(remove));
  handleReload();
}

const orderList = document.getElementById("order-list");

if (orderList) {
  orderList.innerHTML = showProductTableSkeleton(20, 12);

  // Load actual data after a delay
  setTimeout(() => {
    if (order_data.length > 0) {
      orderList.innerHTML = order_data
        .reverse()
        .map((mapData, index) => {
          const findUser = user_data.find((fi) => fi.u_id === mapData.u_id);
          return `
      <tr class="${index % 2 === 0 ? "tr-one" : "tr-two"}">
        <td>
          <button class="btn-red" onclick="removeOrder(${mapData.orderID})">
            <i class="bi bi-trash"></i>
          </button>
        </td>
        <td>${mapData.orderID}</td>
        <td>${mapData.orderDate}</td>
        <td>${mapData.item_id.length}</td>
        <td>${mapData.subtotal}</td>
        <td>${mapData.gst}</td>
        <td>${mapData.shipping}</td>
        <td>${mapData.total}</td>
        <td>${mapData.payment_mode}</td>
        <td>${mapData.status}</td>
        <td>${findUser.user_name}</td>
        <td>${findUser.email_id}</td>
        <td>${mapData.address}</td>
      </tr>`;
        })
        .join("");
    } else {
      orderList.innerHTML =
        "<tr><td colspan='8'><h4>Error 404: The requested data could not be found in the table.</h4></td></tr>";
    }
  }, 1200);
}

const myOrder = document.getElementById("my-order");

if (myOrder) {
  const findOrder = order_data.filter((fi) => fi.u_id == loged_user.u_id);
  myOrder.innerHTML = `
    <div class="col-12"><h2>My Order</h2></div>
    ${findOrder
      .map(
        (order) => `
      <div class="col-12">
        <div class="order-box">
          <div class="row">
            <div class="col-6">
              <h4>Order ID: <span>OD0010${order.orderID}</span></h4>
            </div>
            <div class="col-6 text-end">
              <h4>Status: <span>${order.status}</span></h4>
            </div>
            <div class="col-12 br"></div>
            <div class="col-3">
              <h6>Ordered On</h6>
              <h5>${order.orderDate}</h5>
            </div>
            <div class="col-4">
              <h6>Delivery Date</h6>
              <h5>${getExpectedDelivery(order.orderDate)}</h5>
            </div>
            <div class="col-3">
              <h6>Payment Mode</h6>
              <h5>${order.payment_mode}</h5>
            </div>
            <div class="col-2 text-end">
              <h6>Amount</h6>
              <h5>₹${order.total}</h5>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("")}
  `;
}

// helper function to add days to the orderDate
function getExpectedDelivery(orderDate) {
  const d = new Date(orderDate);
  d.setDate(d.getDate() + 2);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

const profileInfo = document.getElementById("profile-info");

if (profileInfo) {
  // Input fields
  const userNameInput = document.querySelector("#user_name");
  const mobileInput = document.querySelector("#mobile");
  const emailInput = document.querySelector("#email_id");
  const passwordInput = document.querySelector("#user_password");
  const addressInput = document.querySelector("#address");

  // Pre-fill values
  userNameInput.value = loged_user.user_name;
  mobileInput.value = loged_user.mobile;
  emailInput.value = loged_user.email_id;
  passwordInput.value = loged_user.user_password;
  addressInput.value = loged_user.address;

  // Submit listener
  profileInfo.addEventListener("submit", function (event) {
    event.preventDefault();

    const userData = {
      u_id: loged_user.u_id,
      user_name: userNameInput.value,
      mobile: mobileInput.value,
      email_id: emailInput.value,
      user_password: passwordInput.value,
      address: addressInput.value,
    };

    window.localStorage.setItem("userLoggedIn", JSON.stringify(userData));

    const findIndex = user_data.findIndex((fi) => fi.u_id === loged_user.u_id);
    user_data[findIndex] = { ...user_data[findIndex], ...userData };

    window.localStorage.setItem("user_data", JSON.stringify(user_data));

    // Toastify({
    //   text: `Profile Updated Successfully`,
    //   duration: 1000,
    //   gravity: "top",
    //   position: "right",
    //   backgroundColor: "#4caa26",
    //   close: true,
    // }).showToast();

    // setTimeout(() => {
    //   window.location.href = "index.html";
    // }, 1000);
  });
}
