import * as express from 'express';
import { MongoClient } from 'mongodb';

import * as assert from 'assert';

import { config } from './config';

const app = express();

MongoClient.connect(`mongodb:${config.mongodbURL}/${config.dbName}`, (error: any, db: any) => {
    assert.equal(null, error);

    console.log(`Application Server connected to ${config.dbName} database`);
    db.collection('movies').find({}).toArray((error: any, docs: any) => {

        if (docs.length === 0) {
            console.log('There is no documents found');
            db.close();
            return;
        }

        docs.forEach((doc: any) => {
            console.log(`The movie title is ${doc.title}`);
        });

        db.close();
    });

    console.log(`Called find() for movies`);
});

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});