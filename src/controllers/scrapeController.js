const { scrapeWebsiteService } = require('../services/scrapeService');

async function getScrapedData(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({
            status: 'error',
            message: 'Falta el parámetro requerido "url" en la query de la petición.'
        });
    }

    try {
        new URL(url);
    } catch (urlError) {
        return res.status(400).json({
            status: 'error',
            message: 'La URL proporcionada no tiene un formato válido (ejemplo: https://news.ycombinator.com).'
        });
    }

    try {
        const data = await scrapeWebsiteService(url);
        
        return res.status(200).json({
            status: 'success',
            targetUrl: url,
            totalExtraido: data.length,
            resultados: data
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message || 'Ocurrió un error interno al procesar el scraping.'
        });
    }
}

module.exports = { getScrapedData };