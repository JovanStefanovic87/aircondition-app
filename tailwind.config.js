/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueLight: '#2dabde',
        blueDark: '#1D8DBB',
        greenLight: '#a3d071',
        grayLight: 'gray-200',
        ktBlueGray: '#7B8D8E',
        ktCyan: '#0D3B4E',
        ktBg: '#303030',
        ktAppointmentBg: '#555555',
        ktAppointmentTime: '#f8cc03',
        ktFormItemName: '#A05C03',
        sideBarBg: '#555555',
        sideBarBgHover: 'rgb(17 24 39)',
        backdrop: 'rgba(0, 0, 0, 0.85)',
      },
      transitionDuration: {
        instant: '0ms',
        fast: '100ms',
        medium: '500ms',
        slow: '1000ms',
      },
      height: {
        appointmentSlot: '7rem',
        calHeight: '72dvh',
        slotDayHeight: '3rem',
        header: 68,
        main: 'calc(100dvh - 75px)',
        logo: 55,
        workingHoursModal: '96vh',
        workingHoursModalContent: '50vh',
      },
      width: {
        slotsWidth: 200,
        calendarSlots: 200 * 7.22,
        'calendar-lg': 'calc(100dvw - 24rem)',
        'calendar-sm': 'calc(100dvw - 3.5rem)',
        form: '850px',
        '98dvw': '98dvw',
        logo: 225,
        workingHoursSlotXl: '32%',
        workingHoursSlotLg: '49%',
      },
      minWidth: {
        column: 400,
        label: 140,
        slotsWidth: 200,
        form: '95dvw',
        time: 100,
      },
      maxWidth: {
        95: '95dvw',
        select: 150,
        slotsWidth: 200,
      },
      zIndex: {
        3: 3,
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
      },
      gap: {
        '1px': 1,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
