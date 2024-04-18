const error = (err, req, res, _next) => {
  if (err.code === 'ENOENT') return res.status(500).json({ message: 'no such file or directory' });
  return res.status(err.error).json({ message: err.message });
};

module.exports = error;