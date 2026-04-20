export function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    return res.status(200).json({
      message: "User registered successfully",
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
}
