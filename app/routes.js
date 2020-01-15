const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello World Express');
 });
 
 routes.get('/json', (req, res) => {
    return res.json({ message: 'Hello World Express Json'});
 });
 
 
 
 routes.get('/users', (req, res) => {
    console.log(req.query)
    return res.json({ message: 'Hello World Express Json'});
 });
 
 
 routes.delete('/users/:id', (req, res) => {
    console.log(req.params)
    return res.json({ message: 'Hello World Express Json'});
 });
 
routes.post('/users', (req, res) => {
    console.log(req.body)
    return res.json({ message: 'Hello World Express Json'});
 });


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);


 module.exports = routes;