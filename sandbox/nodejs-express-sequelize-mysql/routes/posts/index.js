'use strict';
const express = require('express');
const router = express.Router();
const postService = require('../../services/post-service');

router.get('/', (req, res, next) => {
    postService.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while fetching all records."
        });
    });
});

router.post('/', (req, res, next) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
    }
    return postService.create(req).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while saving."
        });
    });
});

router.get('/:id', (req, res, next) => {
    if (!req.params) {
        res.status(400).send({
            message: "Post id cannot be empty."
        });
    }
    const postId = req.params.id;
    return postService.getById(postId).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while fetching specific record."
        });
    });
});

router.delete('/:id', (req, res, next) => {
    if (!req.params) {
        res.status(400).send({
            message: "Post id cannot be empty."
        });
    }
    const postId = req.params.id;
    return postService.delete({ id: postId }).then(deletedObjectsCount => {
        res.status(200).send(deletedObjectsCount);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while fetching specific record."
        });
    });

});

module.exports = router;
