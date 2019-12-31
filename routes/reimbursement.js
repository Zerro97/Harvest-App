const router = require('express').Router();

/**
 * GET
 * Returns array of images & description. For image, probably will return url to image link
 * 
 * Req: Token
 * Res: Array of images & description.
 */
router.route('/').get((req, res) => {

});

/**
 * POST
 * Create a new reimbursement (images & description).
 * 
 * Req: Token, Image URL, Description
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post((req, res) => {

});


//***** INDIVIDUALS *****//
/**
 * GET
 * Returns a specific images & description.
 * 
 * Req: Token
 * Res: Video & description
 */
router.route('/:id').get((req, res) => {

});

/**
 * PUT
 * Update a specific images & description.
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').put((req, res) => {

});

/**
 * DELETE
 * Delete an instance of reimbursement model
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').delete((req, res) => {

});


module.exports = router;