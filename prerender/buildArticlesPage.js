const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const navArticlesPath = path.join('../components', 'navArticles.html');
const articlesDataPath = path.join('../prerender', 'articlesData.json');
const articlesIndexPath = path.join('../articles', 'index.html');
const outputPath = path.join('../articles', 'index.html');

fs.readFile(navArticlesPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading navArticles.html:', err);
        return;
    }

    const $ = cheerio.load(data);

    const articles = [];
    $('ul li a').each((_, el) => {
        const image = $(el).data('image');
        const title = $(el).attr('aria-label');
        const url = $(el).attr('href');

        if (image && title && url) {
            articles.push({ title, image, url });
        }
    });

    const reversedArticles = articles.reverse();

    fs.writeFileSync(articlesDataPath, JSON.stringify(reversedArticles, null, 2), 'utf8');
    console.log('Articles data saved successfully to', articlesDataPath);

    fs.readFile(articlesIndexPath, 'utf8', (readErr, indexData) => {
        if (readErr) {
            console.error('Error reading index.html:', readErr);
            return;
        }

        const $index = cheerio.load(indexData);

        const existingGrid = $index('.responsive-grid');
        if (existingGrid.length) {
            existingGrid.remove();
            console.log('Existing .responsive-grid section removed.');
        }

        const newSection = $index('<section>').addClass('responsive-grid');
        reversedArticles.forEach((article) => {
            const item = $index('<div>').addClass('grid-item');
            const link = $index('<a>')
                .attr('href', article.url)
                .appendTo(item);
            $index('<img>')
                .attr('src', `../images/articles/${article.image}`)
                .attr('alt', '')
                .attr('aria-hidden', 'true')
                .appendTo(link);
            $index('<p>')
                .attr('aria-hidden', 'true')
                .text(article.title)
                .appendTo(item);
            newSection.append(item);
        });

        $index('.section-container').append(newSection);

        fs.writeFile(outputPath, $index.html(), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error saving updated index.html:', writeErr);
            } else {
                console.log('Updated index.html saved successfully to', outputPath);
            }
        });
    });
});
