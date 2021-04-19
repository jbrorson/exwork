import React, { useState } from 'react';

const ProgressBar = ({ done, name, content }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle);
  }, 1000);

  return (
    <section className="progress-section">
      <div className="progress">
        <div className="progress-done" style={style}>
          <p>{done}%</p>
        </div>
      </div>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    </section>
  )
};

export default ProgressBar;



// import React from 'react';
// import PropTypes from 'prop-types';
// import Title from './Title';

// const ProgressBar = props => {
//   const { value, max, name } = props;
//   return (
//     <>
//       <Title title={"My skills"} />
//       <section className="skills-section">
//         <div className="Progress-name" name={name}><br />
//           <progress value={value} max={max} />
//         </div>
//       </section>
//     </>
//   )
// };

// ProgressBar.propTypes = {
//   value: PropTypes.number.isRequired,
//   max: PropTypes.number,
//   name: PropTypes.string
// };

// ProgressBar.defaultProps = {
//   max: 100
// };

// export default ProgressBar;
