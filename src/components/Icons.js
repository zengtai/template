import * as React from "react";

export const IconHome = ({ current }) => {
  return current === true ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
};

export const IconHistory = ({ current }) => {
  return current === true ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const IconCategory = ({ current }) => {
  return current === true ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  );
};

export const IconInformation = ({ current }) => {
  return current === true ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const IconGame = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `${className} h-6 w-6` : `h-6 w-6`}
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#0DCAF0"
        d="M5 11.188a1.563 1.563 0 100-3.126 1.563 1.563 0 000 3.126z"
      ></path>
      <path
        fill="#0DCAF0"
        fillRule="evenodd"
        d="M5.625 4a5.625 5.625 0 000 11.25h8.75a5.625 5.625 0 000-11.25h-8.75zm10 3.125a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM5 12.75A3.125 3.125 0 105 6.5a3.125 3.125 0 000 6.25zm11.875-1.875a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-3.75-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm1.25 3.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const IconNew = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `${className} h-6 w-6` : `h-6 w-6`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </svg>
  );
};

export const IconArrowRight = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `${className} h-6 w-6` : `h-6 w-6`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const IconFire = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `${className} h-6 w-6` : `h-6 w-6`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ActionIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25006 7.03325H7.62611L6.78762 8.47231C6.72975 8.57262 6.67831 8.67422 6.63458 8.77839C6.44554 9.16291 6.36581 9.52171 6.23335 10.274L5.57876 13.8466H1.55223C0.695738 13.8466 0 14.5359 0 15.3847C0 16.2335 0.695738 16.9228 1.55223 16.9228H6.87378C7.62354 16.9228 8.26655 16.3916 8.40029 15.6599L8.88512 13.0171L13.1213 19.3148C13.5958 20.0221 14.5603 20.2124 15.2728 19.7417C15.9865 19.271 16.1794 18.3142 15.7036 17.6082L11.3671 11.1601C11.3716 11.1517 11.3765 11.1434 11.3813 11.135C11.3861 11.1267 11.3909 11.1183 11.3954 11.1099L12.7046 8.86455L14.1179 10.0657C14.3186 10.2354 14.5745 10.3293 14.8394 10.3293H18.3862C18.9984 10.3293 19.4948 9.83678 19.4948 9.23106C19.4948 8.62406 18.9984 8.13152 18.3862 8.13152H15.2484L12.4667 5.76781C12.2802 5.55433 12.0565 5.36914 11.7967 5.21996L11.7337 5.18395C11.3954 4.98976 11.0315 4.88045 10.6663 4.84702C10.6071 4.8393 10.5492 4.83544 10.4927 4.83544H5.76523C5.4553 4.83544 5.1608 4.96276 4.9499 5.1891L2.28912 8.04535C1.87502 8.4916 1.90203 9.18734 2.35213 9.59887C2.80224 10.0104 3.50441 9.9821 3.91851 9.53714L6.25006 7.03325ZM9.97824 2.41772C9.97824 1.08283 11.0701 0 12.4165 0C13.763 0 14.8561 1.08283 14.8561 2.41772C14.8561 3.75133 13.763 4.83544 12.4165 4.83544C11.0701 4.83544 9.97824 3.75133 9.97824 2.41772ZM8.03764 1.25263H0.321505C0.144034 1.25263 0 1.1086 0 0.931124C0 0.753654 0.144034 0.609619 0.321505 0.609619H8.03764C8.21511 0.609619 8.35914 0.753654 8.35914 0.931124C8.35914 1.1086 8.21511 1.25263 8.03764 1.25263ZM0.321505 3.26264H8.03764C8.21511 3.26264 8.35914 3.11861 8.35914 2.94113C8.35914 2.76366 8.21511 2.61963 8.03764 2.61963H0.321505C0.144034 2.61963 0 2.76366 0 2.94113C0 3.11861 0.144034 3.26264 0.321505 3.26264ZM2.89355 5.25092H0.321505C0.144034 5.25092 0 5.10689 0 4.92942C0 4.75194 0.144034 4.60791 0.321505 4.60791H2.89355C3.07102 4.60791 3.21505 4.75194 3.21505 4.92942C3.21505 5.10689 3.07102 5.25092 2.89355 5.25092Z"
        fill="#F6E011"
      />
    </svg>
  );
};

