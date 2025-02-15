import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//Application Routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome To Niviora!');
});

export default app;
