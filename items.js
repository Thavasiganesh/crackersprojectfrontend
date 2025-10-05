const comboItems = {
    "5000": [
        { name: "30 Short", quantity: 1, price: 480 },
        { name: "Peacock", quantity: 1, price: 220 },
        { name: "Paper Bomb 1/2", quantity: 1, price: 180 },
        { name: "2 Inch Pipe 3 Pcs", quantity: 1, price: 400 },
        { name: "Lotus Wheel", quantity: 1, price: 180 },
        { name: "Guitar", quantity: 1, price: 280 },
        { name: "Bijili", quantity: 2, price: 60 },
        { name: "Pocket Lunik", quantity: 1, price: 140 },
        { name: "Twirling Star", quantity: 1, price: 80 },
        { name: "Chakar Delux", quantity: 1, price: 150 },
        { name: "Big", quantity: 1, price: 80 },
        { name: "Ashoka", quantity: 1, price: 150 },
        { name: "Dose Wheel", quantity: 1, price: 60 },
        { name: "Ground Chakar Big", quantity: 1, price: 80 },
        { name: "Photo Flash", quantity: 1, price: 180 },
        { name: "Money Bank", quantity: 1, price: 300 },
        { name: "30", quantity: 5, price: 200 },
        { name: "15", quantity: 5, price: 200 },
        { name: "10", quantity: 8, price: 60 },
        { name: "7 cm", quantity: 1, price: 90 },
        { name: "Bad", quantity: 1, price: 100 },
        { name: "5 in One Fountain", quantity: 1, price: 250 },
        { name: "Tin", quantity: 1, price: 150 },
        { name: "Angry Bird", quantity: 1, price: 50 },
        { name: "Lakshmi", quantity: 1, price: 30 },
        { name: "Lakshmi 3 1/2", quantity: 1, price: 25 },
        { name: "Surabhiman", quantity: 1, price: 80 },
        { name: "Parrot", quantity: 2, price: 180 },
        { name: "Bullet Bomb", quantity: 1, price: 40 },
        { name: "King Bullet", quantity: 1, price: 80 },
        { name: "Anaconda", quantity: 1, price: 100 },
        { name: "20 Watts", quantity: 1, price: 180 },
        { name: "Ground", quantity: 1, price: 150 },
        { name: "Junk Rocket", quantity: 1, price: 120 },
        { name: "Selfie Delight", quantity: 1, price: 70 },
        { name: "Kiss Kat", quantity: 1, price: 40 },
        { name: "Electronic", quantity: 1, price: 30 },
        { name: "100 Wala", quantity: 1, price: 60 },
        { name: "1/4 Paper Bomb", quantity: 1, price: 60 },
        { name: "28 Gaini", quantity: 1, price: 70 },
        { name: "Pipe Gun", quantity: 1, price: 50 },
        { name: "5 Star", quantity: 1, price: 80 },
        { name: "Lampa", quantity: 1, price: 100 },
        { name: "Rao Wala", quantity: 1, price: 80 }
    ],
    "3000": [
        { name: "1 Shot", quantity: 1, price: 0 },
        { name: "Ground Chakar", quantity: 1, price: 0 },
        { name: "Chakar Special", quantity: 1, price: 0 },
        { name: "Lakshmi Big", quantity: 2, price: 0 },
        { name: "Lakshmi Small", quantity: 2, price: 0 },
        { name: "Laddy", quantity: 1, price: 0 },
        { name: "Sakthiman", quantity: 1, price: 0 },
        { name: "Classic Bomb", quantity: 1, price: 0 },
        { name: "Sky Queen", quantity: 1, price: 0 },
        { name: "Flower Pot Big", quantity: 1, price: 0 },
        { name: "Samba 5 in 1", quantity: 1, price: 0 },
        { name: "Kuruvi Small", quantity: 5, price: 0 },
        { name: "Kuruvi Big", quantity: 1, price: 0 },
        { name: "Tin", quantity: 1, price: 0 },
        { name: "1/4 Paper", quantity: 1, price: 0 },
        { name: "5 Star", quantity: 1, price: 0 },
        { name: "Angry Bird", quantity: 1, price: 0 },
        { name: "Bullet (King)", quantity: 1, price: 0 },
        { name: "Bullet Bomb", quantity: 1, price: 0 },
        { name: "Flower Special", quantity: 1, price: 0 },
        { name: "Dico", quantity: 1, price: 0 },
        { name: "Helicopter", quantity: 1, price: 0 },
        { name: "Lunik Rocket", quantity: 1, price: 0 },
        { name: "Selfy Delight", quantity: 1, price: 0 },
        { name: "Kit Kat", quantity: 2, price: 0 },
        { name: "Electric Stone", quantity: 2, price: 0 },
        { name: "Bijli", quantity: 2, price: 0 },
        { name: "7 cm", quantity: 5, price: 0 },
        { name: "10 cm", quantity: 2, price: 0 },
        { name: "15", quantity: 2, price: 0 },
        { name: "30", quantity: 8, price: 0 },
        { name: "Twinkling Star", quantity: 1, price: 0 },
        { name: "50 Shots", quantity: 1, price: 0 }
    ]
};

function getComboItemsByProduct(comboName) {

    // Extract number from combo name (e.g., "5000 Combo" -> "5000")
    
    if (comboName.name.includes('5000'))
    {
        return comboItems["5000"];
    }
    else
        return comboItems["3000"];
}