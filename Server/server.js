import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.use('api/auth',require('./routes/authRoutes'))
app.use('api/ai',require('./routes/aiRoutes'))


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
