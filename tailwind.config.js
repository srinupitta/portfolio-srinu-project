/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['Poppins'],
        roboto:['Rajdhani']
      },
      colors: {
        mySignatureColor: '#000021',
        navColor:'#12123e',
        linksColor:'#9999e2',
        blueViolet:'#9900FF',
        nameColor:'#F99417',
        socialLinks:'#D8EFD3',
        defaultColor: '#6F459B',
        headColor:"#FDAF7B"
      },
    },
  },
  plugins: [],
}
