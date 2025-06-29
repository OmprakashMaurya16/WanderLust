const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?...",
      filename: "listingimage",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "686012e37fe063e86b9f2847",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?...",
      filename: "listingimage",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "686013047fe063e86b9f284f",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?...",
    price: 1000,
    location: "Aspen",
    country: "United States",
    owner: "6860131e7fe063e86b9f2857",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?...",
    price: 2500,
    location: "Florence",
    country: "Italy",
    owner: "686013397fe063e86b9f285f",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...",
    price: 800,
    location: "Portland",
    country: "United States",
    owner: "686013537fe063e86b9f2867",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    owner: "686013687fe063e86b9f286f",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner: "686012e37fe063e86b9f2847",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?...",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    owner: "686012e37fe063e86b9f2847",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    owner: "686013047fe063e86b9f284f",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?...",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    owner: "6860131e7fe063e86b9f2857",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?...",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    owner: "686013397fe063e86b9f285f",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?...",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    owner: "686013537fe063e86b9f2867",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?...",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    owner: "686013687fe063e86b9f286f",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?...",
    price: 2200,
    location: "Boston",
    country: "United States",
    owner: "686013687fe063e86b9f286f",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: "https://images.unsplash.com/photo-1602391833977-358a52198938?...",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    owner: "686012e37fe063e86b9f2847",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?...",
    price: 1500,
    location: "Banff",
    country: "Canada",
    owner: "686013047fe063e86b9f284f",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:
      "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?...",
    price: 1600,
    location: "Miami",
    country: "United States",
    owner: "6860131e7fe063e86b9f2857",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?...",
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    owner: "686013397fe063e86b9f285f",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?...",
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    owner: "686013537fe063e86b9f2867",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?...",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    owner: "686013687fe063e86b9f286f",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?...",
    price: 1100,
    location: "Montana",
    country: "United States",
    owner: "686013687fe063e86b9f286f",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?...",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    owner: "686012e37fe063e86b9f2847",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?...",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: "686013047fe063e86b9f284f",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?...",
    price: 1600,
    location: "Charleston",
    country: "United States",
    owner: "6860131e7fe063e86b9f2857",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?...",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    owner: "686013397fe063e86b9f285f",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?...",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    owner: "686013537fe063e86b9f2867",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?...",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    owner: "686013687fe063e86b9f286f",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?...",
    price: 4000,
    location: "Aspen",
    country: "United States",
    owner: "686012e37fe063e86b9f2847",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?...",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: "686012e37fe063e86b9f2847",
  },
];

module.exports = { data: sampleListings };
