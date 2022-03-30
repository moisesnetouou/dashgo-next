/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from 'miragejs';
import faker from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      // quais dados quero armazenar no bd ficticio
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      // gerar dados em massa
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(serverSeeds) {
      serverSeeds.createList('user', 200);
    },

    routes() {
      // padrão de integração de mirage com next
      this.namespace = 'api';
      this.timing = 750; // delay

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        // 10 - 20
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          {
            'x-total-count': String(total),
          },
          { users }
        );
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = ''; // para não prejudicar a api route do next
      this.passthrough(); // tudo que foi passado pela api, passa pelo mirage.
    },
  });

  return server;
}
