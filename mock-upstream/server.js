'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.post('/auth', (req, res) => {

        let auth = {
            "access_token": "08f36324-f5f7-4447-9903-6f5a495b0b2a",
            "refresh_token": "72a97d6f-44fc-4150-bfdb-3c24a19b9dc1",
            "expires_in": 3600
        };
        res.json(auth);
});


app.get('/comics', (req, res) => {
    if(!req.headers.hasOwnProperty('authorization')){
        res.sendStatus(401)
    } else {
        let comics = {
            "total": 1,
            "per_page": "20",
            "current_page": 1,
            "last_page": 1,
            "next_page_url": null,
            "prev_page_url": null,
            "from": 1,
            "to": 1,
            "data": [
                {
                    "id": "03deb771-0814-31f1-b381-00d09bee4f27",
                    "issue": 510,
                    "writer": [
                        "Jennyfer Hills"
                    ],
                    "comic_book_archive_contents": {
                        "1": "b76af725-2f58-36a0-9849-3e5c7b186703",
                        "2": "c2b05163-eb5e-3a28-b5b9-286f2116748b",
                        "3": "4ffc1101-cbe8-3ce2-96e8-e1960f42db9e",
                        "4": "6e272e2d-5fec-37b2-b883-ed95a10c4701",
                        "5": "f13ff327-a3dd-3c24-b812-8d56f5ea0dbb",
                        "6": "a2dbd59e-2c50-3a5e-b39f-eb5c9542fd71",
                        "7": "5515d44e-6057-375d-8594-65ab6736ab76"
                    },
                    "series_id": "d34ea92f-b228-318e-a16b-a8817f136331",
                    "comic_vine_issue_id": 6111360,
                    "status": 1
                }
            ]
        };

        res.json(comics);
    }
});

app.get('/series', (req, res) => {
    if(!req.headers.hasOwnProperty('authorization')){
        res.sendStatus(401)
    } else {
        let series = {
            "total": 1,
            "per_page": "20",
            "current_page": 1,
            "last_page": 1,
            "next_page_url": null,
            "prev_page_url": null,
            "from": 1,
            "to": 1,
            "data": [
                {
                    "id": "d34ea92f-b228-318e-a16b-a8817f136331",
                    "title": "Molestiae quia voluptatibus ea aut consequatur.",
                    "start_year": 1997,
                    "publisher": "Unknown",
                    "comic_vine_series_id": 729793572,
                    "cover_image": "https://placekitten.com/400/585"
                }
            ]
        };

        res.json(series);
    }
});

app.get('/series/:series_id', (req, res) => {
    if(!req.headers.hasOwnProperty('authorization')){
        res.sendStatus(401)
    } else {
        let series = {
            "id": "d34ea92f-b228-318e-a16b-a8817f136331",
            "title": "Molestiae quia voluptatibus ea aut consequatur.",
            "start_year": 1997,
            "publisher": "Unknown",
            "comic_vine_series_id": 729793572,
            "cover_image": "https://placekitten.com/400/585"
        };

        res.json(series);
    }
});


app.get('/series/:series_id/comics', (req, res) => {
    if(!req.headers.hasOwnProperty('authorization')){
        res.sendStatus(401)
    } else {
        let seriescomics = {
            "total": 1,
            "per_page": "20",
            "current_page": 1,
            "last_page": 1,
            "next_page_url": null,
            "prev_page_url": null,
            "from": 1,
            "to": 1,
            "data": [
                {
                    "id": "03deb771-0814-31f1-b381-00d09bee4f27",
                    "issue": 510,
                    "writer": [
                        "Jennyfer Hills"
                    ],
                    "comic_book_archive_contents": {
                        "1": "b76af725-2f58-36a0-9849-3e5c7b186703",
                        "2": "c2b05163-eb5e-3a28-b5b9-286f2116748b",
                        "3": "4ffc1101-cbe8-3ce2-96e8-e1960f42db9e",
                        "4": "6e272e2d-5fec-37b2-b883-ed95a10c4701",
                        "5": "f13ff327-a3dd-3c24-b812-8d56f5ea0dbb",
                        "6": "a2dbd59e-2c50-3a5e-b39f-eb5c9542fd71",
                        "7": "5515d44e-6057-375d-8594-65ab6736ab76"
                    },
                    "series_id": "d34ea92f-b228-318e-a16b-a8817f136331",
                    "comic_vine_issue_id": 6111360,
                    "status": 1
                }
            ]
        };

        res.json(seriescomics);
    }
});

app.post('/uploads', (req, res) => {
    if (!req.headers.hasOwnProperty('authorization')) {
        res.sendStatus(401)
    } else {


    }
});


app.listen(3000);
console.log('Mock Server running on localhost:3000');