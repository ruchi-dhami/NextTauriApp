
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const { firstName } = req.query;

  if (!firstName) {
    return res.status(400).json({ message: "Missing firstName" });
  }

  res.status(200).json({ message: `Hello ${firstName}!` });
}
