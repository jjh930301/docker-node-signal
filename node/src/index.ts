import express , {Express , NextFunction, Request , Response} from 'express';

const app : Express = express();

app.get(
  '/health/checker' , 
  async (
    req : Request , 
    res : Response , 
    next : NextFunction
  ) => {
  res.send('ok')
})

app.listen(process.env.PORT , () => {
  console.log(`listen ${process.env.PORT} port`);
})

process.on('SIGINT' , async () => {
  console.log('signal SIGINT')
})

process.on('SIGTERM' , async () => {
  console.log('signal SIGTERM')
})