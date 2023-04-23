const express = require('express');

const userRouter = require('./routes/userRoutes');
const accountRouter = require('./routes/accountRoutes');
const policyRouter = require('./routes/policyRoutes');
const carrierRouter = require('./routes/carrierRoutes');
const lobRouter = require('./routes/lobRoutes');
const agentRouter = require('./routes/agentRoutes');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/user', userRouter);
app.use('/api/v1/account', accountRouter);
app.use('/api/v1/policy', policyRouter);
app.use('/api/v1/carrier', carrierRouter);
app.use('/api/v1/lob', lobRouter);
app.use('/api/v1/agent', agentRouter);
module.exports = app;
