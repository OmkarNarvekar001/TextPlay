import React from 'react';

export default function Alert({ alert }) {
    return (
        alert && (
            <div
                className={`alert alert-${alert.type} alert-dismissible fade show py-1 px-2`}
                role="alert"
                style={{
                    position: 'fixed',
                    top: '65px',
                    right: '1px',
                    transform: 'translateX(-5%)',
                    zIndex: 9999,
                    fontSize: '0.90rem',
                    // minWidth: '200px',
                    // maxWidth: '400px',
                    // padding: '100px 100px',
                    lineHeight: '1',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    textAlign:'center'
                }}
            >
               <strong>{alert.msg}</strong> 
            </div>
        )
    );
}
