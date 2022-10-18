import clsx from 'clsx'
import * as React from 'react'

export const iconMap = Object.freeze({
  Category: (
    <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  ),
  Customer: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
    </svg>
  ),
  Employee: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M304 64c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z" />
    </svg>
  ),
  EmployeeTerritory: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M320 64c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z" />
    </svg>
  ),
  OrderDetail: (
    <>
      <path d="M6.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z" />
      <circle cx="1.75" cy="7.29" r="1.42" />
      <circle cx="1.75" cy="12.58" r="1.42" />
      <circle cx="1.75" cy="17.87" r="1.42" />
    </>
  ),
  Product: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
    </svg>
  ),
  Region: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM352 208c0-44.13-35.88-80-80-80L184 128c-13.25 0-24 10.75-24 24v208c0 13.25 10.75 24 24 24s24-10.75 24-24v-72h59.79l38.46 82.19C310.3 378.9 319 384 328 384c3.438 0 6.875-.7187 10.19-2.25c12-5.625 17.16-19.91 11.56-31.94l-34.87-74.5C337.1 261.1 352 236.3 352 208zM272 240h-64v-64h64c17.66 0 32 14.34 32 32S289.7 240 272 240z" />
    </svg>
  ),
  SalesOrder: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
      </g>
    </svg>
  ),
  Shipper: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M192 32c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V64h48c26.5 0 48 21.5 48 48V240l44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240V112c0-26.5 21.5-48 48-48h48V32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7V128H160v90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
    </svg>
  ),
  Supplier: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
    </svg>
  ),
  Territory: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
    </svg>
  ),
  Dashboard: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 20"
      fill="currentColor"
      className="h-3 w-3"
    >
      <path
        fillRule="evenodd"
        d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  arrow_back: (
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  ),
  arrow_forward: (
    <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
  ),
  cabin_bag: (
    <path d="M14.5 4H15.5V2.5H8.5V4H9.5V8.95239H11V4H13V8.95239H14.5V4ZM8 10.4524H16C16.2761 10.4524 16.5 10.6763 16.5 10.9524V19.3334C16.5 19.6095 16.2761 19.8334 16 19.8334H8C7.72386 19.8334 7.5 19.6095 7.5 19.3334V10.9524C7.5 10.6763 7.72386 10.4524 8 10.4524ZM6 10.9524C6 9.84786 6.89543 8.95243 8 8.95243H16C17.1046 8.95243 18 9.84786 18 10.9524V19.3334C18 20.438 17.1046 21.3334 16 21.3334H15.5714V22H13.5714V21.3334H10.5714V22H8.57141V21.3334H8C6.89543 21.3334 6 20.438 6 19.3334V10.9524Z" />
  ),
  changelog: (
    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
  ),
  check: (
    <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" />
  ),
  check_circle: (
    <>
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M16.95,10.23l-5.66,5.66 c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l2.12,2.12l4.95-4.95 c0.39-0.39,1.02-0.39,1.41,0C17.34,9.21,17.34,9.84,16.95,10.23z" />
    </>
  ),
  checked_bag: (
    <path d="M12.9036 7.63459H10.9806H10.2402C9.92692 7.63459 9.67294 7.3806 9.67294 7.06729C9.67294 6.75399 9.92692 6.5 10.2402 6.5H10.9806H12.9036H13.644C13.9573 6.5 14.2113 6.75399 14.2113 7.06729C14.2113 7.3806 13.9573 7.63459 13.644 7.63459H12.9036ZM13.644 5H10.2402C9.0985 5 8.17294 5.92556 8.17294 7.06729C8.17294 7.26406 8.20043 7.45441 8.25178 7.63471H6C4.89543 7.63471 4 8.53014 4 9.6347V16.9806C4 18.0852 4.89543 18.9806 6 18.9806H17.8842C18.9888 18.9806 19.8842 18.0852 19.8842 16.9806V9.63471C19.8842 8.53014 18.9888 7.63471 17.8842 7.63471H15.6324C15.6838 7.45441 15.7113 7.26406 15.7113 7.06729C15.7113 5.92556 14.7857 5 13.644 5ZM6 9.13471H17.8842C18.1604 9.13471 18.3842 9.35857 18.3842 9.63471V16.9806C18.3842 17.2567 18.1604 17.4806 17.8842 17.4806H6C5.72386 17.4806 5.5 17.2567 5.5 16.9806V9.6347C5.5 9.35856 5.72386 9.13471 6 9.13471Z" />
  ),
  chrome_reader: (
    <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14c0 .55-.45 1-1 1h-8V6h8c.55 0 1 .45 1 1v11zm-1.75-8.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" />
  ),
  circle: <circle cx="12" cy="12" r="3" />,
  close: (
    <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
  ),
  connect: (
    <svg
      className="group-hover:stroke-DrivlyGreen"
      width="24"
      height="24"
      viewBox="0 0 92 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.0543" cy="17.054" r="4.73959" fill="#EDEDED" />
      <circle cx="74.7889" cy="17.054" r="4.73959" fill="#EDEDED" />
      <circle cx="17.0543" cy="36.0208" r="4.73959" fill="#EDEDED" />
      <circle cx="74.7889" cy="36.0208" r="4.73959" fill="#EDEDED" />
      <circle cx="17.0543" cy="54.9793" r="4.73959" fill="#EDEDED" />
      <circle cx="74.7889" cy="54.9793" r="4.73959" fill="#EDEDED" />
      <circle cx="17.0543" cy="73.9378" r="4.73959" fill="#EDEDED" />
      <circle cx="74.7889" cy="73.9378" r="4.73959" fill="#EDEDED" />
      <circle cx="89.3717" cy="35.9552" r="2.3698" fill="#EDEDED" />
      <circle cx="2.3698" cy="35.9552" r="2.3698" fill="#EDEDED" />
      <circle cx="89.3717" cy="54.507" r="2.3698" fill="#EDEDED" />
      <circle cx="2.3698" cy="54.9865" r="2.3698" fill="#EDEDED" />
      <circle cx="36.3765" cy="35.5469" r="7.10939" fill="#EDEDED" />
      <circle cx="36.4059" cy="73.9378" r="4.73959" fill="#EDEDED" />
      <circle cx="36.4059" cy="17.054" r="4.73959" fill="#EDEDED" />
      <circle cx="36.435" cy="2.3698" r="2.3698" fill="#EDEDED" />
      <circle cx="36.435" cy="88.6305" r="2.3698" fill="#EDEDED" />
      <circle cx="36.3765" cy="54.6084" r="7.10939" fill="#EDEDED" />
      <circle cx="55.3933" cy="35.5469" r="7.10939" fill="#EDEDED" />
      <circle cx="55.4225" cy="73.9378" r="4.73959" fill="#EDEDED" />
      <circle cx="55.4225" cy="17.054" r="4.73959" fill="#EDEDED" />
      <circle cx="55.4665" cy="2.3698" r="2.3698" fill="#EDEDED" />
      <circle cx="55.4516" cy="88.6305" r="2.3698" fill="#EDEDED" />
      <circle cx="55.3933" cy="54.6084" r="7.10939" fill="#EDEDED" />
      <circle
        cx="46"
        cy="45"
        r="29"
        fill="#F7F6FA"
        stroke="white"
        strokeWidth="1.81992"
      />
      <rect
        x="39.873"
        y="61.0576"
        width="31.4927"
        height="3.37422"
        rx="1.68711"
        transform="rotate(-90 39.873 61.0576)"
        fill="#060611"
        className="group-hover:fill-DrivlyGreen"
      />
      <rect
        width="13.2658"
        height="3.37422"
        rx="1.68711"
        transform="matrix(0.707107 0.707107 0.707107 -0.707107 32 52.1963)"
        fill="#060611"
        className="group-hover:fill-DrivlyGreen"
      />
      <rect
        x="52.7964"
        y="29.5176"
        width="31.4927"
        height="3.37422"
        rx="1.68711"
        transform="rotate(90 52.7964 29.5176)"
        fill="#060611"
        className="group-hover:fill-DrivlyGreen"
      />
      <rect
        width="13.2658"
        height="3.37422"
        rx="1.68711"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 60.6694 38.3799)"
        fill="#060611"
        className="group-hover:fill-DrivlyGreen"
      />
    </svg>
  ),
  copy: (
    <path d="M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59zM15 12h4.5L14 6.5V11c0 .55.45 1 1 1z" />
  ),
  dash: (
    <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
  ),
  docs_api_reference: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 21"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
        clipRule="evenodd"
      />
    </svg>
  ),
  docs_guides: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" />
      <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" />
      <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" />
    </svg>
  ),
  docs_home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M14.916 2.404a.75.75 0 01-.32 1.012l-.596.31V17a1 1 0 01-1 1h-2.26a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H2V9.957a.75.75 0 01-.596-1.372L2 8.275V5.75a.75.75 0 011.5 0v1.745l10.404-5.41a.75.75 0 011.012.32zM15.861 8.57a.75.75 0 01.736-.025l1.999 1.04A.75.75 0 0118 10.957V16.5h.25a.75.75 0 110 1.5h-2a.75.75 0 01-.75-.75V9.21a.75.75 0 01.361-.64z" />
    </svg>
  ),
  edit: (
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </>
  ),
  entertainment: (
    <path d="M9.50001 7.83333V14.5L15.3333 11.1667L9.50001 7.83333ZM19.5 4.5H4.50001C3.58334 4.5 2.83334 5.25 2.83334 6.16667V16.1667C2.83334 17.0833 3.58334 17.8333 4.50001 17.8333H8.66668V19.5H15.3333V17.8333H19.5C20.4167 17.8333 21.1667 17.0833 21.1667 16.1667V6.16667C21.1667 5.25 20.4167 4.5 19.5 4.5ZM19.5 16.1667H4.50001V6.16667H19.5V16.1667Z" />
  ),
  error_outline: (
    <path d="M0 12C0 5.364 5.364 0 12 0C18.636 0 24 5.364 24 12C24 18.636 18.636 24 12 24C5.364 24 0 18.636 0 12ZM15.469 17.16C15.937 17.628 16.693 17.628 17.161 17.16C17.617 16.692 17.617 15.924 17.161 15.468L13.693 12L17.161 8.53204C17.629 8.06404 17.629 7.30804 17.161 6.84004C16.693 6.37204 15.937 6.37204 15.469 6.84004L12.001 10.308L8.53295 6.84004C8.06495 6.37204 7.30895 6.37204 6.84095 6.84004C6.37295 7.30804 6.37295 8.06404 6.84095 8.53204L10.309 12L6.84095 15.468C6.37295 15.936 6.37295 16.692 6.84095 17.16C7.30895 17.628 8.06495 17.628 8.53295 17.16L12.001 13.692L15.469 17.16Z" />
  ),
  fold_more: (
    <path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
  ),
  help_center: (
    <>
      <rect fill="none" height="24" width="24" />
      <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12.01,18 c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25c0.71,0,1.25,0.54,1.25,1.25C13.25,17.43,12.72,18,12.01,18z M15.02,10.6 c-0.76,1.11-1.48,1.46-1.87,2.17c-0.1,0.18-0.16,0.32-0.19,0.63c-0.05,0.45-0.45,0.78-0.9,0.78H12c-0.52,0-0.93-0.44-0.88-0.96 c0.03-0.34,0.11-0.69,0.3-1.03c0.49-0.87,1.42-1.39,1.96-2.16c0.57-0.81,0.25-2.33-1.37-2.33c-0.71,0-1.18,0.36-1.47,0.79 c-0.25,0.36-0.69,0.53-1.1,0.36l0,0C8.91,8.64,8.72,8,9.04,7.54C9.65,6.65,10.67,6,11.99,6c1.48,0,2.49,0.67,3.01,1.52 C15.44,8.24,15.7,9.59,15.02,10.6z" />
    </>
  ),
  highlight_off: (
    <>
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.29,14.89 c0.39,0.39,0.39,1.02,0,1.41c-0.39,0.39-1.02,0.39-1.41,0L12,13.41l-2.89,2.89c-0.39,0.39-1.02,0.39-1.41,0 c-0.39-0.39-0.39-1.02,0-1.41L10.59,12L7.71,9.11c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0L12,10.59l2.89-2.89 c0.39-0.39,1.02-0.39,1.41,0c0.39,0.39,0.39,1.02,0,1.41L13.41,12L16.29,14.89z" />
    </>
  ),
  info: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z" />
  ),
  info_outline: (
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  ),
  keyboard_arrow_down: (
    <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" />
  ),
  keyboard_arrow_left: (
    <path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" />
  ),
  keyboard_arrow_right: (
    <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
  ),
  keyboard_arrow_up: (
    <path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z" />
  ),
  launch: (
    <>
      <path d="M17.3666 18.8994H5.0969V7.40137H12.0001V5.86847H5.0969C4.69102 5.86949 4.30212 6.03145 4.01548 6.31881C3.72884 6.60618 3.56787 6.99549 3.56787 7.40137V18.8994C3.56787 19.3053 3.72884 19.6946 4.01548 19.982C4.30212 20.2694 4.69102 20.4313 5.0969 20.4323H17.3614C17.5635 20.4335 17.7638 20.3948 17.9508 20.3183C18.1378 20.2418 18.3079 20.129 18.4512 19.9866C18.5945 19.8441 18.7082 19.6747 18.7858 19.4882C18.8634 19.3016 18.9034 19.1015 18.9034 18.8994V12.0001H17.3666V18.8994Z" />
      <path d="M15.0674 3.56781V5.10071H17.8158L12.2249 10.6917L13.3087 11.7756L18.9036 6.18587V8.93168H20.4365V3.56781H15.0674Z" />
    </>
  ),
  lie_flat_seat: (
    <path d="M6.16667 12.8333C6.81667 12.8333 7.45834 12.5833 7.95001 12.0833C8.91667 11.0916 8.90001 9.51659 7.91667 8.54992C7.42501 8.07492 6.79167 7.83325 6.16667 7.83325C5.51667 7.83325 4.87501 8.08325 4.38334 8.58325C3.41667 9.57492 3.43334 11.1499 4.41667 12.1166C4.90834 12.5916 5.54167 12.8333 6.16667 12.8333ZM5.57501 9.74992C5.73334 9.59159 5.94167 9.49992 6.16667 9.49992C6.38334 9.49992 6.59167 9.58325 6.75001 9.73325C7.08334 10.0583 7.08334 10.5749 6.76667 10.9083C6.60001 11.0749 6.39167 11.1666 6.16667 11.1666C5.95001 11.1666 5.74167 11.0833 5.58334 10.9333C5.25001 10.5999 5.25001 10.0833 5.57501 9.74992ZM17 7.83325H9.50001V12.8333H20.3333V11.1666C20.3333 9.32492 18.8417 7.83325 17 7.83325ZM11.1667 11.1666V9.49992H17C17.9167 9.49992 18.6667 10.2499 18.6667 11.1666H11.1667ZM3.66667 15.3333H8.66667V16.9999H15.3333V15.3333H20.3333V13.6666H3.66667V15.3333Z" />
  ),
  link: (
    <path d="M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z" />
  ),

  menu: (
    <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
  ),
  menu_item_child: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
    />
  ),
  menu_item_parent: (
    <path d="M15.9286 11.3814C16.4048 11.6563 16.4048 12.3437 15.9286 12.6186L10.5714 15.7115C10.0952 15.9865 9.5 15.6428 9.5 15.0929L9.5 8.90705C9.5 8.3572 10.0952 8.01353 10.5714 8.28846L15.9286 11.3814Z" />
  ),
  more_vert: (
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  ),
  oauth: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1"
      className="h-5 w-5 stroke-[#4b4b55] group-hover:stroke-DrivlyGreen"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  ),
  phone: (
    <path d="M20.51 15.38C19.28 15.38 18.09 15.18 16.98 14.82C16.63 14.7 16.24 14.79 15.97 15.06L14.4 17.03C11.57 15.68 8.92 13.13 7.51 10.2L9.46 8.54C9.73 8.26 9.81 7.87 9.7 7.52C9.33 6.41 9.14 5.22 9.14 3.99C9.14 3.45 8.69 3 8.15 3H4.69C4.15 3 3.5 3.24 3.5 3.99C3.5 13.28 11.23 21 20.51 21C21.22 21 21.5 20.37 21.5 19.82V16.37C21.5 15.83 21.05 15.38 20.51 15.38Z" />
  ),
  play_circle_filled: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4z" />
  ),
  plug: (
    <path d="M15.6667 9.25V13.5217L12.4583 16.7392V18.4167H11.5417V16.7392L8.33333 13.5125V9.25H15.6667ZM15.6667 3.75H13.8333V7.41667H10.1667V3.75H8.33333V7.41667H8.32417C7.325 7.4075 6.5 8.2325 6.5 9.23167V14.2917L9.70833 17.5V20.25H14.2917V17.5L17.5 14.2825V9.25C17.5 8.24167 16.675 7.41667 15.6667 7.41667V3.75Z" />
  ),
  public: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  ),
  right_arrow: (
    <path d="M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z" />
  ),
  search: (
    <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  ),
  star: (
    <path d="M12.6457 2.39623L15.6197 8.28883L21.3438 8.85595C21.48 8.86728 21.6102 8.91742 21.7188 9.00043C21.8275 9.08345 21.9101 9.19586 21.9569 9.32437C22.0036 9.45288 22.0126 9.59209 21.9827 9.72553C21.9528 9.85898 21.8853 9.98106 21.7882 10.0773L17.0774 14.7468L18.8239 21.0918C18.8597 21.2264 18.8558 21.3685 18.8127 21.5009C18.7696 21.6333 18.6892 21.7504 18.5811 21.8382C18.4731 21.926 18.3419 21.9807 18.2035 21.9958C18.0651 22.0108 17.9253 21.9855 17.8009 21.923L11.9978 19.0491L6.20265 21.9194C6.07826 21.982 5.93845 22.0073 5.80003 21.9922C5.66161 21.9772 5.53048 21.9225 5.42241 21.8347C5.31434 21.7469 5.23393 21.6297 5.19086 21.4973C5.14779 21.3649 5.14388 21.2229 5.17962 21.0883L6.92615 14.7432L2.21184 10.0738C2.11472 9.9775 2.04721 9.85542 2.01731 9.72198C1.98742 9.58854 1.99638 9.44932 2.04314 9.32082C2.08989 9.19231 2.17249 9.07989 2.28115 8.99688C2.38981 8.91386 2.51998 8.86372 2.65625 8.8524L8.38027 8.28527L11.3498 2.39623C11.4109 2.27694 11.5037 2.17682 11.618 2.10691C11.7324 2.03699 11.8638 2 11.9978 2C12.1318 2 12.2632 2.03699 12.3775 2.10691C12.4918 2.17682 12.5847 2.27694 12.6457 2.39623Z" />
  ),
  status: (
    <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" />
  ),
  switch: (
    <path d="M11.7407 7.19438L13.8622 5.03438C14.1494 4.74188 14.1421 4.26188 13.8622 3.96938C13.5749 3.67688 13.1108 3.67687 12.8236 3.96937L9.44253 7.41188C9.15525 7.70438 9.15525 8.17687 9.44253 8.46937L12.8236 11.9119C13.1108 12.2044 13.5749 12.2044 13.8622 11.9119C14.1494 11.6194 14.1494 11.1469 13.8622 10.8544L11.7407 8.69438H18.482C18.8963 8.69438 19.232 8.35859 19.232 7.94438C19.232 7.53016 18.8963 7.19438 18.482 7.19438H11.7407ZM11.9913 16.9444L5.25 16.9444C4.83579 16.9444 4.5 16.6086 4.5 16.1944C4.5 15.7802 4.83579 15.4444 5.25 15.4444L11.9913 15.4444L9.86987 13.2844C9.58259 12.9919 9.58259 12.5194 9.86987 12.2269C10.1571 11.9344 10.6212 11.9344 10.9085 12.2269L14.2895 15.6694C14.5768 15.9619 14.5768 16.4344 14.2895 16.7269L10.9085 20.1694C10.6212 20.4619 10.1571 20.4619 9.86987 20.1694C9.58996 19.8769 9.5826 19.3969 9.86987 19.1044L11.9913 16.9444Z" />
  ),
  thumbs_up: (
    <path d="M2 20H5.45455V9.8H2V20ZM21 10.65C21 9.715 20.2227 8.95 19.2727 8.95H13.8232L14.6436 5.0655L14.6695 4.7935C14.6695 4.445 14.5227 4.122 14.2895 3.8925L13.3741 3L7.69136 8.6015C7.37182 8.9075 7.18182 9.3325 7.18182 9.8V18.3C7.18182 19.235 7.95909 20 8.90909 20H16.6818C17.3986 20 18.0118 19.575 18.2709 18.963L20.8791 12.9705C20.9568 12.775 21 12.571 21 12.35V10.65Z" />
  ),
  undo: (
    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88 3.16 0 5.89 1.84 7.19 4.5.27.56.91.84 1.5.64.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z" />
  ),
  unfold_less: (
    <path d="M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.02-.39-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6c-.39-.39-1.02-.39-1.41 0L12 7.17 9.53 4.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z" />
  ),
  unfold_more: (
    <path d="M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7c-.39-.39-1.02-.39-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L12 18.17z" />
  ),
  vault: (
    <>
      <path d="M15.935,6.06H8.065a2,2,0,0,0-2,2v6a1.993,1.993,0,0,0,2,2h7.87a2,2,0,0,0,2-2v-6A2.006,2.006,0,0,0,15.935,6.06Zm1,8a1,1,0,0,1-1,1H8.065a.99.99,0,0,1-1-1v-6a1,1,0,0,1,1-1h7.87a1,1,0,0,1,1,1Z" />
      <path d="M18.435,3.06H5.565a2.507,2.507,0,0,0-2.5,2.5v11a2.5,2.5,0,0,0,2.5,2.5v.38a1.5,1.5,0,0,0,1.5,1.5h1.43a1.5,1.5,0,0,0,1.5-1.5v-.38h4v.38a1.5,1.5,0,0,0,1.5,1.5h1.44a1.5,1.5,0,0,0,1.5-1.5v-.38a2.5,2.5,0,0,0,2.5-2.5v-11A2.507,2.507,0,0,0,18.435,3.06ZM8.995,19.44a.5.5,0,0,1-.5.5H7.065a.5.5,0,0,1-.5-.5v-.38h2.43Zm8.44,0a.5.5,0,0,1-.5.5H15.5a.508.508,0,0,1-.5-.5v-.38h2.44Zm2.5-2.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-11a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z" />
      <path d="M14.265,10.56h-.61A1.656,1.656,0,0,0,12.5,9.4V8.79a.491.491,0,0,0-.5-.48.5.5,0,0,0-.5.48V9.4a1.656,1.656,0,0,0-1.16,1.16h-.61a.5.5,0,0,0-.48.5.491.491,0,0,0,.48.5h.61a1.656,1.656,0,0,0,1.16,1.16v.62a.489.489,0,0,0,.5.47.483.483,0,0,0,.5-.47v-.62a1.622,1.622,0,0,0,1.16-1.16h.61a.485.485,0,0,0,.48-.5A.491.491,0,0,0,14.265,10.56ZM12,11.81a.75.75,0,1,1,.75-.75A.749.749,0,0,1,12,11.81Z" />
    </>
  ),
  warning: (
    <path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
  ),
  warning_circle: (
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
  ),
  wifi: (
    <path d="M2.83333 9.50005L4.49999 11.1667C8.64166 7.02505 15.3583 7.02505 19.5 11.1667L21.1667 9.50005C16.1083 4.44172 7.89999 4.44172 2.83333 9.50005ZM9.49999 16.1667L12 18.6667L14.5 16.1667C13.125 14.7834 10.8833 14.7834 9.49999 16.1667ZM6.16666 12.8334L7.83333 14.5C10.1333 12.2 13.8667 12.2 16.1667 14.5L17.8333 12.8334C14.6167 9.61672 9.39166 9.61672 6.16666 12.8334Z" />
  ),
})

export const getIconPath = (name) => {
  if (!(name in iconMap)) {
    // eslint-disable-next-line no-console
    console.warn(`The icon ${name} was not found.`)
    return null
  }
  return iconMap[name]
}

export const MappedIcons = ({
  name,
  size,
  color = 'currentColor',
  className, 
}, props) => {
  return (
    <span {...props}>
      <svg
        className={clsx('ff-icon', className)}
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill={color}
      >
        {getIconPath(name)}

        <style>{`
      .ff-icon {
        display: block;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
    `}</style>
      </svg>
    </span>
  )
}
