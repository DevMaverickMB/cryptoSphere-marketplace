# Cryptosphere Marketplace

![Cryptosphere Marketplace](https://cryptosphere-marketplace.netlify.app/favicon.ico)

## 📌 Overview
**Cryptosphere Marketplace** is a powerful cryptocurrency tracking platform designed for enthusiasts, traders, and investors. The application provides real-time price updates, interactive historical charts, and market insights for various cryptocurrencies. Users can seamlessly switch between different currencies (USD, EUR, INR) and analyze trends with visually appealing data representations.

🔗 **Live Demo:** [Cryptosphere Marketplace](https://cryptosphere-marketplace.netlify.app)

---

## 🚀 Features
- 📈 **Live Cryptocurrency Prices**: Get real-time price updates for various cryptocurrencies.
- 📊 **Interactive Charts**: View historical data with visual charts.
- 💱 **Currency Conversion**: Switch between USD, EUR, and INR seamlessly.
- 🔍 **Search Functionality**: Easily find cryptocurrencies by name.
- 📡 **API Integration**: Fetches data from the CoinGecko API.

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, React Router
- **State Management:** React Context API
- **Styling:** CSS
- **Data Source:** CoinGecko API

---

## 🌍 Deployment
This project is deployed on **Netlify**.
To deploy manually:
1. Build the project:
   ```sh
   npm run build
   ```
2. Upload the `dist` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.).

---

## 📌 API Usage
This project uses the **CoinGecko API** to fetch cryptocurrency data. If you want to use a different API key, modify the API key in the `CoinContext` file:

```js
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "YOUR_API_KEY_HERE",
  },
};
```

(You can replace `YOUR_API_KEY_HERE` with your own key from [CoinGecko](https://www.coingecko.com/)).

---

## 🤝 Contributing
Pull requests are welcome! If you'd like to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

---

## 📜 License
This project is copyright @2025.

---

## 👨‍💻 Author
**Your Name**  
🚀 Portfolio: [Your Portfolio Link]  
🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)  
📧 Email: your@email.com

Feel free to modify and personalize it as needed!

