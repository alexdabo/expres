const express = require('express')
const pkg = require('./package.json')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`
	<!DOCTYPE html>
  <html>

    <head>
        <meta charset='UTF-8'>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>${process.env.APP_TITLE || 'Sin titulo'}</title>
    </head>

    <body>
        <section class="w-screen h-screen flex items-center justify-center">
          <header class=" shadow-md rounded-md bg-blue-500 p-4">
              <a href="/app" class="font-bold text-white">
                Hello Heroku and docker app
              </a>
          </header>
        </section>
    </body>
  </html>
  `);
})

app.get('/app', (req, res) => {
  res.send({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    environment: {
      title: process.env.APP_TITLE || null,
      database: process.env.DATABASE_TYPE || null,
    }
  })
})
app.listen(port, () => {
  console.log('\x1b[32m\x1b[2mApp listening\x1b[0m');
  console.log(`\x1b[32mPort:\x1b[0m ${port}`);
})
