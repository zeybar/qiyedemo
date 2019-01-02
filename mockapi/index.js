import express from 'express';

// Create express router
const router = express.Router();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

// Add POST - /api/login
router.get('/myPost', (req, res) => {
  // if (req.body.username === 'demo' && req.body.password === 'demo') {
  //   req.session.authUser = { username: 'demo' }
  //   return res.json({ username: 'demo' })
  // }
  return res.status(401).json({ list: [] });
  // res.status(401).json({ message: 'Bad credentials' })
});

// Export the server middleware
export default {
  path: '/dev',
  handler: router,
};

// import Koa from 'koa';
// import Router from 'koa-router';

// const app = new Koa();
// const router = new Router();

// router.get('/myPost', (ctx, next) => {
//   ctx.body = [{ id: 4, name: 'TJ' }];
//   next();
// });

// app.use(router.routes()).use(router.allowedMethods());

// export default {
//   path: '/dev',
//   handler: app,
// };
