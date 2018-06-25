const fetchListings = () => {
  const listings = {
    cards: [
      {
        id: "27",
        cardUrl: "/gift-cards/target-25022",
        imageAlt: "Buy Target Gift Card",
        imageUrl:
          "https://d1bdtegf36y35u.cloudfront.net/assets/product-sources/1/small/target-gift-card.png?1441748095",
        name: "Target",
        cardTypes: [
          {
            content: "eGfit",
            toolTip: "Electronic delivery for online use only"
          }
        ],
        value: "$100.00",
        price: "$87.93",
        cardId: "27",
        delivery: [],
        details: [],
        terms: []
      },
      {
        id: "26",
        cardUrl: "/gift-cards/target-25070",
        imageAlt: "Buy Target Gift Card",
        imageUrl:
          "https://d1bdtegf36y35u.cloudfront.net/assets/product-sources/1/small/target-gift-card.png?1441748095",
        name: "Target",
        cardTypes: [
          {
            content: "eGfit",
            toolTip: "Electronic delivery for online use only"
          }
        ],
        value: "$120.00",
        price: "$87.93",
        cardId: "26",
        delivery: [],
        details: [],
        terms: []
      },
      {
        id: "26",
        cardUrl: "/gift-cards/target-25010",
        imageAlt: "Buy Target Gift Card",
        imageUrl:
          "https://d1bdtegf36y35u.cloudfront.net/assets/product-sources/1/small/target-gift-card.png?1441748095",
        name: "Target",
        cardTypes: [
          {
            content: "eGfit",
            toolTip: "Electronic delivery for online use only"
          }
        ],
        value: "$110.00",
        price: "$87.93",
        cardId: "26",
        delivery: [],
        details: [],
        terms: []
      }
    ],
    subtotal: "$175.86",
    totalPrice: "$175.86",
    savings: "-$24.14",
    totalValue: "$200.00"
  };

  if (Math.random() > 0.8) {
    Promise.reject(Error("Error fetching card listings"));
  } else {
    return Promise.resolve(listings);
  }
};

export default fetchListings;
