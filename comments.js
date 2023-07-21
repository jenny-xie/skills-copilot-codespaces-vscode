// create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

// create express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// store comments
const commentsByPostId = {};

// route handlers
// get comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// create comment
app.post('/posts/:id/comments', async (req, res) => {
    // generate random id
    const commentId = randomBytes(4).toString('hex');
    // get post id
    const { id } = req.params;
    // get comment data
    const { content } = req.body;

    // get comments for this post
    const comments = commentsByPostId[id] || [];
    // add new comment
    comments.push({ id: commentId, content, status: 'pending' });