//const allImages = require.context('./', true, /\.png$/);

import './sass/main.scss';

import teamImages from './partials/team-images.handlebars';
import teamInfo from './teams.json'
import './static/img/photo1.png'
import './static/img/photo2.png'
import './static/img/photo3.png'
import './static/img/photo4.png'
import './static/img/photo5.png'
import './static/img/photo6.png'


const containerImg = document.getElementById('teams-members');

containerImg.innerHTML = teamImages(teamInfo);
