

export async function logout(req, res, next) {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ status: "logout error", body: err });
      }
      return next();
    });
  } catch (error) {
    next(error);
  }
}