export const CasualIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82575 0.393171C9.96345 0.150005 10.2214 0 10.5 0C10.7786 0 11.0365 0.150005 11.1727 0.393171L14.24 5.83914L20.3794 7.06602C20.6533 7.11971 20.8764 7.31866 20.9619 7.58393C21.0489 7.84763 20.9841 8.13816 20.7957 8.34343L16.5508 12.9367L17.2789 19.1406C17.3121 19.417 17.1918 19.6885 16.9655 19.8528C16.7407 20.017 16.4432 20.0454 16.1899 19.9301L10.5 17.3216L4.81006 19.9301C4.55682 20.0454 4.25926 20.017 4.03452 19.8528C3.80818 19.6885 3.6879 19.417 3.72113 19.1406L4.44919 12.9367L0.20429 8.34343C0.0159444 8.13816 -0.0489478 7.84763 0.0381027 7.58393C0.123571 7.31866 0.346737 7.11971 0.62055 7.06602L6.75999 5.83914L9.82575 0.393171ZM11.4512 12.7567C11.3309 13.0852 11.0255 13.4215 10.5 13.4215C9.97453 13.4215 9.67539 13.1025 9.54877 12.7567C9.4 12.3478 8.94575 12.1362 8.53424 12.2846C8.12431 12.433 7.91222 12.8878 8.061 13.2968C8.38388 14.181 9.15467 15.0005 10.5 15.0005C11.8453 15.0005 12.6304 14.1399 12.939 13.2968C13.0878 12.8878 12.8757 12.433 12.4658 12.2846C12.0542 12.1362 11.6 12.3478 11.4512 12.7567ZM13.6639 7.895C14.5376 7.895 15.2466 8.60239 15.2466 9.474C15.2466 10.3456 14.5376 11.053 13.6639 11.053C12.7902 11.053 12.0812 10.3456 12.0812 9.474C12.0812 8.60239 12.7902 7.895 13.6639 7.895ZM7.33294 7.895C8.20661 7.895 8.91568 8.60239 8.91568 9.474C8.91568 10.3456 8.20661 11.053 7.33294 11.053C6.45927 11.053 5.7502 10.3456 5.7502 9.474C5.7502 8.60239 6.45927 7.895 7.33294 7.895Z"
        fill="#EE520F"
      />
    </svg>
  );
};

export const DefenseIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.578788 12.7811C1.54507 14.4545 3.45453 15.2308 5.17792 14.783C5.0342 14.271 4.95721 13.732 4.95721 13.1751C4.95721 9.90151 7.6148 7.24392 10.8883 7.24392C12.083 7.24392 13.1956 7.5981 14.1272 8.20635L18.2644 4.979L18.2593 4.96873C18.5159 5.41402 19.087 5.56672 19.5335 5.31008C19.9788 5.05214 20.1328 4.4811 19.8749 4.03582L17.814 0.467123C17.5574 0.0205555 16.9863 -0.13215 16.5397 0.124498C16.1036 0.37713 15.9469 0.930137 16.183 1.37236L16.1791 1.36539L6.98473 5.08808C5.63219 2.62554 2.91044 2.04679 2.91044 2.04679C2.53701 1.96723 2.17001 2.20592 2.09045 2.57934C2.01088 2.95276 2.24957 3.31977 2.62299 3.39933C2.62299 3.39933 4.62356 3.82537 5.69122 5.61292L2.2085 7.02192L2.21364 7.0309C2.13023 7.07197 2.0481 7.1156 1.96597 7.16179C0.0488089 8.26923 -0.573563 10.7869 0.578788 12.7811ZM16.1984 1.40004C16.1931 1.39086 16.188 1.38164 16.183 1.37236L16.1984 1.40004ZM15.4369 13.1755C15.4369 10.6655 13.3991 8.62769 10.8891 8.62769C8.3791 8.62769 6.34131 10.6655 6.34131 13.1755C6.34131 15.6855 8.3791 17.7246 10.8891 17.7246C13.3991 17.7246 15.4369 15.6855 15.4369 13.1755ZM13.0026 13.1755C13.0026 12.0103 12.0556 11.0633 10.8891 11.0633C9.72265 11.0633 8.77562 12.0103 8.77562 13.1755C8.77562 14.342 9.72265 15.289 10.8891 15.289C12.0556 15.289 13.0026 14.342 13.0026 13.1755Z"
        fill="#FB4D4D"
      />
    </svg>
  );
};

