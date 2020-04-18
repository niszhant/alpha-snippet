const db = require('../models')
const postObj = db.posts
// const Op = db.sequelize.Op

class PostService {

    /**
     * Returns all posts available in database
     * @returns {Promise} list of post objects
     */
    getAll() {
        return postObj.findAll();
    }

    /**
     * Persist a post object in database
     * 
     * @param {Request} request 
     * @returns {Promise} created post 
     */
    create(request) {
        console.log(request.body);
        // Create a Post object
        const { title, description, published, publisher } = request.body;
        const post = {
            title: title,
            description: description,
            published: published ? published : false,
            publisher: publisher ? publisher : false
        };
        // Save Post object to db
        return postObj.create(post);
    }

    /**
     * Returns a specific post for the id passed
     * @param {String} id 
     * @returns {Promise} Post
     */
    getById(id) {
        return postObj.findAll({
            where: { id: id }
        });
    }

    /**
     * Delete post based on the options passed. if no options are passed, then the table is cleared.
     * @param {Object} options 
     * @returns {Promise<number>} a promise whith count of posts deleted
     */
    delete(options = null) {
        return postObj.destroy({
            where: options ? options : {},
            // truncate: false
        });
    }
}

module.exports = new PostService();