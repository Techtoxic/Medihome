const nodemailer = require('nodemailer');

// Doctor email mapping based on service category
const doctorEmails = {
    'Physiotherapy': 'doc1@gmail.com',
    'General Home Care': 'doc2@gmail.com',
    'Pediatrics': 'doc3@gmail.com',
    'Cardiology': 'doc4@gmail.com',
    'Mental Health Care': 'doc5@gmail.com',
    'Elderly Care': 'doc6@gmail.com',
    'Respiratory Care': 'doc7@gmail.com',
    'Post-Surgery Care': 'doc8@gmail.com'
};

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-app-password' // Replace with your app password
    }
});

// Function to send appointment email
async function sendAppointmentEmail(appointmentData) {
    const doctorEmail = doctorEmails[appointmentData.service];
    
    if (!doctorEmail) {
        throw new Error('Invalid service category');
    }

    const emailContent = `
        Dear Doctor,

        You have a new appointment request:

        Patient Details:
        - Name: ${appointmentData.name}
        - Email: ${appointmentData.email}
        - Phone: ${appointmentData.phone}
        - Service: ${appointmentData.service}
        - Preferred Date: ${appointmentData.date}
        - Preferred Time: ${appointmentData.time}
        - Additional Notes: ${appointmentData.notes || 'None'}

        Kindly attend to this request as soon as possible.

        Best regards,
        Medi Home Team
    `;

    const mailOptions = {
        from: 'your-email@gmail.com', // Replace with your email
        to: doctorEmail,
        subject: `New Appointment Request - ${appointmentData.service}`,
        text: emailContent
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Appointment request sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send appointment request');
    }
}

module.exports = { sendAppointmentEmail };