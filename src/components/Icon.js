import React from 'react';

const quarterIcons = {
  'quarter-posts': `M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z`, // mdi-text-box
  'quarter-sheets': `M7,9A2,2 0 0,1 5,7A2,2 0 0,1 7,5A2,2 0 0,1 9,7A2,2 0 0,1 7,9M20,3H4A1,1 0 0,0 3,4V10A1,1 0 0,0 4,11H20A1,1 0 0,0 21,10V4A1,1 0 0,0 20,3M7,19A2,2 0 0,1 5,17A2,2 0 0,1 7,15A2,2 0 0,1 9,17A2,2 0 0,1 7,19M20,13H4A1,1 0 0,0 3,14V20A1,1 0 0,0 4,21H20A1,1 0 0,0 21,20V14A1,1 0 0,0 20,13Z`, // mdi-dns
  'quarter-talks': `M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z`, // mdi-inbox
  'quarter-others': `M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z`, // mdi-dice-3
};

const socialIcons = {
  'social-github': `M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z`, // mdi-github
  'social-zhihu': `M 11.980469 2 A 10 10 0 0 0 2 12 A 10 10 0 0 0 12 22 A 10 10 0 0 0 22 12 A 10 10 0 0 0 12 2 A 10 10 0 0 0 11.980469 2 z M 8.828125 6.2050781 A 1.7605034 1.7605034 0 0 1 8.9003906 6.2050781 C 8.9003906 6.2050781 8.5370122 7.2394079 8.4238281 7.578125 C 8.4122611 7.6103426 8.4001919 7.6472438 8.3886719 7.6835938 L 11.681641 7.6835938 A 0.56921014 0.56921014 0 0 1 12.082031 7.8476562 A 0.55847032 0.55847032 0 0 1 12.248047 8.2421875 L 12.248047 8.7773438 L 10.138672 8.7773438 L 10.138672 11.050781 C 10.136192 11.258968 10.123047 11.457789 10.123047 11.652344 L 11.972656 11.652344 A 0.52831623 0.52831623 0 0 1 12.347656 11.804688 A 0.51798949 0.51798949 0 0 1 12.501953 12.177734 L 12.501953 12.742188 L 10.037109 12.742188 A 11.60313 11.60313 0 0 1 9.5742188 14.902344 C 9.3267897 15.692547 8.8155289 16.733891 8.2421875 17.267578 C 7.2941925 18.147003 6 17.662109 6 17.662109 A 13.674262 13.674261 0 0 0 7.2988281 16.433594 A 6.9379197 6.9379197 0 0 0 8.5429688 14.253906 A 7.3183567 7.3183567 0 0 0 8.8652344 12.748047 L 6.1679688 12.748047 A 1.0896781 1.089678 0 0 1 6.4921875 11.972656 C 6.6999616 11.76736 6.9821111 11.652344 7.2753906 11.652344 L 8.9765625 11.652344 C 8.9881305 11.454897 9.0058594 11.257317 9.0058594 11.050781 L 9.0058594 8.7773438 L 8.0410156 8.7773438 L 8.0039062 8.9023438 C 7.849005 9.4727936 7.6184751 9.8468463 7.15625 10.091797 A 2.4164581 2.4164581 0 0 1 6.1152344 10.345703 C 6.1152344 10.345703 6.5958224 9.3741274 6.7949219 8.8222656 C 6.9242128 8.4765279 7.1161843 7.8970649 7.3359375 7.296875 C 7.5255366 6.774755 7.6668942 6.6574155 7.9023438 6.4921875 A 1.7605034 1.7605034 0 0 1 8.828125 6.2050781 z M 12.912109 7.6835938 L 18 7.6835938 L 18 16.505859 L 16.009766 16.505859 L 14.324219 17.568359 L 14.158203 16.505859 L 12.912109 16.505859 L 12.912109 7.6835938 z M 14.050781 8.7773438 L 14.050781 15.404297 L 14.761719 15.404297 L 14.859375 16.027344 L 15.849609 15.404297 L 16.849609 15.404297 L 16.849609 8.7773438 L 14.050781 8.7773438 z M 10.654297 13.917969 L 11.943359 15.802734 A 1.3011697 1.3011697 0 0 1 12.058594 16.699219 A 2.8522467 2.8522466 0 0 1 11.78125 17.613281 L 9.6992188 14.533203 L 10.654297 13.917969 z `,
};

const themeIcons = {
  'theme-auto': `M14.3,16L13.6,14H10.4L9.7,16H7.8L11,7H13L16.2,16H14.3M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69M10.85,12.65H13.15L12,9L10.85,12.65Z`, // mdi-brightness-auto,
  'theme-light': `M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z`, // mdi-brightness-7
  'theme-dark': `M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z`, // mdi-brightness-4
};

const miscIcons = {
  rss: `M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,18A1.5,1.5 0 0,0 9,16.5A1.5,1.5 0 0,0 7.5,15M6,10V12A6,6 0 0,1 12,18H14A8,8 0 0,0 6,10M6,6V8A10,10 0 0,1 16,18H18A12,12 0 0,0 6,6Z`, // mdi-rss-box
  cc: `M11.89,10.34L10.55,11.04C10.41,10.74 10.24,10.53 10.03,10.41C9.82,10.29 9.62,10.23 9.45,10.23C8.55,10.23 8.11,10.82 8.11,12C8.11,12.54 8.22,12.97 8.45,13.29C8.67,13.61 9,13.77 9.45,13.77C10.03,13.77 10.44,13.5 10.68,12.91L11.91,13.54C11.65,14.03 11.29,14.41 10.82,14.69C10.36,14.97 9.85,15.11 9.29,15.11C8.39,15.11 7.67,14.84 7.12,14.29C6.58,13.74 6.3,13 6.3,12C6.3,11.05 6.58,10.3 7.13,9.74C7.69,9.18 8.39,8.9 9.23,8.9C10.47,8.89 11.36,9.38 11.89,10.34M17.66,10.34L16.34,11.04C16.2,10.74 16,10.53 15.81,10.41C15.6,10.29 15.4,10.23 15.21,10.23C14.32,10.23 13.87,10.82 13.87,12C13.87,12.54 14,12.97 14.21,13.29C14.44,13.61 14.77,13.77 15.21,13.77C15.8,13.77 16.21,13.5 16.45,12.91L17.7,13.54C17.42,14.03 17.05,14.41 16.59,14.69C16.12,14.97 15.62,15.11 15.07,15.11C14.17,15.11 13.44,14.84 12.9,14.29C12.36,13.74 12.09,13 12.09,12C12.09,11.05 12.37,10.3 12.92,9.74C13.47,9.18 14.17,8.9 15,8.9C16.26,8.89 17.14,9.38 17.66,10.34M12,3.5A8.5,8.5 0 0,1 20.5,12A8.5,8.5 0 0,1 12,20.5A8.5,8.5 0 0,1 3.5,12A8.5,8.5 0 0,1 12,3.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z`, // mdi-creative-commons
};

const iconPath = Object.freeze({
  ...quarterIcons,
  ...themeIcons,
  ...socialIcons,
  ...miscIcons,
});

function Icon({ iconName }) {
  return (
    <svg
      style={{
        width: '1.25em',
        height: '1.25em',
        verticalAlign: '-.25em',
      }}
      viewBox="0 0 24 24"
    >
      <path d={iconPath[iconName]} fill="currentColor" />
    </svg>
  );
}

export default Icon;
