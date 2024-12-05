# **COVID-19 tracker web application**

## Description:

# COVID-19 Tracking App

A web application providing real-time data on the progress of COVID-19 worldwide, along with important information about the virus and protective measures.

## Motivation

This project was born out of the necessity to consolidate data from multiple health ministry websites for France, Switzerland, and Morocco into a single platform. It aims to simplify access to COVID-19 statistics and resources for users globally.

## Features

- **Real-Time Statistics:** Retrieves live data on COVID-19 cases, recoveries, and deaths worldwide using an open-source API.
- **Educational Content:** Provides information sourced from the WHO about COVID-19 transmission and prevention.

## Tech Stack

- **Frontend:** Next.js, React
- **Styling:** Sass, CSS
- **Testing:** Cypress, Jest
- **API:** [Corona Ninja API](https://corona.lmao.ninja)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BrahimS/covid-19-tracking-app.git
   cd covid-19-tracking-app
   ```
2. Install dependencies:
   ```bash
		npm install
   ```
3. Run the development server:
 	```bash
		npm run dev
  	```
4. Visit the app at http://localhost:3000.

Live Demo
Check out the live version of the [app](https://covid19-bs.vercel.app/about)

## Sources:

- Home page content is comming from the [WHO](https://www.who.int/)
- Stats page, the real time data is provided by this open source [API](https://corona.lmao.ninja/)

![homepage](https://raw.githubusercontent.com/BrahimS/covid-19-tracking-app/master/public/images/homepage.png)
![statspage](https://raw.githubusercontent.com/BrahimS/covid-19-tracking-app/master/public/images/statsPage.png)
