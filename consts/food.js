import niceColors from 'nice-color-palettes';
const { faker } = require('@faker-js/faker');

export const ORAGE = '#FB9B06';
const data = [
    'Soup',
    'Salad',
    'Rice', 
    'Sushi', 
    'Spagetti',
    'Pizza','Burger', 
    'PanCake', 
    'Cheese', 
    'Ramen', 
    'Steak', 
    'Ice Cream', 
    'Fish', 
    'Roast Chiken'];

const colors = niceColors[1];
export const tabs = [
    'Today',
    'Breakfast',
    'Milk',
    'Tea',
    'Coffe',
    'Drinks'
];

export default data.map((item, index) => ({
    ...item,
    key: faker.datatype.uuid(),
    subType: faker.commerce.ProductDescription,
    color: `${colors[index % colors.length]}66`,
    fullColor: colors[index% colors.length],
    description: [...Array(2).keys()].map(faker.commerce.productDescription).join('. '),
    price: `$${(faker.datatype.number({min: 10, max: 50}) + 50) / 100}`,
    subCategories: faker.helpers.shuffle(data).slice(0.3)
}));

export const popularFood = faker.helpers.shuffle(data).map((item) => ({
    ...item,
    key: faker.datatype.uuid(),
    rating: faker.datatype.number({min: 10, max: 50}) / 10,
    price: `$${(faker.datatype.number({min: 10, max: 50}))/ 100}`
}))
