import React from 'react';

export default function Alert({ alert }) {
    return (
        alert && (
            <div
                className={`alert alert-${alert.type} alert-dismissible fade show py-1 px-2`}
                role="alert"
                style={{
                    position: 'fixed',
                    top: '60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 9999,
                    fontSize: '1rem',
                    minWidth: '200px',
                    maxWidth: '400px',
                    padding: '10px 16px',
                    lineHeight: '1.4',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                }}
            >
                {alert.msg}
            </div>
        )
    );
}
