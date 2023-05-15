const express = require('express');
const cors = require('cors');
const { Base } = require('deta');

const q = Base('quote');
const qq = Base('quotes')
const w = Base('wish');
const pv = Base('page-visit');
const lk = Base('like');
const ts = Base('time-spend');
const app = express();
app.use(express.json());
app.use(cors());app.use(express.static(__dirname));
const path = require('path');
const router = express.Router();

app.use('/', router);


app.post('/tsq', async(req,res)=>{
    const {key,quote,date} = req.body;
    let status = 0;
    const tp = {key,quote,date,status}
    const ins = await qq.put(tp);
    res.send(ins)
});

app.get('/t', async(req,res)=>{
    const i = await qq.fetch({});
    res.send(i)
});

app.get('/tst', async(req,res)=>{
    const a = req.headers;
    let user_agent = a['user-agent']
    let ip = a['x-real-ip']
    const aa = {user_agent,ip}
    res.send(a)
});

app.post('/pv', async(req,res)=>{
    const {key,startTime,list} = req.body
    const head = req.headers;
    let user_agent = head['user-agent']
    let ip = head['x-real-ip']
    const endTime = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'})
    const to = {key,startTime,list,endTime,user_agent,ip} 
    const a = await pv.put(to)
    res.send(a)
})

app.post('/lk', async(req,res)=>{
    const {key,list} = req.body
    const head = req.headers;
    let user_agent = head['user-agent']
    let ip = head['x-real-ip']
    const to = {key,list,user_agent,ip} 
    const a = await lk.put(to)
    res.send(a)
})

app.post('/ts', async(req,res)=>{
    const {key,startTime,endTime} = req.body
    const head = req.headers;
    let user_agent = head['user-agent']
    let ip = head['x-real-ip']
    // const endTime = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'})
    const to = {key,startTime,endTime,user_agent,ip} 
    const a = await ts.put(to)
    res.send(a)
})


app.post('/put',async(req,res)=>{
    const {quote} = req.body;
    const status = 1;
    const date = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'});
    const key = date;
    const to ={quote, status,date,key}
    const a = await q.put(to)
    res.send(a)
})

app.get('/get',async(req,res)=>{
    const a = await qq.fetch({})
    res.send(a)
})

app.get('/wish',async(req,res)=>{
    const a = await w.get('wish')
    res.send(a)
})




const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});
