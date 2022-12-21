const menu = [
  {
    name: "Pringles Scorchin' BBQ",
    brand: "Pringles",
    price: 2.5,
    Spicy: "yes",
    glutenFree: "no",
    image:
      "http://cdn.shopify.com/s/files/1/0570/8401/8858/products/image_28c5dc07-2ee2-4a91-b086-4e2ccd9e6466.jpg?v=1633571250",
  },
  {
    name: "Pringles Pizza",
    brand: "Pringles",
    price: 2.5,
    Spicy: "no",
    glutenFree: "no",
    image:
      "https://www.coltrades.com/27402-large_default/pringles-potato-crisps-chips-pizza-flavored-5-5-oz.jpg",
  },
  {
    name: "Pringles Sour Cream & Onion",
    brand: "Pringles",
    price: 2.5,
    Spicy: "no",
    glutenFree: "no",
    image:
      "https://cdn.shopify.com/s/files/1/0270/6410/7107/products/Screen-Shot-2019-11-07-at-5.36.10-PM_600x.gif?v=1583644473",
  },
  {
    name: "Pringles Cheddar Cheese",
    brand: "Pringles",
    price: 2.5,
    Spicy: "no",
    glutenFree: "no",
    image:
      "https://cdn.shopify.com/s/files/1/0270/6410/7107/products/Screen-Shot-2019-11-07-at-5.41.49-PM_600x.gif?v=1583644470",
  },
  {
    name: "Pringles Buffalo Ranch",
    brand: "Pringles",
    price: 2.5,
    Spicy: "yes",
    glutenFree: "no",
    image:
      "https://assets3.thrillist.com/v1/image/2734402/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg",
  },
  {
    name: "Garden Veggie Straws Zesty Ranch",
    brand: "Garden Veggie Straws",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://storage.googleapis.com/images-sof-prd-9fa6b8b.sof.prd.v8.commerce.mi9cloud.com/product-images/zoom/00829515324629.jpg",
  },
  {
    name: "Garden Veggie Straws Sea Salt",
    brand: "Garden Veggie Straws",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://i5.walmartimages.com/asr/30e6420e-375b-440b-b96c-f9ca1e62a5d8_2.dc15f183bce615b16a77628292835f2d.jpeg",
  },
  {
    name: "Garden Veggie Straws Screamin' Hot",
    brand: "Garden Veggie Straws",
    price: 2.5,
    Spicy: "yes",
    glutenFree: "yes",
    image:
      "https://i5.walmartimages.com/asr/2ddb8047-87ce-47f7-92ab-adb9ec5e98c4.7f7d5341ebcffb41877abb0af80df07b.jpeg",
  },
  {
    name: "Garden Veggie Straws Cheddar Cheese",
    brand: "Garden Veggie Straws",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_1000,h_1000,f_auto/v1548183625/969442.jpg",
  },
  {
    name: "Garden Veggie Straws Wavy Cheddar Sour Cream",
    brand: "Garden Veggie Straws",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image: "https://bjs.scene7.com/is/image/bjs/299363?$bjs-Zoom$",
  },
  {
    name: "Garden Veggie Straws Sour Cream & Onion",
    brand: "Garden Veggie Straws",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://storage.googleapis.com/images-cub-prd-9400d55.cub.prd.v8.commerce.mi9cloud.com/product-images/zoom/7cf18055-cb06-4b58-93e9-f0c3a88f4064.jpeg",
  },
  {
    name: "Garden Veggie Straws BBQ",
    brand: "Garden Veggie Straws",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://m.media-amazon.com/images/I/51L7PwQwWnL._QL92_SH45_SS200_.jpg",
  },
  {
    name: "UTZ Red Hot Potato Chips",
    brand: "UTZ",
    price: 1.5,
    Spicy: "yes",
    glutenFree: "yes",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41mYK1LF5eL._AC_UL600_SR600,600_.jpg",
  },
  {
    name: "UTZ Salt'n Vinegar",
    brand: "UTZ",
    price: 1.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://images.freshop.com/00041780271839/8f35c05e75977acda415808ec8459a65_large.png",
  },
  {
    name: "UTZ Original Potato Chips",
    brand: "UTZ",
    price: 1.5,
    Spicy: "no",
    glutenFree: "yes",
    image: "https://i5.peapod.com/c/UU/UUVIC.jpg",
  },
  {
    name: "UTZ Ripples Original Potato Chips",
    brand: "UTZ",
    price: 1.5,
    Spicy: "no",
    glutenFree: "yes",
    image: "https://m.media-amazon.com/images/I/71vMXtyzXYL.jpg",
  },
  {
    name: "UTZ Honey Barbeque Potato Chips",
    brand: "UTZ",
    price: 1.5,
    Spicy: "no",
    glutenFree: "yes",
    image: "https://m.media-amazon.com/images/I/71wowfRarVL.jpg",
  },
  {
    name: "Takis Zombie",
    brand: "Takis",
    price: 3,
    Spicy: "yes",
    glutenFree: "no",
    image:
      "https://images.albertsons-media.com/is/image/ABS/960180967?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
  },
  {
    name: "Takis Outlaw Hors-La-Loi BBQ",
    brand: "Takis",
    price: 3,
    Spicy: "yes",
    glutenFree: "no",
    image:
      "https://external-preview.redd.it/XXPcJ6F2kz5WGApbQtg_gwaKsNxCZC4jO4AhW1d0D0c.jpg?auto=webp&s=8fa2660fb3f791bc006999fb5db41525c69080a0",
  },
  {
    name: "Takis Nitro Explosion",
    brand: "Takis",
    price: 3,
    Spicy: "yes",
    glutenFree: "no",
    image: "https://m.media-amazon.com/images/I/81-nMJ2IWFS.jpg",
  },
  {
    name: "Takis Crunchy Fajitas",
    brand: "Takis",
    price: 3,
    Spicy: "yes",
    glutenFree: "no",
    image: "https://www.kroger.com/product/images/large/front/0075752800881",
  },
  {
    name: "Takis Fuego",
    brand: "Takis",
    price: 3,
    Spicy: "yes",
    glutenFree: "no",
    image: "https://m.media-amazon.com/images/I/81pMPY3jVrS.jpg",
  },
  {
    name: "Takis Blue Heat",
    brand: "Takis",
    price: 3,
    Spicy: "yes",
    glutenFree: "no",
    image: "https://m.media-amazon.com/images/I/71vV-9RoiQL.jpg",
  },
  {
    name: "Takis Dragon Sweet Chili",
    brand: "Takis",
    price: 3,
    Spicy: "yes",
    glutenFree: "no",
    image:
      "https://s.cornershopapp.com/product-images/4598176.jpg?versionId=UH9fY4almB2PBRywfEiUO.wimZFrAzbV",
  },
  {
    name: "Lay's Classic",
    brand: "Lay's",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://www.lays.com/sites/lays.com/files/2020-11/lays-Classic-small.jpg",
  },
  {
    name: "Lay's Flamin' Hot",
    brand: "Lay's",
    price: 2.5,
    Spicy: "yes",
    glutenFree: "yes",
    image:
      "https://www.lays.com/sites/lays.com/files/2022-05/XL%20Lays%20Flamin%20Hot%20New.png",
  },
  {
    name: "Lay's Barbecue",
    brand: "Lay's",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image: "https://www.lays.com/sites/lays.com/files/2020-11/lays-bbq.jpg",
  },
  {
    name: "Lay's Cheddar Bacon Mac & Cheese",
    brand: "Lay's",
    price: 2.5,
    Spicy: "no",
    glutenFree: "yes",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/lays-cheddar-bacon-mac-and-cheese-chips-square-1574093719.jpg?resize=480:*",
  },
  {
    name: "Lay's Spanish Tomato Tango",
    brand: "Lay's",
    price: 2.5,
    Spicy: "yes",
    glutenFree: "yes",
    image:
      "https://i5.walmartimages.com/asr/ec0e9c3c-d567-4a0d-9445-24a2a2688704_1.654e0fe1bfcc31a2a7c2a263c9ae490e.jpeg",
  },
  {
    name: "Lay's Game Day Chili",
    brand: "Lay's",
    price: 2.5,
    Spicy: "yes",
    glutenFree: "yes",
    image:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00028400532815/601176e86d4a8d7e205d8811ad0e6028_large.png&width=512&type=webp&quality=90",
  },
  {
    name: "Pringles Prawn Cocktail",
    brand: "Pringles",
    price: 2.5,
    Spicy: "no",
    glutenFree: "no",
    image: "https://m.media-amazon.com/images/I/61k1jZw2wiL.jpg",
  },
  {
    name: "Pringles Grilled Shrimp",
    brand: "Pringles",
    price: 2.5,
    Spicy: "no",
    glutenFree: "no",
    image:
      "https://i.pinimg.com/originals/7b/82/43/7b8243af3948c8e03373efa3768331e5.jpg",
  },
];

export { menu };
