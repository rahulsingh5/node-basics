import * as express from 'express';
import { Request, Response } from 'express';

import { config } from './config';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from express js');
});

app.use((req: Request, res: Response) => {
    res.sendStatus(404);
});

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});