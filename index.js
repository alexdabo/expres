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
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <script src='https://unpkg.com/babel-standalone@6.26.0/babel.js'></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <title>hello</title>
</head>

<body>
    <div id='root'></div>

    <script type='text/babel'>
       
        function App() {     
            return (
                    <section className="w-screen h-screen flex items-center justify-center">
                        <header className=" shadow-md rounded-md bg-blue-500 p-4">
                            <a href="/app">
                              <h1 className="font-bold text-white">Hello Heroku and docker app</h1>
                            </a>
                        </header>
                    </section>
            )
        }


        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
  `);
})

app.get('/app', (req, res) => {
  res.send({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  })
})
app.listen(port, () => {
  console.log('\x1b[32m\x1b[2mApp listening\x1b[0m');
  console.log(`\x1b[32mPort:\x1b[0m ${port}`);
})
