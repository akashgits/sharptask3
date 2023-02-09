//const express=require('express');
import express from 'express';

import totdosroutes from './routes/todos'
import bodyparser from 'body-parser'

const app=express();
app.use(bodyparser.json());

app.use(totdosroutes);
app.listen(3000);

