const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
};

// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_ROOT_USERNAME
} = process.env;

// "mongodb": "mongodb://admin_user:password123@localhost:27017/my_database?authSource=admin"
const dbConnectionURL = {
  'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
  "test_db": `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
};

// Connect to db.
mongoose.connect(dbConnectionURL.test_db, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));

db.once('open', () => {
    // we're connected !
    console.log('Mongodb Connection Successful');
    console.log('==========================================');
    console.log('CONN URL -> ', dbConnectionURL.test_db)
    console.log('==========================================');
    console.log('MONGO_HOSTNAME ', MONGO_HOSTNAME);
    console.log('MONGO_DB ', MONGO_DB);
    console.log('MONGO_PORT ', MONGO_PORT);
    console.log('PASS ', MONGO_INITDB_ROOT_PASSWORD);
    console.log('USER ', MONGO_INITDB_ROOT_USERNAME);
    console.log('==========================================');
});

