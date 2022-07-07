// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const {getAllBreweries} = require('./db');

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 4000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

fastify.get('/api/breweries',  async (req, res) => {
   let results = await getAllBreweries(req, res);

   console.log("RESULTS:", results)
   return results;
    // .then((brew) => 
    // {
    //   console.log("hitting the endpoint", brew)
    // res.status(200).send(brew)
    // }
    // )
    // .catch((err) => {
    //   console.error(err);
    //   res.status(500).send('UNABLE TO GET BREWERIES');
    // });
});

// console.log(getAllBreweries)

// fastify.get('/*', (req, res) => res.sendFile('index.html'));
