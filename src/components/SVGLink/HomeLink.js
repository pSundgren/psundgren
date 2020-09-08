import React from 'react';
import { Link } from 'react-router-dom';

/* Styling */
import './SVGLink.css';

/* Main render function */
function HomeLink() {
  return (
    <Link to="/" className="menu-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28.014"
        height="52.986"
        viewBox="0 0 28.014 52.986"
      >
        <defs></defs>
        <g transform="translate(-90.324 -59.441)">
          <path
            class="a"
            d="M16.935-13.945a12.883,12.883,0,0,1,6.759,1.812,13.347,13.347,0,0,1,4.832,5.062A15.4,15.4,0,0,1,30.338.55,17.873,17.873,0,0,1,28.526,8.8,13.634,13.634,0,0,1,23.579,14.3a13.143,13.143,0,0,1-7.1,1.956,10.908,10.908,0,0,1-5.033-1.323,15.1,15.1,0,0,1-4.4-3.394V29.2H2.324V-13.37H7.041v4.889A12.705,12.705,0,0,1,11.1-12.363,10.878,10.878,0,0,1,16.935-13.945Zm-.748,4.6A8.613,8.613,0,0,0,11.5-8.021,9.043,9.043,0,0,0,8.22-4.368,11.886,11.886,0,0,0,7.041,1.068L7.1,6.59a19.526,19.526,0,0,0,3.854,3.653,7.921,7.921,0,0,0,4.659,1.409A8.674,8.674,0,0,0,20.9,10.042a10.58,10.58,0,0,0,3.365-4.17A12.578,12.578,0,0,0,25.448.55,10.757,10.757,0,0,0,24.3-4.483a9.1,9.1,0,0,0-3.221-3.538A8.885,8.885,0,0,0,16.187-9.344Z"
            transform="translate(88 83.231)"
          />
          <path
            class="a"
            d="M14.1-18.625a13.942,13.942,0,0,1,5.608.978,26.977,26.977,0,0,1,3.883,2.071v5.35A21.706,21.706,0,0,0,19.678-12.5a11.775,11.775,0,0,0-5-1.064,11.68,11.68,0,0,0-3.6.6,7.4,7.4,0,0,0-3.135,1.927A4.709,4.709,0,0,0,6.678-7.638a4.247,4.247,0,0,0,1.75,3.575,24.283,24.283,0,0,0,4.027,2.3l6.572,3.218a18.2,18.2,0,0,1,5.982,3.969,8.238,8.238,0,0,1,2.013,5.81,8.834,8.834,0,0,1-1.841,5.551,12.685,12.685,0,0,1-4.832,3.768c-1.994.92-8.322-3.681-5.867-3.681a9,9,0,0,0,5.062-1.438,4.509,4.509,0,0,0,2.186-3.969,3.665,3.665,0,0,0-.892-2.473,8.57,8.57,0,0,0-2.157-1.783,21.613,21.613,0,0,0-2.473-1.265L8.543,2.264Q4.4.423,2.906-2.05a11.073,11.073,0,0,1-1.578-5.76A9.2,9.2,0,0,1,3.083-13.3a12.315,12.315,0,0,1,4.688-3.883A14.182,14.182,0,0,1,14.1-18.625Z"
            transform="translate(89.004 78.066)"
          />
        </g>
      </svg>
    </Link>
  );
}

export default HomeLink;