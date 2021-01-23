import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as basketRoutes from './routes/basket';

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(basketRoutes);

app.listen(port, () => console.info(`Listening on port: ${port}`));
