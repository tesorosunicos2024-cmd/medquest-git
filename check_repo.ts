import https from 'https';

const options = {
  hostname: 'api.github.com',
  path: '/repos/clinupads-lab/medquest',
  headers: {
    'User-Agent': 'NodeJS-Agent'
  }
};

https.get(options, (res) => {
  console.log('Status Code:', res.statusCode);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (res.statusCode === 200) {
        console.log('Repository is accessible! Name:', json.name);
        console.log('Default Branch:', json.default_branch);
      } else {
        console.log('Access failed with message:', json.message);
      }
    } catch (e) {
      console.log('Error parsing response:', data.substring(0, 500));
    }
  });
}).on('error', (e) => {
  console.error(e);
});
