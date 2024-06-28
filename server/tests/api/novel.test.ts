
import { expect, test } from 'vitest';
import { createUserClient, noCookieClient } from './apiClient';
import { DELETE, GET, POST } from './utils';

test(GET(noCookieClient), async () => {

  const res = await noCookieClient.novel.$get();
  expect(res).toEqual('Hello');
});

test(POST(noCookieClient.novel), async () => {
  const aozoraUrl = 'abc';
  const res = await noCookieClient.novel.post({ body: { aozoraUrl } });

  expect(res ).toEqual(aozoraUrl);
});
