import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({ 
    colors: {
        highlight: '#FFBA08',
        dark: {
            'black': '#000000',
            'text': '#47585B',
            'info': '#999999',
        },
        light : {
            'white': '#FFFFFF',
            'text': '#F5F8FA',
            'info': '#DADADA',
        },
      },
      fonts: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      breakpoints: {
        sm: '414px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      }
})
