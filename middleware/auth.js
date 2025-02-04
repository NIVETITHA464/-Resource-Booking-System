const jwt = require("jsonwebtoken");

const auth = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles]; // Convert to array if string
    }

    return (req, res, next) => {
        const token = req.header('Authorization')?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Access Denied. No token provided." });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey"); // Use .env JWT_SECRET
            req.user = decoded;

            // If roles are specified, check if the user's role matches
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: "Access Denied. You don't have the required role." });
            }

            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid token." });
        }
    };
};

module.exports = auth;
