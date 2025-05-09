export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 250000.5, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 0,
    photo: 'pathToFile.jpg',
    title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
];
export const orders = [
  {
    id: 1,
    title: 'Order 1 Длинное предлинное длиннючее название заказа',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 2,
    title: 'Order 2 Длиннючее название заказа',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 3,
    title: 'Order 3 Длинное предлинное название заказа',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
];
