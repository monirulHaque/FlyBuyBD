const urlHit = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

export default urlHit;
