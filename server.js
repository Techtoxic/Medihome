const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Doctor email mapping
const doctorMap = {
  "Physiotherapy": ["theetentacion@gmail.com", "sikuzote@gmail.com"],
  "General Home Care": ["severinawanjiku2022@gmail.com", "xtrovvert@gmail.com"],
  "Pediatrics": ["introvvert247@gmail.com", "ped2@gmail.com"],
  "Cardiology": ["gatewaytimer@gmail.com"]
};

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Appointment booking endpoint
app.post('/api/book-appointment', async (req, res) => {
  try {
    const {
      category,
      name,
      email,
      phone,
      location,
      appointment_date,
      appointment_time,
      message
    } = req.body;

    // Validate required fields
    if (!category || !name || !email || !phone || !location || !appointment_date || !appointment_time || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Get doctor emails for the selected category
    const doctorEmails = doctorMap[category];
    if (!doctorEmails || doctorEmails.length === 0) {
      return res.status(400).json({ error: 'No doctors available for selected category' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      subject: `New Appointment Request - ${category}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Patient Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Preferred Date:</strong> ${appointment_date}</p>
        <p><strong>Preferred Time:</strong> ${appointment_time}</p>
        <p><strong>Message:</strong> ${message}</p>
         <p>Please review the patient's request and confirm your availability. If you need any additional details, feel free to contact the patient directly.

Best regards,  
The MediHome Team  
[www.medihome Kenya]</p>
      `
     
    };

    // Validate doctor email addresses
    const validDoctorEmails = doctorEmails.filter(email => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    });

    if (validDoctorEmails.length === 0) {
      return res.status(500).json({ error: 'No valid doctor emails available for this category' });
    }

    // Send emails to all valid doctor emails in the category
    console.log('Attempting to send emails to:', validDoctorEmails);
    const emailPromises = validDoctorEmails.map(doctorEmail => {
      mailOptions.to = doctorEmail;
      console.log(`Sending email to ${doctorEmail} with options:`, {
        from: mailOptions.from,
        subject: mailOptions.subject,
        to: doctorEmail
      });
      return transporter.sendMail(mailOptions)
        .then(info => {
          console.log(`Email sent successfully to ${doctorEmail}:`, info);
          return info;
        })
        .catch(error => {
          console.error(`Failed to send email to ${doctorEmail}:`, error);
          console.error('Error details:', {
            code: error.code,
            response: error.response,
            responseCode: error.responseCode
          });
          return null;
        });
    });

    const results = await Promise.all(emailPromises);
    const successfulEmails = results.filter(result => result !== null);

    if (successfulEmails.length === 0) {
      return res.status(500).json({ error: 'Failed to send emails to all doctors. Please try again later.' });
    }

    res.status(200).json({ message: 'Appointment request sent successfully' });
  } catch (error) {
    console.error('Error sending appointment request:', error);
    res.status(500).json({ error: 'Failed to send appointment request' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});