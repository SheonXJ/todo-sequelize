module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    console.log('請先登入才能使用!',req.isAuthenticated())
    res.redirect('/users/login')
  }
}