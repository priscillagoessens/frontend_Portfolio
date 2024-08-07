"use client"
import React, { useState } from 'react';
import './_Form.scss';
import Button from '../Button/Button';

export default function Form() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
          setStatus('pending');
          setError(null);
          const myForm = event.target;
          const formData = new FormData(myForm);

          const res = await fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(formData).toString()
          });
          if (res.status === 200) {
              setStatus('ok');
          } else {
              setStatus('error');
              setError(`${res.status} ${res.statusText}`);
          }
      } catch (e) {
          setStatus('error');
          setError(`${e}`);
      }
  };

  return (
    <section className='section-contact background'>
      <h2 className='title'>Me contacter</h2>

      <div className='section-contact_container'>
        <div className='section-contact_container-form'>
        {status === 'ok' ? (
          <div className="alert-success">
            Merci pour votre message !  
            Je reviens vers vous prochainement.
          </div>
        ) : (
          <form 
            className="section-contact_container-form-wrapper" 
            name="contact" 
            onSubmit={handleFormSubmit} 
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="section-contact_container-form-wrapper-group">
              <label htmlFor="name">Nom:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="section-contact_container-form-wrapper-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="section-contact_container-form-wrapper-group">
              <label htmlFor="objet">Objet :</label>
              <input
                type="text"
                id="objet"
                name="objet"
                required
              />
            </div>
            <div className="section-contact_container-form-wrapper-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
              />
            </div>
            <Button type="submit">Envoyer</Button>
          </form>
        )}
        {status === 'error' && (
          <div className="alert-error">
            {error}
          </div>
        )}
        </div>
      </div>
    </section>
  );
}

