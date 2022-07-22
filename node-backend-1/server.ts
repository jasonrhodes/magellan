import './init-apm';
import Fastify from 'fastify';
import cors from 'fastify-cors';

const fastify = Fastify({
  logger: true
});

fastify.register(cors, {
  origin: true // allow all cross-origin requests
});

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

fastify.get('/api', function (request, reply) {
  reply.send({ hello: 'world' });
});

fastify.listen(process.env.PORT || 3000, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});