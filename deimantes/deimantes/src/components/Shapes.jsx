import React from 'react';

const Shapes = (props) => {
    return (
        <div
        style={{
            display:'flex',
          margin: "auto",
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: `${props.color}`,
          borderRadius: `${props.num}%`,
          transition: '0.2s',
        }}
      >
          <p style={{margin:'auto'}}>{props.number}</p>
      </div>
    );
}

export default Shapes;