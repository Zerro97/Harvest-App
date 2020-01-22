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


//**** Individual Ids ****//
// Individual ids can be found in req.params.id

/**
 * GET
 * Returns a specific video & description.
 * 
 * Req: Token
 * Res: Sermon mongoose model
 */
router.route('/:id').get((req, res) => {

});

/**
 * PUT
 * Update a specific video & description.
 * 
 * Req: Token & Updated sermon information
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