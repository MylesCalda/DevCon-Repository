const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Dummy user for login
const user = {
    username: 'admin',
    password: 'password123',
};

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        return res.json({ success: true });
    }
    res.json({ success: false, message: 'Invalid username or password' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
