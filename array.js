const products = [
    { name: "Apple iPhone 15", category: "Electronics", price: 1099, ratings: 4.8 },
    { name: "Samsung Galaxy S24", category: "Electronics", price: 999, ratings: 4.7 },
    { name: "Sony WH-1000XM5", category: "Audio", price: 399, ratings: 4.9 },
    { name: "Bose QuietComfort 45", category: "Audio", price: 329, ratings: 4.8 },
    { name: "HP Pavilion Laptop", category: "Computers", price: 950, ratings: 4.6 },
    { name: "Dell XPS 13", category: "Computers", price: 1199, ratings: 4.8 },
    { name: "MacBook Air M3", category: "Computers", price: 1299, ratings: 4.9 },
    { name: "Logitech MX Master 3S", category: "Accessories", price: 120, ratings: 4.8 },
    { name: "Apple Magic Keyboard", category: "Accessories", price: 99, ratings: 4.5 },
    { name: "Canon EOS R10", category: "Cameras", price: 1099, ratings: 4.7 },
    { name: "Nikon Z50", category: "Cameras", price: 999, ratings: 4.6 },
    { name: "GoPro HERO12", category: "Cameras", price: 499, ratings: 4.8 },
    { name: "Fitbit Charge 6", category: "Wearables", price: 159, ratings: 4.4 },
    { name: "Apple Watch Series 9", category: "Wearables", price: 399, ratings: 4.8 },
    { name: "Garmin Forerunner 255", category: "Wearables", price: 349, ratings: 4.7 },
    { name: "Nike Air Zoom Pegasus", category: "Footwear", price: 130, ratings: 4.6 },
    { name: "Adidas Ultraboost 22", category: "Footwear", price: 180, ratings: 4.7 },
    { name: "Puma Running Shoes", category: "Footwear", price: 110, ratings: 4.5 },
    { name: "Levi’s Denim Jacket", category: "Clothing", price: 89, ratings: 4.3 },
    { name: "H&M Cotton Hoodie", category: "Clothing", price: 45, ratings: 4.2 },
    { name: "Zara Slim Fit Shirt", category: "Clothing", price: 59, ratings: 4.4 },
    { name: "Uniqlo Jeans", category: "Clothing", price: 49, ratings: 4.5 },
    { name: "Ray-Ban Aviator Sunglasses", category: "Fashion", price: 160, ratings: 4.5 },
    { name: "Casio G-Shock Watch", category: "Fashion", price: 120, ratings: 4.6 },
    { name: "Michael Kors Handbag", category: "Fashion", price: 250, ratings: 4.7 },
    { name: "Instant Pot Duo 7-in-1", category: "Home Appliances", price: 99, ratings: 4.6 },
    { name: "Dyson V15 Vacuum", category: "Home Appliances", price: 699, ratings: 4.9 },
    { name: "Philips Air Fryer", category: "Home Appliances", price: 199, ratings: 4.7 },
    { name: "KitchenAid Stand Mixer", category: "Home Appliances", price: 379, ratings: 4.8 },
    { name: "Sony 4K Smart TV", category: "Electronics", price: 899, ratings: 4.7 },
    { name: "LG OLED Evo TV", category: "Electronics", price: 1499, ratings: 4.9 },
    { name: "TCL Roku TV", category: "Electronics", price: 449, ratings: 4.5 },
    { name: "JBL Flip 6 Speaker", category: "Audio", price: 129, ratings: 4.6 },
    { name: "Anker Soundcore Boost", category: "Audio", price: 99, ratings: 4.5 },
    { name: "Beats Studio Pro", category: "Audio", price: 349, ratings: 4.7 },
    { name: "Razer Gaming Mouse", category: "Gaming", price: 89, ratings: 4.6 },
    { name: "Corsair Mechanical Keyboard", category: "Gaming", price: 139, ratings: 4.7 },
    { name: "PlayStation 5", category: "Gaming", price: 499, ratings: 4.9 },
    { name: "Xbox Series X", category: "Gaming", price: 499, ratings: 4.8 },
    { name: "Nintendo Switch OLED", category: "Gaming", price: 349, ratings: 4.8 },
    { name: "Razer Kraken Headset", category: "Gaming", price: 99, ratings: 4.5 },
    { name: "Asus ROG Gaming Laptop", category: "Computers", price: 1599, ratings: 4.8 },
    { name: "Acer Nitro 5", category: "Computers", price: 1099, ratings: 4.6 },
    { name: "Apple iPad Pro 12.9", category: "Tablets", price: 1199, ratings: 4.8 },
    { name: "Samsung Galaxy Tab S9", category: "Tablets", price: 999, ratings: 4.7 },
    { name: "Amazon Kindle Paperwhite", category: "Tablets", price: 149, ratings: 4.6 },
    { name: "DJI Mini 4 Drone", category: "Cameras", price: 799, ratings: 4.9 },
    { name: "Google Nest Thermostat", category: "Smart Home", price: 129, ratings: 4.5 },
    { name: "Ring Video Doorbell", category: "Smart Home", price: 99, ratings: 4.6 },
    { name: "Philips Hue Lightstrip", category: "Smart Home", price: 79, ratings: 4.4 },
    { name: "Ecovacs Deebot Vacuum", category: "Smart Home", price: 499, ratings: 4.7 }
];


// * Output => top 3 electronic products Name

//todo:- filter
//todo:- sort
//todo:- slice
//todo:- map

const topGamingProducts = products.filter(item => item.category === 'Gaming')
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3)
    .map(item =>{
        return { name : item.name}
    })

console.log(topGamingProducts);


