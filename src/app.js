const express = require('express');
const scrapeRoutes = require('./routes/scrapeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1', scrapeRoutes);
 
app.use((req, res) => {
    res.status(404).json({ status: 'error', message: 'Ruta no encontrada en el backend.' });
});

app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(` Servidor Backend Express + Cheerio Iniciado `);
    console.log(` Probando Endpoint en: http://localhost:${PORT}/api/v1/scrape `);
    console.log(`===================================================`);
});