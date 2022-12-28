import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

export const EmailFolder = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wz7p57i', 'template_rrblj6k', form.current, '94cP_QLApOi8ryank')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <form className='emailform' ref={form} onSubmit={sendEmail}>
        <label>Name: </label>
        <u><input className='emailform__input' type="text" name="user_name" /></u>
        <label>Email</label>
        <input className='emailform__input' type="email" name="user_email" />
        <label>Message</label>
        <textarea className='emailform__textarea' name="message" />
        <input className='emailform__send' type="submit" value="Send" />
      </form>
    </div>
  )
}
