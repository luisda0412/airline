const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Para hashear contraseñas
require('dotenv').config();

const app = express();

// Middleware para parsear JSON
app.use(cors()); 
app.use(express.json());

//CONECTAR CON MONGODB, LA URI ESTA EN EL .ENV
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Error al conectar a MongoDB', err));

//MODELO DE USUARIO, CON LOS ATRIBUTOS DEL MISMO
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

//PARA AGREGAR EL SCHEMA A MONGO
const User = mongoose.model('User', userSchema);

//RUTA PARA REGISTRAR LOS USUARIOS
app.post('/api/register', async (req, res) => {
  const { username, password, name, lastname, email, birthdate, direction, phone } = req.body;

  try {
    //HASHEAR LA CLAVE MEDIANTE LA LIBRERIA BCRYPT
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword, //ACA SE GUARDA LA CLAVE HASHEADA
      name,
      lastname,
      email,
      birthdate,
      direction,
      phone
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error registrando usuario' });
  }
});

//RUTA PARA EL LOGIN
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    //BUSCA AL USUARIO POR EL EMAIL
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    //COMPARA LA CLAVE ENVIADA CON LA ALMACENADA EN LA BASE DE DATOS
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
    }

    //SI EL LOGIN ES EXITOSO
    res.json({ success: true, message: 'Login exitoso', user: user._id }); // Aquí puedes devolver un token si es necesario
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

//RUTA PRINCIPAL
app.get('/', (req, res) => {
  res.send('Hola');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
