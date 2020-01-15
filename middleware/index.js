/**
 * Provides middleware functions. Middleware functions have access to request, response and next function.
 */

// All the functions are defined here
var middlewareObj = {};

middlewareObj.checkToken = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;