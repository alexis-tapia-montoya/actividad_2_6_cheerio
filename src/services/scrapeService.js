const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsiteService(url) {
        const response = await axios.get(url, { timeout: 5000 });
    const html = response.data;

       if (!html || html.trim() === '') {
        throw new Error('El contenido HTML de la URL está vacío.');
    }

        const $ = cheerio.load(html);
    const resultados = [];
            $('.athing').each((index, element) => {
        if (index >= 5) return false; 

               const titulo = $(element).find('.titleline > a').text().trim();
        
                const enlace = $(element).find('.titleline > a').attr('href');
        
                const idPost = $(element).attr('id');

        if (titulo && enlace) {
            resultados.push({
                ranking: index + 1,
                idPost: idPost || 'N/A',
                titulo: titulo,
                enlace: enlace.startsWith('http') ? enlace : `https://news.ycombinator.com/${enlace}`
            });
        }
    });

        if (resultados.length === 0) {
        throw new Error('No se encontraron elementos con los selectores CSS definidos en esta página.');
    }

    return resultados;
}

module.exports = { scrapeWebsiteService };