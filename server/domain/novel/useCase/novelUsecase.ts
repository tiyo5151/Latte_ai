import { load } from 'cheerio';

import { decode } from 'iconv-lite';
import { transaction } from 'service/prismaClient';

export const novelUseCase = {
  scrape: (aozoraUrl: string): Promise<string> =>
    transaction('RepeatableRead', async (tx) => {
      const buffer = await fetch(aozoraUrl).then((b) => b.arrayBuffer());

      const html = decode(Buffer.from(buffer),'UTF-8');
      const $ = load(html);
      return $('body').text();
    }),
};
