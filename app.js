require('@babel/register');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const indexRouter = require('./routes/index.router');

const ssr = require('./middleware/ssr');

app.use(express.urlencoded({ extended: true }));

app.use(ssr);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Serever has been started at port:${PORT}`);
});

// if(InputDeviceInfo.value === questijn.answer)
