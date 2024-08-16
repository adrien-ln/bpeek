import axios from 'axios';
import * as cheerio from 'cheerio';

import puppeteer from 'puppeteer';

const EuropePlayersURL = 'https://liquipedia.net/counterstrike/Portal:Players/Europe'; 

/**
 * Fonction pour extraire les noms des joueurs français de la page Liquipedia.
 * @param {string} url - L'URL de la page Liquipedia à analyser.
 * @return {Promise<string[]>} - Un tableau contenant les pseudos des joueurs français.
 * @throws {Error} - Si une erreur se produit lors de l'extraction des joueurs.
 */
async function extractFrenchPlayers(url) {
    // Lancer le navigateur
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Aller à la page Liquipedia
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Attendre que le tableau contenant les joueurs soit visible
    await page.waitForSelector('.wikitable.collapsible');

    // Extraire les joueurs entre les lignes contenant "France" et "Germany"
    const frenchPlayers = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('.wikitable.collapsible tbody tr'));
        let inFranceSection = false;
        let players = [];

        rows.forEach(row => {
            const header = row.querySelector('th');
            const cell = row.querySelector('td');

            if (header && header.textContent.includes('France')) {
                inFranceSection = true;
            } else if (header && header.textContent.includes('Germany')) {
                inFranceSection = false;
            }

            if (inFranceSection && cell) {
                players.push(cell.textContent.trim());
            }
        });

        return players;
    });


    await browser.close();
    return frenchPlayers;
}

// Fonction pour extraire les informations
async function fetchPlayerInfo(playerName) {
    try {
        // Obtenir l'ID de la page
        const queryUrl = `https://liquipedia.net/counterstrike/api.php?action=query&titles=${playerName}&format=json`;
        const queryResponse = await axios.get(queryUrl);
        const pageId = Object.keys(queryResponse.data.query.pages)[0];

        // Obtenir le contenu de la page
        const parseUrl = `https://liquipedia.net/counterstrike/api.php?action=parse&pageid=${pageId}&prop=text&format=json`;
        const parseResponse = await axios.get(parseUrl);
        const html = parseResponse.data.parse.text['*'];

        // Charger le HTML avec cheerio
        const $ = cheerio.load(html);
        const infoboxes = $('.fo-nttax-infobox');
        const playerInfo = {};

        infoboxes.each((index, element) => {
            const title = $(element).find('div').text().trim();
            const value = $(element).find('div').next().text().trim();
            playerInfo[title] = value;
        });

        return playerInfo;

    } catch (error) {
        console.error('Erreur lors de la récupération des informations :', error);
    }
}

// Exemple d'utilisation
fetchPlayerInfo('ZywOo').then(info => {
    console.log('Informations du joueur :', info);
});