export const PuzzleIcon = (className) => {
  return (
    <svg
      className={className ? `h-4 w-4 ${className}` : `h-4 w-4`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.26638 16.2656C5.2118 16.3202 4.98835 17.3539 4.94494 17.6577L4.93529 17.7413C4.87099 18.2381 4.64754 18.7188 4.26654 19.0998C3.34539 20.0193 1.85194 20.0193 0.932401 19.0998C0.0128606 18.1802 0.0128606 16.6852 0.932401 15.7656C1.3134 15.3846 1.79407 15.1612 2.29081 15.0969L2.37441 15.0872C2.67824 15.0438 3.71192 14.8204 3.76658 13.7658L0 9.9992L3.7505 6.2503C3.69584 5.19572 2.66217 4.97227 2.35833 4.92886L2.27313 4.91922C1.77799 4.85492 1.29732 4.63146 0.916325 4.25046C-0.00321523 3.32931 -0.00321523 1.83587 0.916325 0.916325C1.83587 -0.00321523 3.32931 -0.00321523 4.25046 0.916325C4.63146 1.29732 4.85492 1.77799 4.91922 2.27313L4.92886 2.35833C4.97227 2.66217 5.19572 3.69584 6.2503 3.7505L9.9992 0L13.7497 3.7505C14.8043 3.69584 15.0277 2.66217 15.0711 2.35833L15.0808 2.27313C15.1451 1.77799 15.3685 1.29732 15.7495 0.916325C16.6691 -0.00321523 18.1641 -0.00321523 19.0837 0.916325C20.0032 1.83587 20.0032 3.32931 19.0837 4.25046C18.7027 4.63146 18.222 4.85492 17.7253 4.91922L17.6417 4.92886C17.3378 4.97227 16.3042 5.19572 16.2495 6.2503L20 9.9992L9.9992 20L6.26638 16.2656ZM13.7497 16.2495C13.695 15.1949 12.663 14.9715 12.3575 14.9297L12.2739 14.92C11.7772 14.8541 11.2981 14.6307 10.9171 14.2497C9.99598 13.3301 9.99598 11.8367 10.9171 10.9171C11.8367 9.99598 13.3301 9.99598 14.2497 10.9171C14.6307 11.2981 14.8541 11.7772 14.92 12.2739L14.9297 12.3575C14.9715 12.663 15.1949 13.695 16.2495 13.7497L13.7497 16.2495Z"
        fill="#E72DDF"
      />
    </svg>
  );
};

export const ShootingIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36667 16.8066V18.8746C7.36667 19.495 7.87383 20 8.5 20C9.12617 20 9.63333 19.495 9.63333 18.8746V16.8066C13.7898 16.2552 17 12.7172 17 8.4406C17 3.78279 13.1906 0 8.5 0C3.80942 0 0 3.78279 0 8.4406C0 12.7172 3.21017 16.2552 7.36667 16.8066ZM8.5 1.40677C12.41 1.40677 15.5833 4.55792 15.5833 8.4406C15.5833 12.3233 12.41 15.4744 8.5 15.4744C4.59 15.4744 1.41667 12.3233 1.41667 8.4406C1.41667 4.55792 4.59 1.40677 8.5 1.40677ZM8.5 3.09489C5.52925 3.09489 3.11667 5.49061 3.11667 8.4406C3.11667 11.3906 5.52925 13.7863 8.5 13.7863C11.4707 13.7863 13.8833 11.3906 13.8833 8.4406C13.8833 5.49061 11.4707 3.09489 8.5 3.09489ZM8.5 4.50165C10.6887 4.50165 12.4667 6.26715 12.4667 8.4406C12.4667 10.6141 10.6887 12.3795 8.5 12.3795C6.31125 12.3795 4.53333 10.6141 4.53333 8.4406C4.53333 6.26715 6.31125 4.50165 8.5 4.50165ZM8.5 6.11943C9.79058 6.11943 10.8375 7.15903 10.8375 8.4406C10.8375 9.72216 9.79058 10.7618 8.5 10.7618C7.20942 10.7618 6.1625 9.72216 6.1625 8.4406C6.1625 7.15903 7.20942 6.11943 8.5 6.11943Z"
        fill="#0BE3B0"
      />
    </svg>
  );
};

