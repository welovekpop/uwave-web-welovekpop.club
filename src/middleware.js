import * as path from 'path';
import * as defaultFs from 'fs';
import trumpet from 'trumpet';
import router from 'router';
import serveStatic from 'connect-gzip-static';

function injectConfig(transform, config) {
  transform.select('#u-wave-config')
    .createWriteStream()
    .end(JSON.stringify(config));
}

function injectTitle(transform, title) {
  transform.select('title')
    .createWriteStream()
    .end(title);
}

function injectResetKey(transform, key) {
  transform.select('#reset-data')
    .createWriteStream()
    .end(key);
}

export default function uwaveWebClient(uw, options = {}) {
  const {
    basePath = path.join(__dirname, '../public'),
    fs = defaultFs, // Should only be used by the dev server.
    title = 'üWave',
    ...clientOptions
  } = options;

  const clientRouter = router();

  const mobile = (req, res) => {
    const transform = trumpet();
    injectTitle(transform, title);
    injectConfig(transform, clientOptions);

    fs.createReadStream(path.join(basePath, 'm.html'), 'utf8')
      .pipe(transform)
      .pipe(res);
  };

  return clientRouter
    .get('/', (req, res) => {
      const transform = trumpet();
      injectTitle(transform, title);
      injectConfig(transform, clientOptions);

      fs.createReadStream(path.join(basePath, 'index.html'), 'utf8')
        .pipe(transform)
        .pipe(res);
    })
    .get('/reset/:key', (req, res) => {
      const transform = trumpet();
      injectTitle(transform, title);
      injectConfig(transform, { apiUrl: clientOptions.apiUrl });
      injectResetKey(transform, req.params.key);

      fs.createReadStream(path.join(basePath, 'password-reset.html'), 'utf8')
        .pipe(transform)
        .pipe(res);
    })
    .get('/m', mobile)
    .get('/m.html', mobile)
    .get('/u-wave-web-config.json', (req, res) => {
      res.json(clientOptions);
    })
    .use(serveStatic(basePath));
}
