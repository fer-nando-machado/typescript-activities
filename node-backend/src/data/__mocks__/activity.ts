export const fetchActivities = jest.fn(() => [
  {
    id: 1,
    title: "City Tour",
    price: 100,
    currency: "$",
    rating: 4,
    specialOffer: false,
    supplierId: 100,
  },
  {
    id: 2,
    title: "Museum Ticket",
    price: 20,
    currency: "¥",
    rating: 4.5,
    specialOffer: true,
    supplierId: 200,
  },
  {
    id: 3,
    title: "Nature Tour",
    price: 150,
    currency: "€",
    rating: 5,
    specialOffer: true,
    supplierId: 100,
  },
]);
