export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });

  // const email = req.body.email;
  // Then save email to your database, etc...
}

// http://localhost:3000/api/hello => { text: "Hello" }
