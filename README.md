CampusTalks

CampusTalks appears to be a full-stack social / discussion platform for students where users can connect, share ideas, and interact within a campus community.
Think of it like a mini social network for college students 🎓

✨ Key Features

👤 User Authentication
     Secure login/signup using JWT
     User sessions handled via tokens
     Likely protected routes for authenticated users
💬 Social Interaction
    Users can create posts / discussions
    Interact via comments or replies
    Possibly like or react to content
🖼️ Media Uploads
    Image uploads supported via Cloudinary
    Users can attach images to posts or profiles
🧑‍🤝‍🧑 User Profiles
    Profile creation and customization
    View other users’ profiles
🌐 Real-Time / Dynamic UI
    Smooth frontend updates using React
    Likely uses API-based communication with backend
🔐 Environment-Based Configuration
    Uses .env for:
    Database credentials
    API keys
    Secrets (JWT, Cloudinary)
🛠️ Tech Stack & Technologies
    🎨 Frontend
        ⚛️ React
        ⚡ Vite
        🎯 JavaScript (ES6+)
        🎨 CSS (possibly Tailwind or custom styling)
    ⚙️ Backend
        🟢 Node.js
        🚂 Express.js
    🔹 Database
        🍃 MongoDB


### Setup .env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
