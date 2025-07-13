import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ alert }) {
  const getIconSvg = (type) => {
    switch (type) {
      case 'success':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
            className="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 
            10.03a.75.75 0 0 0 1.07 0l3.992-3.992a.75.75 
            0 1 0-1.06-1.06L7.5 8.439 5.53 
            6.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z" />
          </svg>
        );
      case 'danger':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
            className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 
            13.233c-.457.778.091 1.767.982 
            1.767h13.707c.89 0 1.438-.99.982-1.767L8.982 
            1.566zM8 5c.535 0 .954.462.9.995l-.35 
            3.507a.552.552 0 0 1-1.1 0L7.1 
            5.995A.905.905 0 0 1 8 
            5zm.002 6a1 1 0 1 1-2.002 
            0 1 1 0 0 1 2.002 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
            className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 
            0zM7.001 4.001a1 1 0 1 1 2 
            0v4a1 1 0 1 1-2 0V4zm.999 
            8a1.5 1.5 0 1 0 0-3 1.5 1.5 
            0 0 0 0 3z" />
          </svg>
        );
      case 'info':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
            className="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 
            8 0zM8.93 6.588 8.5 8.5H7.5l-.5 
            2H8l.5-1.5h1L9 10h1V9H9.5l.43-1.412c.07-.23.07-.488 
            0-.717A1 1 0 0 0 8.93 
            6.588zM8 5a1 1 0 1 1 0-2 
            1 1 0 0 1 0 2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
            className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 1.985-1.75H6.015A2 
            2 0 0 0 8 16zm.104-14.8a1 1 0 0 1 1.792 
            0A5.002 5.002 0 0 1 13 6c0 1.098.163 
            1.584.384 2.106.179.432.302.734.374.965a1.007 
            1.007 0 0 1-.275 1.016c-.343.344-.84.498-1.305.413H3.822a1.518 
            1.518 0 0 1-1.305-.413 1.007 1.007 0 0 1-.275-1.016c.072-.231.195-.533.374-.965C3.837 
            7.584 4 7.098 4 6a5.002 5.002 0 0 1 3.896-4.8z" />
          </svg>
        );
    }
  };

  return (
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show d-flex align-items-center gap-2`}
        role="alert"
        style={{
          position: 'fixed',
          top: '65px',
          right: '1px',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          zIndex: 9999,
          fontSize: '0.90rem',
          lineHeight: '1.4',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          padding: '10px 14px',
          borderRadius: '6px',
        }}
      >
        {getIconSvg(alert.type)}
        <div><strong>{alert.msg}</strong></div>
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.object,
};
