const { db } = require('./db');
const app = require('./index.js')

db.sync()
.then(app.listen(3000, ()=> console.log('SoloJuke listening on Port 3000')));
