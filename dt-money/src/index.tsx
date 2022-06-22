import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({

  models: {

    transaction: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'FreeLancer de Web Site',
          type: 'deposit',
          category: 'Dev',
          amount: 9000,
          createdAt: new Date('2022-04-07 09:00:14'),
        }, 
        {
          id: 2,
          title: 'Aluguel Casa',
          type: 'withdraw',
          category: 'Casa',
          amount: 850,
          createdAt: new Date('2022-05-07 10:00:14'),
        }
      ],
    })
  },


  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
