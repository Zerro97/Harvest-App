const router = require('express').Router();

/**
 * GET
 * Returns array of videos & description. Not sure how to implement video data... Probably will return URL to the video link
 * 
 * Req: Token
 * Res: Array of videos & description.
 */
router.route('/').get((req, res) => {

});

/**
 * POST
 * Create a new video.
 * 
 * Req: Token, Video URL, Description
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post((req, res) => {

});


//***** INDIVIDUALS *****//
/**
 * GET
 * Returns a specific video & description.
 * 
 * Req: Token
 * Res: Video & description
 */
router.route('/:id').get((req, res) => {

});

/**
 * PUT
 * Update a specific video & description.
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').put((req, res) => {

});

/**
 * DELETE
 * Delete an instance of sermon model
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').delete((req, res) => {

});


module.exports = router;