export async function errorManager(error, req, res, next) {
  return res.status(400).json({ status: "error", message: error.message });
}
