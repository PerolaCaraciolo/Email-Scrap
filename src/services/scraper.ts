import axios from 'axios';
import * as cheerio from 'cheerio';

interface SignoData {
  nome: string;
  previsao: string;
  imgUrl?: string;
}

export async function scrapeHoroscope(): Promise<SignoData[]> {
  const base = 'https://joaobidu.com.br';
  const { data: html } = await axios.get(`${base}/horoscopo-do-dia/`);
  const $ = cheerio.load(html);

  const signos: { nome: string, href: string }[] = [];
  $('section._container-signs a').each((_, el) => {
    const nome = $(el).find('img').attr('alt')?.trim() || $(el).text().trim();
    const href = $(el).attr('href')!;
    if (nome && href) signos.push({ nome, href: base + href });
  });

  const results: SignoData[] = [];
  for (const s of signos) {
    try {
      const { data: htmlSign } = await axios.get(s.href);
      const $$ = cheerio.load(htmlSign);
      const text = $$('.col-12 > p').first().text().trim();
      results.push({ nome: s.nome, previsao: text || 'Sem previsão disponível.' });
    } catch {
      results.push({ nome: s.nome, previsao: 'Não foi possível obter a previsão hoje.' });
    }
  }

  return results;
}