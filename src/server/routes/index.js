// Dependencies =======================
const express = require('express');
const userRoutes = require('./user');
const router = express.Router();

// GET /health-check - Check service 

// routes at /users ===================
router.use('/user', userRoutes);

// routes at /auth ====================
//router.use('/auth', authRoutes);

// Router exports ======================
module.exports = router;