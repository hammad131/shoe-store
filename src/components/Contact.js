import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <div className="contact" id="contact">
		        <div className="container2">
                    <div className="section-heading">
                        <h1>Contact</h1>
                        <h6>Let's work together</h6>
                    </div>
			<form action="">
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" placeholder="Enter your name" required></input>
				<label htmlFor="email">Email:</label>
				<input type="text" id="email" name="email" placeholder="Enter your email" required></input>
			
				
				<label htmlFor="subject">Message:</label>
				<textarea name="subjet" id="subjet" cols="10" rows="10"></textarea>
				<input type="submit" name="Submit"></input>
			</form>
		    </div>
	        </div>
        </div>
    )
}

export default Contact;
