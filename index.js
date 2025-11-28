const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// مسار ثابت لملفات HTML أو أي ملفات
app.use(express.static(path.join(__dirname, 'public')));

// راوت أساسي
app.get('/', (req, res) => {
  res.send('Express server with path is running!');
});

// تشغيل السيرفر
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
