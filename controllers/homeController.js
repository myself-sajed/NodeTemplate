const homeController = () => {
    return {
        home(req, res) {
            res.render('home')
        }
    }
}

module.exports = homeController