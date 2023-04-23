const app = require('./app');
const mongoose = require('mongoose');

const uri =
  'mongodb+srv://yuvraajanshu:HLkw6zgShpuWLkyb@cluster0.oysofci.mongodb.net/InsuredDB?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
