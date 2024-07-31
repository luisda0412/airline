const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el paquete CORS
require('dotenv').config();

const app = express();

// Middleware para parsear JSON
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Error al conectar a MongoDB', err));

// Modelo de Usuario
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  lastname: String,
  email: String,
  birthdate: Date,
  direction: String,
  phone: String
});

const User = mongoose.model('User', userSchema);

// Ruta para el registro
app.post('/api/register', async (req, res) => {
  const { username, password, name, lastname, email, birthdate, direction, phone } = req.body;

  const newUser = new User({ username, password, name, lastname, email, birthdate, direction, phone });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error registrando usuario' });
  }
});

app.get('/', (req, res) => {
  res.send('Hola');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
