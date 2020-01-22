const router = require('express').Router();
let Reimbursement = require('../models/reimbursement.model');

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
    try{
        const reimbursement = Reimbursement.findById(req.params.id);

        if(!reimbursement){
            return res.status(404).json({msg: "Reimbursement not found"});
        }
    } catch(err){
        console.log("ERROR in reimbursement route: post request." + err);
    }
});


//**** Individual Ids ****//
// Individual ids can be found in req.params.id

/**
 * GET (Individual)
 * Returns a specific images & description.
 * 
 * Req: Token
 * Res: Reimbursement mongoose model
 */
router.route('/:id').get((req, res) => {
    try{
        const reimbursement = Reimbursement.findById(req.params.id);

        if(!reimbursement){
            return res.status(404).json({msg: "Reimbursement not found"});
        }

        res.json(reimbursement);
    } catch(err){
        console.log("ERROR in reimbursement route: post request." + err);
    }
});

/**
 * PUT (Individual)
 * Update a specific images & description.
 * 
 * Req: Token & Updated reimbursement information
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').put((req, res) => {

});

/**
 * DELETE (Individual)
 * Delete an instance of reimbursement model
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').delete((req, res) => {

});


module.exports = router;