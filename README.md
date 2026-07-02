# 🎯 Cool Counsel - MP DTE Counselling Predictor (MERN Stack Project)

Cool Counsel is an innovative platform designed to simplify the MP DTE engineering counselling process.  
We use data-driven predictions to help aspiring engineers make informed decisions about their college choices — all with just a few clicks.

Our advanced algorithm analyzes previous years' data to provide accurate predictions, making your engineering college selection process easier and more efficient than ever before.

---

## ✨ Key Features

- ✔ **Accurate College Predictions**  
  Based on historical cutoff data.

- ✔ **User-Friendly Interface**  
  Designed for smooth navigation, even for beginners.

- ✔ **Comprehensive Database**  
  Covers MP’s top engineering colleges and branches.

- ✔ **Personalized Recommendations**  
  Tailored suggestions based on your individual preferences.

- ✔ **Real-time Updates**  
  Regular updates with the latest MP DTE counselling information.

---

## 🛡️ How Simple is Cool Counsel?

**Extremely simple.**  
We designed Cool Counsel with one focus: **making college prediction effortless.**

You don't need to manually check cutoff lists or fill complicated forms.

Instead:
1. **Enter** your basic details (score, category, preferences).
2. **Click** submit.
3. **Get** instant personalized college recommendations.

✅ **No confusion. No delays. Just accurate predictions.**

---

## 🌐  Links

- **Frontend GitHub Repository**: [Frontend Repo](https://github.com/CoolSidOfficial/mp-dte-Counsel)
- **Backend GitHub Repository**: [Backend Repo](https://github.com/CoolSidOfficial/counsel-backend)
- **Live Project**: [http://coolcounsel.me/](http://coolcounsel.me/)

---

## 🛠️ Technology Stack

- **Frontend**: React.js, Axios, Helmet, FontAwesome, React Router
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), dotenv, CORS
- **Hosting**: Netlify (Frontend) + Vercel (Backend)

---

## ⚙️ Setup Instructions

### Install Node.js and npm

> Node.js is required to run the project.

1. Download Node.js:
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Recommended)** version.
   - Install it.

2. Check installation:
   ```bash
   node -v
   npm -v
 ## ⚙️ Clone Repositories
 ### Frontend:
    git clone https://github.com/CoolSidOfficial/mp-dte-Counsel
### Backend:

     git clone https://github.com/CoolSidOfficial/counsel-backend

## Install Frontend Dependencies
         cd frontend-folder-name
         npm install
### Frontend Dependencies:
  ```
     {
  "@fortawesome/fontawesome-svg-core": "^6.7.2",
  "@fortawesome/free-solid-svg-icons": "^6.7.2",
  "@fortawesome/react-fontawesome": "^0.2.2",
  "axios": "^1.7.7",
  "helmet": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet": "^6.1.0",
  "react-router-dom": "^6.23.1"
} 
```
### Install Backend Dependencies
```
cd backend-folder-name
npm install
```
### Backend Dependencies:
```
{
  "body-parser": "^1.20.2",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "mongoose": "^8.4.3",
  "nodemon": "^3.1.7"
}
```

## 🚀 Running the Project Locally
 ## Start Backend
 ```
 cd backend-folder-name
npm run dev
```
##  Start Frontend
```
cd frontend-folder-name
npm start
```

## 🔮 How Cool Counsel Predictor Works
Student Inputs: Score, preferred branch, category, etc.

Processing: Matches input against historical cutoff datasets.

Prediction: Displays probable seat allotments/college options.

Personalization: Filters based on student's preferences.

It mimics the real DTE counselling process, ensuring reliable and personalized results.

### 🌍 Production Deployment
## Frontend - Netlify
Build frontend:

```
npm run build
```
[1] Go to Netlify, create an account.

Deploy the build/ folder or directly connect your GitHub frontend repository.

Setup custom domain:

Add your domain in Netlify Domain Settings.

Update your domain's DNS records accordingly.


## Backend - Render
Go to Render, create an account.

Create a new Web Service:

Connect your GitHub backend repository.

```
npm install
```
Set start command:
```
npm run dev
```
Set up Environment Variables in Render:


Deploy!





## 👨‍💻 Author
Name: Siddhant Jain

GitHub: [https://github.com/CoolSidOfficial]

📢 Important Notes
Always secure your environment variables.

Use HTTPS and security headers (Helmet.js).

Monitor backend service usage on Render.

Regularly update project dependencies for security.


