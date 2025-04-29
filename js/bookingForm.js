// Initialize EmailJS
emailjs.init("INXGR9Ughk1j5dWky");  // Public Key

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('patientName').value,
                email: document.getElementById('patientEmail').value,
                phone: document.getElementById('patientPhone').value,
                service: document.getElementById('serviceCategory').value,
                date: document.getElementById('appointmentDate').value,
                time: document.getElementById('appointmentTime').value,
                notes: document.getElementById('additionalNotes').value
            };

            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    'service_oj5uoc7', // EmailJS service ID
                    'template_gr2zpvt', // EmailJS template ID
                    {
                        to_email: getDoctorEmail(formData.service),
                        patient_name: formData.name,
                        patient_email: formData.email,
                        patient_phone: formData.phone,
                        service_type: formData.service,
                        appointment_date: formData.date,
                        appointment_time: formData.time,
                        additional_notes: formData.notes
                    }
                );

                if (response.status === 200) {
                    alert('Appointment request sent successfully!');
                    bookingForm.reset();
                } else {
                    throw new Error('Failed to send appointment request');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to send appointment request. Please try again.');
            }
        });
    }
});

// Function to get doctor's email based on service category
function getDoctorEmail(service) {
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

    return doctorEmails[service] || 'default@gmail.com';
}