const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index. show, store, update, destroy

module.exports = {

    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store(req, res) {
        // console.log(req.body);
        const { github_username, techs, latitude, longitude } = req.body;

        let dev  = await Dev.findOne({ github_username});
        if (!dev) {
            const git_response = await axios.get(`https://api.github.com/users/${github_username}`);
            // console.log(git_response.data);
            const techsArray = parseStringAsArray(techs);
            const { name = login, avatar_url, bio } = git_response.data;
            // console.log(name, avatar_url, bio, github_username, techsArray);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            dev = await Dev.create({ 
                name,
                github_username,
                bio, avatar_url,
                techs: techsArray,
                location
            });
        }            
        return res.json(dev);
    }
};
