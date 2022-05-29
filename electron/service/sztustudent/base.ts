import got from 'got';

const baseGot = {
  get: got.extend({
    method: 'GET',
    prefixUrl: 'https://net.print.sztulives.cn/',
    https: {
      rejectUnauthorized: false,
    },
    headers: {
      referer: 'wx5886ee7aa3cfd39a',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    },
  }),
  post: got.extend({
    method: 'POST',
    prefixUrl: 'https://net.print.sztulives.cn/',
    https: {
      rejectUnauthorized: false,
    },
    headers: {
      referer: 'wx5886ee7aa3cfd39a',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }),
};

export { baseGot };
