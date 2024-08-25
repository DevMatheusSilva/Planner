import express from 'express';
import { engine } from 'express-handlebars';

export const setupHandlebars = (app: express.Application) => {
    app.engine('hbs', engine({extname: '.hbs'}));
    app.set('view engine', 'hbs');
    app.set('views', './src/views/templates');
}
