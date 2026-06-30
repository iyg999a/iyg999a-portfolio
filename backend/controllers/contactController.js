const Contact = require("../models/model.contact");

const submitContact = async (req, res) => {
    try {
        const { name, email, reason } = req.body;

        // Basic Validation
        if (!name || !email || !reason) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Save to MongoDB
        const contact = await Contact.create({
            name,
            email,
            reason
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully!",
            data: contact
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    submitContact
};