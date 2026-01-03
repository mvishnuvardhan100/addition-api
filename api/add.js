export default function handler(req, res) {
  const { a, b } = req.query;

  const num1 = Number(a);
  const num2 = Number(b);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      error: "Please provide two numbers",
    });
  }

  res.status(200).json({
    sum: num1 + num2,
  });
}
