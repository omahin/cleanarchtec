import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config';

export const app = express();
app.use(express.json());

//instancia de dependencias e rota aqui
const { bookController } = configureDependencies();
app.post('/books', (req, res) => bookController.create(req, res));
app.get('/books', (req, res) => bookController.listAll(req, res));


if (require.main === module) {
  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
}