export const SimulationIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.48655 6.30815L4.87792 6.77975C1.24022 9.70072 1.13292 10.0099 0.336465 10.6469C0.22782 10.7339 0.10026 10.6018 0.10026 10.6018C-0.607012 9.89423 2.62746 5.37359 3.55094 4.20444L3.09285 3.70662C2.85124 3.46528 2.82638 3.09799 3.03745 2.88692L3.80175 2.12262C4.01282 1.91155 4.3801 1.93641 4.62171 2.17803L5.04062 2.56342L6.80407 0.649165C7.16486 0.288367 7.75052 0.288367 8.11132 0.649165L9.41857 1.95641C9.77937 2.31694 9.77937 2.90287 9.41857 3.26339L7.45431 4.78442L11.4628 8.47266L14.2141 5.94113L11.7877 2.94449C11.6839 2.84071 11.6839 2.67206 11.7877 2.56828C11.7877 2.56828 12.5222 1.45157 12.9374 1.03645C13.3246 0.649165 14.2781 0.077835 14.2781 0.077835C14.3819 -0.025945 14.5503 -0.025945 14.6541 0.077835L17.8266 2.61693L18.1718 2.29938C18.4131 2.05803 18.7807 2.03317 18.9915 2.24397L19.756 3.00854C19.9668 3.21934 19.942 3.5869 19.7006 3.82824L19.3831 4.17336L21.9222 7.34595C22.0259 7.44973 22.0259 7.6181 21.9222 7.72188C21.9222 7.72188 21.3508 8.67536 20.9635 9.06264C20.5484 9.47776 19.4317 10.2123 19.4317 10.2123C19.3279 10.3161 19.1593 10.3161 19.0555 10.2123L16.0589 7.78593L6.48948 18.1858C6.00653 18.669 4.69847 18.1453 4.27659 17.7234C3.85472 17.3015 3.33095 15.9935 3.81418 15.5105L9.30506 10.458L5.48655 6.30815ZM14.4051 11.1799L12.1871 13.5903L16.304 18.0645C16.7869 18.5474 18.095 18.0237 18.5169 17.6018C18.9388 17.1799 19.4623 15.8721 18.9793 15.3889L14.4051 11.1799Z"
        fill="#57A40A"
      />
    </svg>
  );
};

export const SportsIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.48143 0 0 4.48143 0 10C0 15.5186 4.48143 20 10 20C15.5186 20 20 15.5186 20 10C20 4.48143 15.5186 0 10 0ZM4.03714 3.84429L4.13714 4.49714C4.51714 6.50429 5.15571 8.42 6.01429 10.2129L6.58143 11.39C7.89 13.82 9.60143 16.0029 11.6257 17.8471L12.1286 18.3043C11.4486 18.4786 10.7343 18.5714 10 18.5714C8.68286 18.5714 7.43429 18.2743 6.31857 17.7414L6.34 17.4986L6.33143 15.6229C6.21571 14.9657 6.10143 14.3086 5.98714 13.6529L5.45857 12.4114L6.58143 11.39L6.02571 10.2343L5.96714 10.2771L4.85857 11.2857L4.43143 10.7229C4.15143 10.4843 3.87 10.2443 3.59 10.0057L1.67571 8.93L1.50714 8.83857C1.77143 6.89 2.69143 5.14857 4.03714 3.84429ZM8.57714 8.42714H8.57857L8.80286 9.06286L9.11857 9.54571C10.7614 12.1229 13.2314 12.7714 15.6486 13.2386L17.3614 13.5757L17.74 13.6857C16.86 15.5286 15.3414 17.0086 13.47 17.8386L13.3786 17.77L13.02 17.4429C10.8057 15.5543 8.96143 13.2443 7.59714 10.6457L7.58143 10.6143L8.54286 9.89429L9.11857 9.54571L8.80286 9.06286L8.57714 8.42714ZM5.10571 17.0357C4.33 16.4943 3.64714 15.8286 3.08714 15.0671L3.14571 14.9829L4.52571 13.37C4.97571 14.3643 5.11 15.3771 5.11 16.3429L5.10571 17.0357ZM1.43143 10.2043L2.75286 10.92C2.99286 11.1157 3.23143 11.31 3.47143 11.5057L3.96571 12.1471L2.44 13.8686L2.38714 13.9414C1.80429 12.8171 1.46286 11.5486 1.43143 10.2043ZM17.72 6.27429C18.2657 7.40143 18.5714 8.66429 18.5714 10C18.5714 10.8843 18.4371 11.7357 18.1886 12.5386L17.7829 12.4129L15.8829 12.0229C13.7929 11.6186 11.6186 11.1214 10.2186 8.89429L10.21 8.88143C12.3229 7.69 14.64 6.82429 17.1057 6.39429L17.72 6.27429ZM9.66 1.43571L8.95429 3.42429C8.36714 5.06714 7.94857 6.85 8.57429 8.41714L8.57714 8.42714L7.85143 8.86857L7.03429 9.48C6.18143 7.62429 5.57429 5.63429 5.24429 3.55143L5.15 2.93429C6.44286 2.04429 7.99 1.5 9.66 1.43571ZM10.9343 1.47857C13.4743 1.75429 15.6829 3.14143 17.0629 5.14429L16.4557 5.26286C14.0371 5.72714 11.76 6.59429 9.67286 7.76143C9.43143 7.15 9.45 6.48571 9.56429 5.82C9.73857 4.80714 10.1314 3.79 10.4871 2.85857L10.9343 1.47857Z"
        fill="#F2338F"
      />
    </svg>
  );
};

