const express = require('express'),
app = express();

app.use(require('cors')());
app.use(express.json());

app.use('/api', require('./routers/file.rourer'))
app.use('/api', require('./routers/pdf.router'))

port = process.env.PORT || 5050;

const server = app.listen(port, () => console.log(`#### Server running on port ${port} ####`));
