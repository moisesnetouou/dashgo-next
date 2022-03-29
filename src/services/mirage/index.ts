/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      // quais dados quero armazenar no bd ficticio
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      // padrão de integração de mirage com next
      this.namespace = 'api';
      this.timing = 750; // delay

      this.get('/users');
      this.post('/users');

      this.namespace = ''; // para não prejudicar a api route do next
      this.passthrough(); // tudo que foi passado pela api, passa pelo mirage.
    },
  });

  return server;
}
