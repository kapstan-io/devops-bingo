import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as VisibilityIcon } from '../assets/svg/Visibility.svg';

export default function Email({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const handleEmailSubmit = async (event) => {
    if (event) event.preventDefault();

    setIsLoading(true);
    await onSubmit(email);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.scrollIntoView({ behavior: 'instant', block: 'center' });
  }, []);

  return (
    <form className="email-section" onSubmit={handleEmailSubmit} ref={formRef}>
      <div>
        <h2>
          We've cracked your Engineering Personality.
        </h2>
        <h2>
          Share your email to see it!
        </h2>
      </div>

      <div className="column" style={{ width: '100%', gap: '32px' }}>
        <div className="row" style={{ boxShadow: '-4px 4px #000000', background: '#FFFFFF', border: '1px solid #000000' }}>
          <input
            type='email'
            placeholder={window.innerWidth < 990 ? 'Enter your email' : 'Enter your email to unlock your persona!'}
            style={{ outline: 'none', border: 'none', flex: 1, fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.16px', fontFamily: 'inherit', padding: '13px 16px', }}
            value={email}
            onChange={handleEmailChange}
          />

          <div style={{ padding: '4px', paddingLeft: '0px' }}>
            <button disabled={!validateEmail(email) || isLoading}>
              <span>Show Me!</span>
              <VisibilityIcon />
            </button>
          </div>
        </div>

        <div style={{ color: '#595959', fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.14px' }}>
          <span>By submitting you agree to Kapstan's </span><a href='https://www.kapstan.io/terms-and-conditions' target='_blank' rel='noreferrer'>Terms of Service</a><span>.{' '}
            Your data will be processed in accordance with Kapstan's </span>
          <a href='https://www.kapstan.io/privacy-policy' target='_blank' rel='noreferrer'>Privacy Policy</a>.
        </div>
      </div>
    </form>
  )
}