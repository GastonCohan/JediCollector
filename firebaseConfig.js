import { initializeApp } from "firebase/app";
import "firebase/auth"; // Importa el módulo de autenticación

const firebaseConfig = {
  apiKey: "AIzaSyANM3qzob0DEAmI-evkiE-Y_pq9RuDhmEs",
  authDomain: "jedicollector-1797e.firebaseapp.com",
  projectId: "jedicollector-1797e",
  storageBucket: "jedicollector-1797e.appspot.com",
  messagingSenderId: "431102349591",
  appId: "1:431102349591:web:ca9a952d63df0006c46752",
  measurementId: "G-RE8J24JL7W",
};

const app = initializeApp(firebaseConfig);

console.log(app);

export default app; // Exporta la instancia de la aplicación
