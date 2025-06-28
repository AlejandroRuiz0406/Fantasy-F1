export default function handler(req, res) {
  res.status(200).json({ hora: new Date().toISOString() });
}
