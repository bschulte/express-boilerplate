module.exports = {
  testRoute(req, res) {
    res.status(200).json({ msg: 'Success' })
  }
}
