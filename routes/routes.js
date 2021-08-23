
// Controllers
const homeContoller = require('../controllers/homeController')()


function initRoutes(app) {
    app.get('/', homeContoller.home)

}

module.exports = initRoutes