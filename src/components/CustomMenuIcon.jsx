import React from 'react'

const CustomMenuIcon = ({ setOpen, theme }) => {
  return (
    <svg
      onClick={() => setOpen((prev) => !prev)}
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="28"
      height="28"
      viewBox="0 0 250 240"
    >
      <path
        d="M546.89261,493.61977c-8.47373-13.35225-6.2304-46.91423-3.77126-62.13238,3.36606-19.88253,7.21988-30.39563,15.72-45.89863a66.68114,66.68114,0,0,1,25.5848-28.01359c-14.17024,2.76054-26.58491,10.74241-35.93643,21.62277-9.14634,9.89013-16.83395,21.19254-21.40712,33.92529a107.64017,107.64017,0,0,0-3.61253,65.213c3.6875,13.63255,12.37552,25.38022,23.66048,33.75107a65.81724,65.81724,0,0,0,17.70627,10.50217q6.23965,2.54844,12.66416,4.611c-1.02681-.75517-2.50041-1.96622-3.26408-2.52758C561.79738,515.5195,553.85724,506.97384,546.89261,493.61977Z"
        transform="translate(-481.4155 -329.5886)"
        fill={`${theme.primary.main}`}
      />
      <path
        d="M715.31074,404.71779c-8.82491-30.74635-36.49369-59.91772-73.80417-57.86606-1.44051-.01047-2.88315.03612-4.32306.04188q5.84174.87643,11.60213,2.20145c16.6221,3.75624,28.30649,11.99945,38.36643,24.56846,13.37441,16.48247,20.22157,42.0046,18.13424,59.87644-.31384,4.29211-2.94963,15.75433-5.91929,24.71886-.72572,2.84825-6.43953,17.12336-4.945,13.53193-3.91089,10.261-17.91753,31.11376-20.45649,34.37268-24.21835,30.42841-59.86886,46.463-93.337,49.38262-24.63569.74044-36.67642-2.37992-51.94541-17.838-12.57675-13.59157-21.55312-27.54464-26.02491-46.31582-1.47087-6.138-2.57114-23.08773-1.28906-36.56624.10714-.84182.17938-1.41138.224-1.76635.24555-1.82508.57973-4.45176.7843-6.09943,4.307-23.721,11.87865-48.04818,20.2249-63.34039,8.65585-14.63038,19.58872-24.06613,36.61875-34.13108,18.832-9.10992,41.849-14.23489,63.15691-19.90013-22.76477,1.74677-45.96055,3.08363-67.87971,9.903-18.008,6.88328-35.46142,17.30061-46.67869,33.34738-9.36427,13.13174-14.72539,28.676-19.50738,43.94562-7.36224,25.45293-9.133,52.5954-3.839,78.62654,7.36952,27.63676,27.57682,57.35781,54.39908,68.92353,23.44224,12.23483,69.0671,4.614,97.98731-10.59794,12.99864-6.74244,24.5422-15.86769,35.37127-25.65613C703.28914,497.55053,727.65712,444.54765,715.31074,404.71779Z"
        transform="translate(-481.4155 -329.5886)"
        fill={`${theme.mode === 'dark' && '#fff'}`}
      />
      <path
        d="M551.60146,416.09335a353.89753,353.89753,0,0,0,45.17716-.06647c14.7357-1.59182,29.45107-3.3565,44.23989-4.40669C611.40384,405.215,580.88225,410.18074,551.60146,416.09335Z"
        transform="translate(-481.4155 -329.5886)"
        fill={`${theme.mode === 'dark' && '#fff'}`}
        stroke={`${theme.mode === 'dark' && '#fff'}`}
        strokeWidth="3"
      />
      <path
        d="M554.223,460.65634c34.35295-.20412,63.07709-5.37993,96.67639-13.77551C618.07951,444.71687,585.37256,450.54465,554.223,460.65634Z"
        transform="translate(-481.4155 -329.5886)"
        fill={`${theme.mode === 'dark' && '#fff'}`}
        stroke={`${theme.mode === 'dark' && '#fff'}`}
        strokeWidth="2.5"
      />
      <path
        d="M554.223,502.5978c35.54215,1.47057,71.345-2.2837,105.00383-14.19285C630.35274,486.81753,586.87287,494.19874,554.223,502.5978Z"
        transform="translate(-481.4155 -329.5886)"
        fill={`${theme.mode === 'dark' && '#fff'}`}
        stroke={`${theme.mode === 'dark' && '#fff'}`}
        strokeWidth="2.5"
      />
    </svg>
  )
}

export default CustomMenuIcon
