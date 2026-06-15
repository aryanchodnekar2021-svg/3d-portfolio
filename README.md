# 🌟 Aryan Chodnekar | Interactive 3D Developer Portfolio

An immersive, state-of-the-art 3D portfolio built with **React**, **Vite**, **TypeScript**, **Three.js**, **React Three Fiber (R3F)**, **Rapier Physics**, and **GSAP**. This portfolio showcasing skills, career timeline, and credentialed simulations is highly interactive, featuring physical collisions and real-time head-tracking animations.

---

## 🚀 Key Features & The "Core Magic"

This project goes beyond a standard portfolio website by utilizing advanced interactive WebGL techniques and client-side cryptography.

### 1. 🔐 Client-Side Cryptographic Asset Protection
To protect high-quality 3D proprietary assets from direct web scrapes, the character model file (`/public/models/character.enc`) is stored on the server as an encrypted binary blob.
* **Mechanism**: In `character.ts`, the application downloads the encrypted file and decrypts it on-the-fly inside the user's browser.
* **Encryption**: Employs the native Web Crypto API in `decrypt.ts` via `AES-CBC` with a 256-bit key derived through `SHA-256` using the password key `"MyCharacter12"`.

### 2. 👁️ Interactive 3D WebGL Scene & Real-Time Cursor Tracking
Instead of static loop animations, the character reacts directly to the client's screen movements.
* **Dynamic Bone Control**: In `Scene.tsx`, mouse coordinates (or touch events on mobile) map to Euler rotations that drive the target armature bone `spine006` via `mouseUtils.ts`.
* **Smoothed Motion**: Rotations use spherical linear interpolation (`lerp`) to ensure the character's head follows the visitor's cursor smoothly.

### 3. 🏌️ 3D Physics Tech Stack (Colliding Skills Golf Balls)
The tech stack list is represented as physical 3D spheres falling into the scene, which react dynamically to gravity and collision bounds.
* **Physics Engine**: Uses `@react-three/rapier` rigid bodies in `TechStack.tsx`.
* **Hexagonal Procedural Bump Mapping**: To create a realistic "golf ball" texture, a custom helper `createGolfBallBumpTexture` creates a Canvas radial gradient mapping dimples packed hexagonally in 2D space.
* **Dynamic Texture Blitting**: Individual skill names (e.g. *Data Analytics*, *Google Analytics*, *Project Management*) are written dynamically onto white canvas textures inside `createTextTexture` and mapped to standard R3F physical materials.
* **Kinematic Mouse Collider**: An invisible kinematic physics collider follows the mouse pointer, allowing users to move and scatter the skill spheres interactively.

### 4. 🎢 Smooth Scroll GSAP Timelines
Smooth scrolling and section transition effects are orchestrated using GSAP `ScrollTrigger` and CSS integrations.
* **Transitions**: In `GsapScroll.ts`, timelines are registered for the scroll heights.
* **Responsive Layouts**: Timelines dynamically adapt between desktop (which triggers camera zooms, model repositioning, and lighting shifts) and touch devices (which simplifies transitions to preserve GPU performance).

---

## 📁 Project Structure

The project has been organized modularly to decouple layout containers, custom rendering utilities, and style sheets:

```text
3d-portfolio/
├── public/                 # Static assets (3D model environments, placeholder images)
├── src/
│   ├── App.tsx             # Main React shell utilizing Suspense and LoadingProvider
│   ├── index.css           # Global typography definitions, layout metrics, and CSS variables
│   ├── context/
│   │   └── LoadingProvider.tsx # Global loading states for heavy GLTF / HDR asset compiling
│   ├── data/
│   │   └── boneData.ts     # Configuration metrics for skeletal rigging adjustments
│   ├── components/
│   │   ├── MainContainer.tsx # Core layout switcher handling resize detection and views
│   │   ├── Landing.tsx     # Home header greetings and hero text sections
│   │   ├── About.tsx       # Profile description card
│   │   ├── WhatIDo.tsx     # Interactive SVG card decks outlining professional areas
│   │   ├── Career.tsx      # Educational timeline tracker
│   │   ├── TechStack.tsx   # React Three Fiber canvas + Rapier physics simulations
│   │   ├── Work.tsx        # Slideshow project carousel linking credentials
│   │   ├── Contact.tsx     # Connect details and social links footer
│   │   ├── Character/      # 3D Model Rendering module
│   │   │   ├── Scene.tsx   # Three.js canvas setup, lighting triggers, and loop animations
│   │   │   └── utils/      # Character loaders, lighting configurations, and vector math helpers
│   │   └── styles/         # Discrete CSS files for each page component
```

---

## 🛠️ Tech Stack & Dependencies

* **Core Framework**: [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Dev Server**: [Vite 5](https://vite.dev/)
* **3D Graphics**:
  * [Three.js](https://threejs.org/) (WebGL Core Library)
  * [@react-three/fiber](https://r3f.docs.pmnd.rs/) (React wrapper for Three.js)
  * [@react-three/drei](https://github.com/pmndrs/drei) (Camera & Environment helpers)
* **Physics Simulation**: [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) (R3F bindings for Rapier)
* **Animation Suite**:
  * [GSAP](https://gsap.com/) (GreenSock Animation Platform)
  * `@gsap/react` (GSAP hooks for React lifecycle integration)
* **Icons**: `react-icons`

---

## ⚙️ Setup & Installation

Follow these steps to run the portfolio on your local machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/aryanchodnekar2021-svg/3D-Portfolio.git
cd 3D-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in Developer Mode
Start the Vite development server with host visibility enabled (allowing local network testing):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To generate a production-ready build bundle inside the `dist` folder:
```bash
npm run build
```

---

## 🎓 About the Developer
**Aryan Chodnekar** is a Computer Engineering Student pursuing a Bachelor of Technology (BTech) at Watumall Institute, University of Mumbai (Class of 2024–28). Specializing in software development, data analytics, and workflow automation, Aryan has successfully completed professional job simulations with Deloitte Australia, Tata, Siemens, and AWS.

* **GitHub**: [@aryanchodnekar2021-svg](https://github.com/aryanchodnekar2021-svg)
* **LinkedIn**: [Aryan Chodnekar](https://www.linkedin.com/in/aryan-chodnekar-0a58a02a8/)