export const StrategyIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.63 12.5576C12.5762 12.5576 10.9088 14.225 10.9088 16.2788C10.9088 18.3326 12.5762 20 14.63 20C16.6838 20 18.3512 18.3326 18.3512 16.2788C18.3512 14.225 16.6838 12.5576 14.63 12.5576ZM13.1043 5.95248H10.4337L14.3409 0L18.2482 5.95248H15.2955C14.9792 7.68713 14.3295 8.97095 13.5237 9.94132C11.8119 12.0052 9.33877 12.6578 7.55403 13.0414C6.07986 13.3591 2.14684 14.1735 2.14684 18.5172C2.14684 19.1083 1.66595 19.5907 1.07342 19.5907C0.480893 19.5907 0 19.1083 0 18.5172C0 12.6578 5.11235 11.3725 7.10176 10.9432C8.51438 10.6383 10.5152 10.2047 11.872 8.5702C12.4188 7.91041 12.851 7.05739 13.1043 5.95248ZM14.63 14.2751C15.7364 14.2751 16.6337 15.1725 16.6337 16.2788C16.6337 17.3837 15.7364 18.2825 14.63 18.2825C13.5237 18.2825 12.6263 17.3837 12.6263 16.2788C12.6263 15.1725 13.5237 14.2751 14.63 14.2751ZM4.18062 3.91871L1.66738 1.51281C1.32532 1.18363 0.781451 1.19651 0.4537 1.53857C0.125948 1.88064 0.137398 2.4245 0.479462 2.75225L2.93975 5.10806L0.479462 7.46386C0.137398 7.79161 0.125948 8.33548 0.4537 8.67754C0.781451 9.02104 1.32532 9.03249 1.66738 8.70474L4.18062 6.29741L6.69386 8.70474C7.03736 9.03249 7.58122 9.02104 7.90897 8.67754C8.23673 8.33548 8.22384 7.79161 7.88178 7.46386L5.42293 5.10806L7.88178 2.75225C8.22384 2.4245 8.23673 1.88064 7.90897 1.53857C7.58122 1.19651 7.03736 1.18363 6.69386 1.51281L4.18062 3.91871Z"
        fill="#11A8C9"
      />
    </svg>
  );
};

export const RacingIcon = (className) => {
  return (
    <svg
      className={className ? `h-5 w-5 ${className}` : `h-5 w-5`}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#3DA2FF"
        d="M7.212 4.896V8.69c1.287.076 2.613.417 3.9.759V5.655c-1.287-.342-2.613-.683-3.9-.76zm0 0V8.69c1.287.076 2.613.417 3.9.759V5.655c-1.287-.342-2.613-.683-3.9-.76zM18.402.91c-.858.455-1.755.645-2.769.645-1.364 0-2.728-.38-4.21-.759C9.863.417 8.265 0 6.628 0 5.224 0 3.977.304 2.807.91l-.585.304v-.151C2.222.493 1.715 0 1.092 0 .507 0 0 .493 0 1.063v17.836c0 .608.507 1.063 1.092 1.063.623 0 1.091-.493 1.091-1.063v-3.833l1.638-.873c.857-.455 1.754-.645 2.768-.645 1.364 0 2.729.38 4.21.76 1.56.417 3.158.834 4.796.834 1.403 0 2.65-.303 3.82-.91l.585-.304V.076L18.402.91zm.506 4.744c-1.286.683-2.612.873-3.898.759v3.795c1.286.076 2.612-.076 3.898-.76v3.796a6.944 6.944 0 01-3.275.797c-.194 0-.39 0-.623-.038v-3.795c-1.287-.076-2.612-.418-3.899-.76v3.796c-1.286-.342-2.612-.683-3.899-.76h-.039.04V8.692c-1.287-.076-2.613.076-3.9.759V5.655c1.287-.683 2.613-.873 3.9-.76V1.102c1.286.075 2.612.417 3.898.759v3.795c1.287.341 2.612.683 3.899.759V2.619h.623a6.944 6.944 0 003.275-.797v3.833zm-11.696-.76v3.796c1.287.076 2.613.417 3.9.759V5.655c-1.287-.342-2.613-.683-3.9-.76zm0 0v3.796c1.287.076 2.613.417 3.9.759V5.655c-1.287-.342-2.613-.683-3.9-.76zm0 0v3.796c1.287.076 2.613.417 3.9.759V5.655c-1.287-.342-2.613-.683-3.9-.76z"
      ></path>
    </svg>
  );
};
