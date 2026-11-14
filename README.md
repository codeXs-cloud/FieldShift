# FieldShift 🌍🌱 
**Empowering Farmers with Climate-Resilient, Data-Driven Crop Rotations**

[![NASA Space Apps Challenge](https://img.shields.io/badge/NASA_Space_Apps-2026-005288?logo=nasa)](https://www.spaceappschallenge.org/) 
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/) 
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

FieldShift is a decision-support platform designed to help small-to-medium scale farmers adapt to changing environmental conditions. By synthesizing NASA Earth observation data with localized farm constraints, FieldShift generates **explainable, highly resilient crop-rotation scenarios** that prioritize soil health, water conservation, and climate adaptability.

---

## ⚠️ The Problem
Agriculture is on the front lines of climate change. Small-to-medium farmers face shifting weather patterns, depleting water tables, and degraded soil health. Traditional crop rotation planning relies heavily on historical precedent or guesswork, leaving farms vulnerable to unprecedented environmental stress. Farmers need accessible, localized, and forward-looking data to make confident decisions about what to plant next, but existing scientific tools are often too complex, expensive, or lack actionable insights.

## 💡 Our Solution
**FieldShift** bridges the gap between complex aerospace data and on-the-ground agricultural planning. 

Instead of acting as a "black box" that dictates what a farmer should do, FieldShift acts as a transparent advisory engine. The platform allows farmers to input their specific farm profile (soil type, water availability, primary goals) and drops a pin on an interactive map. FieldShift then matches this profile against live NASA climatology data to calculate suitability scores for various crop rotation strategies. 

**Key Features:**
*   **Explainable Scoring Engine:** Every rotation scenario is graded out of 100, broken down by Water Suitability, Soil Health, Climate Compatibility, and Priority Alignment. A "Why this score?" breakdown ensures complete transparency.
*   **Interactive Geolocation:** Farmers can pinpoint their exact farm using an integrated Leaflet map to fetch hyper-local data.
*   **Visual Analytics Dashboard:** Compares top scenarios side-by-side using responsive radar and bar charts for quick visual comprehension.
*   **Demo Mode:** A built-in offline fallback (featuring a demo farm in Araria, Bihar) ensures the platform remains fully functional even in low-bandwidth rural areas or during network outages.

---

## 🚀 NASA Data Integration
FieldShift is powered by the **NASA POWER (Prediction of Worldwide Energy Resources)** API, which provides solar and meteorological data sets derived from NASA Earth observation satellite capabilities.

When a user selects a location, our Next.js backend makes a server-side request to the NASA POWER Climatology endpoint (`/api/temporal/climatology/point`). 

We utilize the following specific Earth observation parameters tailored for the Agricultural (`AG`) community:
*   `T2M` **(Temperature at 2 Meters):** Evaluates baseline climate compatibility and heat-stress risks for specific crop sequences.
*   `PRECTOTCORR` **(Precipitation Corrected):** Analyzes historical rainfall averages to score the viability of water-intensive vs. drought-resistant crops.
*   `ALLSKY_SFC_SW_DWN` **(All Sky Surface Shortwave Downward Irradiance):** Measures solar radiation to determine photosynthetic potential and energy availability for crop growth phases.

This data is dynamically cross-referenced against our proprietary crop constraint matrix to generate the final rotation scores.

---

## 🛠️ Technical Architecture
*   **Frontend:** Next.js (App Router), React, Tailwind CSS (v3)
*   **Mapping:** Leaflet & React-Leaflet
*   **Data Visualization:** Recharts
*   **Backend / API:** Next.js Route Handlers
*   **Language:** TypeScript (Strict typing for data integrity)

---

## ⚙️ Local Setup & Installation

To run FieldShift locally on your machine for evaluation:

**1. Clone the repository**
```bash
git clone https://github.com/YourUsername/FieldShift.git
cd FieldShift
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure Environment Variables**
Copy the template file to create your local environment configuration:
```bash
cp .env.example .env.local
```
*(No private API keys are required to evaluate this prototype, as the NASA POWER climatology endpoint is open-access).*

**4. Start the Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Click **"Try Demo Farm"** to instantly test the end-to-end data pipeline and rendering engine.

---
*Developed for the NASA Space Apps Challenge 2026.*
