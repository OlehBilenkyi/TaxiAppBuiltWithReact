import { useState } from "react";

// Динамически импортируем все изображения для новостей
const teslaModelS = new URL('../../../assets/images/news/tesla-model-s.jpg', import.meta.url).href;
const teslaInterior = new URL('../assets/images/news/tesla-interior.jpg', import.meta.url).href;
const teslaDashboard = new URL('../assets/images/news/tesla-dashboard.jpg', import.meta.url).href;
const toyotaCorolla = new URL('../assets/images/news/toyota-corolla.jpg', import.meta.url).href;
const toyotaInterior = new URL('../assets/images/news/toyota-interior.jpg', import.meta.url).href;
const toyotaEngine = new URL('../assets/images/news/toyota-engine.jpg', import.meta.url).href;
const carFleet = new URL('../assets/images/news/car-fleet.jpg', import.meta.url).href;
const bmwX5 = new URL('../assets/images/news/bmw-x5.jpg', import.meta.url).href;
const toyotaCamry = new URL('../assets/images/news/toyota-camry.jpg', import.meta.url).href;
const fordExplorer = new URL('../assets/images/news/ford-explorer.jpg', import.meta.url).href;
const rentalTerms = new URL('../assets/images/news/rental-terms.jpg', import.meta.url).href;
const rentalBenefits = new URL('../assets/images/news/rental-benefits.jpg', import.meta.url).href;
const corporateRental = new URL('../assets/images/news/corporate-rental.jpg', import.meta.url).href;
const winterDiscounts = new URL('../assets/images/news/winter-discounts.jpg', import.meta.url).href;
const subaruOutback = new URL('../assets/images/news/subaru-outback.jpg', import.meta.url).href;
const audiQ5 = new URL('../assets/images/news/audi-q5.jpg', import.meta.url).href;
const volvoXC90 = new URL('../assets/images/news/volvo-xc90.jpg', import.meta.url).href;
const mobileApp = new URL('../assets/images/news/mobile-app.jpg', import.meta.url).href;
const appScreenshots1 = new URL('../assets/images/news/app-screenshots-1.jpg', import.meta.url).href;
const appScreenshots2 = new URL('../assets/images/news/app-screenshots-2.jpg', import.meta.url).href;
export const useNewsData = () => {
  const [news] = useState([
    {
      id: 1,
      title: "New car available!",
      type: "new",
      tags: ["electric cars", "premium"],
      content: "A new car has arrived in our fleet: Tesla Model S 2025.",
      date: "01.03.2025",
      image: teslaModelS,
      fullContent: [
        "Tesla Model S 2025 with a range of up to 650 km. The new design and improved features make it one of the best electric cars on the market.",
        "Key features:",
        "- Level 3 autonomous driving mode",
        "- Acceleration 0-100 km/h in 2.3 seconds",
        "- Maximum speed 320 km/h",
        "- Updated multimedia system with voice control",
        "Available colors: black, white, blue, red.",
      ],
      gallery: [teslaInterior, teslaDashboard],
    },
    {
      id: 2,
      title: "Reduced rental price for Toyota Corolla",
      type: "promotion",
      tags: ["economical", "popular"],
      content: "Renting the popular Toyota Corolla has become even more affordable.",
      date: "25.02.2025",
      image: toyotaCorolla,
      fullContent: [
        "Toyota Corolla - a reliable and economical car that is perfect for city trips and long journeys.",
        "New rental conditions:",
        "- Price from 15 €/day",
        "- Long-term rental with a 20% discount",
        "- Free insurance for rentals from 7 days",
        "Technical specifications:",
        "- Fuel consumption: 6.5 l/100 km",
        "- Trunk volume: 470 l",
        "- Equipment: climate control, rear-view camera, Apple CarPlay/Android Auto",
      ],
      gallery: [toyotaInterior, toyotaEngine],
    },
    {
      id: 3,
      title: "Fleet expansion",
      type: "new",
      tags: ["variety", "new models"],
      content: "We have added 10 new cars of various classes for your comfort.",
      date: "15.02.2025",
      image: carFleet,
      fullContent: [
        "The new cars include sedans, SUVs, and hybrids to meet any needs of our customers.",
        "Among the new models:",
        "- BMW X5: spacious and comfortable SUV",
        "- Toyota Camry Hybrid: economical and eco-friendly sedan",
        "- Ford Explorer: powerful and reliable SUV for the whole family",
        "All cars undergo thorough inspection before being added to the fleet.",
      ],
      gallery: [bmwX5, toyotaCamry, fordExplorer],
    },
    {
      id: 4,
      title: "New rental conditions",
      type: "promotion",
      tags: ["flexibility", "long-term rental"],
      content: "We present new flexible rental conditions for long-term customers.",
      date: "10.02.2025",
      image: rentalTerms,
      fullContent: [
        "Now you can rent a car for a period from one day to several months with favorable conditions and discounts.",
        "Benefits of long-term rental:",
        "- Discounts up to 30% for rentals from 1 month",
        "- Free maintenance and insurance",
        "- Possibility to replace the car once a month",
        "Special conditions for corporate clients.",
      ],
      gallery: [rentalBenefits, corporateRental],
    },
    {
      id: 5,
      title: "Seasonal discounts",
      type: "promotion",
      tags: ["winter offers", "all-wheel drive"],
      content: "Special winter offers for renting all-wheel drive cars.",
      date: "05.02.2025",
      image: winterDiscounts,
      fullContent: [
        "In winter, we offer special discounts on renting all-wheel drive cars to make your trips safe and comfortable.",
        "Winter offers:",
        "- Discounts up to 25% on SUV rentals",
        "- Free winter tires and equipment",
        "- Special conditions for rentals at ski resorts",
        "Popular models: Subaru Outback, Audi Q5, Volvo XC90.",
      ],
      gallery: [subaruOutback, audiQ5, volvoXC90],
    },
    {
      id: 6,
      title: "Mobile app update",
      type: "new",
      tags: ["technology", "convenience"],
      content: "Our app has become even more convenient! Try the new version today.",
      date: "28.01.2025",
      image: mobileApp,
      fullContent: [
        "The new version of our mobile app offers an improved interface and additional features for convenient rental management.",
        "New features:",
        "- Simplified booking process",
        "- Integration with calendar and reminders",
        "- Online chat with customer support",
        "- Real-time car status tracking",
        "The app is available for download on the App Store and Google Play.",
      ],
      gallery: [appScreenshots1, appScreenshots2],
    },
  ]);

  return { news };
};