const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Para cargar variables de entorno (API key)

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ejemplo de datos de cursos (esto podría venir de una base de datos)
const cursosData = [
    { nombre: 'Desarrollo Web Full-Stack', descripcionCorta: 'Construye aplicaciones web completas.', caracteristicas: ['Frontend y Backend', 'React, Node.js', 'Bases de Datos'] },
    { nombre: 'Ciencia de Datos con Python', descripcionCorta: 'Analiza datos y crea modelos predictivos.', caracteristicas: ['Python para Data Science', 'Pandas, NumPy', 'Machine Learning'] },
    // ... otros cursos
];

app.get('/api/cursos', (req, res) => {
    res.json(cursosData);
});

app.post('/api/ia/pregunta', async (req, res) => {
    const pregunta = req.body.pregunta;
    console.log('Pregunta recibida por la IA:', pregunta);

    // Aquí iría la lógica para comunicarse con la API de la IA (OpenAI, Google, etc.)
    // Ejemplo con OpenAI (requiere la biblioteca 'openai' y tu API key en .env)
    const { OpenAI } = require('openai');
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Elige el modelo adecuado
            messages: [
                { role: "system", content: "Eres un asistente virtual experto en nuestros cursos de sistemas. Responde de forma concisa y profesional." },
                { role: "user", content: pregunta },
            ],
        });
        const respuesta = completion.choices[0].message.content;
        res.json({ respuesta: respuesta });
    } catch (error) {
        console.error('Error al comunicarse con OpenAI:', error);
        res.status(500).json({ error: 'Error al obtener respuesta de la IA' });
    }
});

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});