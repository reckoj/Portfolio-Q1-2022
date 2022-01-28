import React, { useRef, useState } from 'react'
import contactcss from './Contact.module.css'
import emailImg from '../../images/mailImg.svg'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

const serviceId = 'service_fnw3pum'
const templateId = 'template_8osoq54'
const userId = 'user_e4NholktiqmF5rc8leNbR'

const Contact = () => {
	// const form = useRef()

	function sendEmail(e) {
		e.preventDefault()
		emailjs.sendForm(serviceId, templateId, e.target, userId).then(
			result => {
				console.log(result)
				if (result.text === 'OK') {
					swal({
						title: 'Message Sent',
						text: 'Thank you for your message, I will be in touch in no time! ',
						icon: 'success'
					})
					this.resetForm()
				} else if (result.text === 'fail') {
					swal('Oops', 'Something went wrong!', 'error')
				}
			},
			error => {
				console.log(error.text)
			}
		)
		e.target.reset()
	}

	return (
		<section className={contactcss.contactClass} id='contact'>
			<div className={contactcss.contactBox}>
				<div className={contactcss.contactFormWrapper}>
					<div className={contactcss.emailImg}>
						<img src={emailImg} alt='email' />
					</div>
					<form onSubmit={sendEmail}>
						<div className={contactcss.formItem}>
							<input type='text' name='name' required />
							<label>Name</label>
						</div>
						<div className={contactcss.formItem}>
							<input type='email' name='user_email' required />
							<label>Email</label>
						</div>
						<div className={contactcss.formItem}>
							<textarea
								className={contactcss.textMessage}
								name='message'
								required
							></textarea>
							<label>Message</label>
						</div>
						<input
							type='submit'
							value='send'
							className={contactcss.submitBtn}
						/>
					</form>
				</div>
			</div>
			<div className={contactcss.contactLinks}>
				<div className={contactcss.links}>
					<div className={contactcss.link}>
						<div className={contactcss.contactAddress}>
							<h3>Contact</h3>
							<h4>Recko Jean</h4>
							<h4>reckojean@gmail.com</h4>
							<h4>Charlottetown, Prince Edward Island</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
