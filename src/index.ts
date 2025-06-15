
import { scrapeHoroscope } from './services/scraper';
import { sendEmail } from './services/emailSender';

async function run() {
    try {
        const content = await scrapeHoroscope();
        await sendEmail(content);
    } catch (error) {
        console.error('Erro ao executar o boletim:', error);
    }
}

run();
