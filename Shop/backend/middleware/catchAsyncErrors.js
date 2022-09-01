module.exports = theFUnc => (req, res, next) => {
   Promise.resolve(theFUnc(req, res, next)).catch(next);
}