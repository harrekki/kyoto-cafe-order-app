import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const menuArray = [
    {
        id: uuidv4(),
        name: 'Green Tea Latte',
        ingredients: ['matcha', 'soy milk', 'sugar'],
        price: 8,
        emoji: '🍵',
    },
    {
        id: uuidv4(),
        name: 'Boba Tea',
        ingredients: ['black tea', 'coconut milk', 'sugar', 'tapioca pearls' ],
        price: 10,
        emoji: '🧋',
    },
    {
        id: uuidv4(),
        name: 'Dango',
        ingredients: ['rice flour', 'azuki bean paste'],
        price: 6,
        emoji: '🍡',
    },
    {
        id: uuidv4(),
        name: 'Onigiri',
        ingredients: ['rice', 'nori', 'umeboshi', 'sesame seeds' ],
        price: 5,
        emoji: '🍙',
    }
]
