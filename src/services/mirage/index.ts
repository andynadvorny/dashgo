import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(100)
        },
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750 //simulates delay to validade loaders 

      this.get('/users')
      this.post('/users')

      this.namespace = '' //resets namespace after usage
      this.passthrough()
    }
  })

  return server
}