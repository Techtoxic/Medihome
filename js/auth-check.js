<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us - Medi Home</title>
  <style>
    /* Body Styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #f7fafc;
      margin: 0;
      padding: 0;
    }

    /* Form Section Styling */
    .contact-form-container {
      background-color: #ffffff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 40px;
      max-width: 600px;
      margin: 50px auto;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    /* Form Field Styling */
    .form-field {
      margin-bottom: 20px;
    }

    label {
      font-size: 16px;
      font-weight: medium;
      color: #4a5568;
      margin-bottom: 8px;
      display: inline-block;
    }

    input, textarea {
      width: 100%;
      padding: 12px;
      background-color: #f1f5f9;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      color: #4a5568;
      margin-top: 8px;
      transition: border 0.3s ease;
    }

    input:focus, textarea:focus {
      border-color: #3b82f6;
      outline: none;
    }

    textarea {
      resize: vertical;
    }

    /* Terms Checkbox Styling */
    .checkbox-container {
      display: flex;
      align-items: center;
      margin-top: 12px;
    }

    .checkbox-container input {
      margin-right: 12px;
      width: 18px;
      height: 18px;
      border-radius: 4px;
      border: 1px solid #d1d5db;
      background-color: #fff;
      transition: border-color 0.3s ease;
    }

    .checkbox-container input:checked {
      background-color: #3b82f6;
      border-color: #3b82f6;
    }

    .checkbox-label {
      font-size: 14px;
      color: #4a5568;
      display: inline-block;
    }

    /* Submit Button Styling */
    .submit-button {
      background-color: #1e3a8a;
      color: #ffffff;
      padding: 14px 20px;
      font-size: 16px;
      font-weight: medium;
      border-radius: 8px;
      width: 100%;
      cursor: pointer;
      transition: background-color 0.3s ease;
      border: none;
    }

    .submit-button:hover {
      background-color: #2563eb;
    }

    /* Red asterisk for required fields */
    .required {
      color: #f87171;
    }
  </style>
</head>
<body>

  <!-- Contact Form Section -->
  <section class="contact-form-container">
    <h2>Contact Us</h2>

    <form action="submit-contact" method="POST">
      <!-- Your Message -->
      <div class="form-field">
        <label for="message">Your Message<span class="required">*</span></label>
        <textarea id="message" name="message" rows="6" placeholder="Please write your message here" required></textarea>
      </div>

      <!-- Name -->
      <div class="form-field">
        <label for="name">Name<span class="required">*</span></label>
        <input type="text" id="name" name="name" placeholder="Please enter name" required>
      </div>

      <!-- Email -->
      <div class="form-field">
        <label for="email">Email<span class="required">*</span></label>
        <input type="email" id="email" name="email" placeholder="Please enter your email address" required>
      </div>

      <!-- Phone Number -->
      <div class="form-field">
        <label for="phone">Phone Number<span class="required">*</span></label>
        <input type="tel" id="phone" name="phone" placeholder="Please enter your phone number" required>
      </div>

      <!-- Preferred Appointment Date -->
      <div class="form-field">
        <label for="appointment_date">Preferred Appointment Date<span class="required">*</span></label>
        <input type="date" id="appointment_date" name="appointment_date" required>
      </div>

      <!-- Preferred Appointment Time -->
      <div class="form-field">
        <label for="appointment_time">Preferred Appointment Time<span class="required">*</span></label>
        <input type="time" id="appointment_time" name="appointment_time" required>
      </div>

      <!-- Website -->
      <div class="form-field">
        <label for="website">Website<span class="required">*</span></label>
        <input type="url" id="website" name="website" placeholder="Please enter your website" required>
      </div>

      <!-- Terms Checkbox -->
      <div class="form-field checkbox-container">
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms" class="checkbox-label">I agree with the terms.</label>
      </div>

      <!-- Submit Button -->
      <div>
        <button type="submit" class="submit-button">Send Message Now</button>
      </div>
    </form>
  </section>

</body>
</html>














<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Appointment</title>
   
</head>
<body>
<button onclick="checkLoginBeforeBooking()">Book Appointment</button>
<script type="module" src="/js/firebaseauth.js"></script>
</body>
</html>
