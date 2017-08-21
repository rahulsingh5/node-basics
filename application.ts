import * as express from 'express';
import { MongoClient } from 'mongodb';

import * as assert from 'assert';

import { config } from './config';

const app = express();

MongoClient.connect(`mongodb:${config.mongodbURL}/${config.dbName}`, (error: any, db: any) => {
    assert.equal(null, error);

    console.log(`Application Server connected to ${config.dbName} database`);
});

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});