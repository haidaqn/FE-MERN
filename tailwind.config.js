/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            main: ['Poppins', 'sans-serif']
        },
        extend: {
            backgroundColor: {
                main: '#ee3131'
            },
            colors: { main: '#ee3131' },
            animation: {
                'slide-top': 'slide-top 0.5s cubic-bezier(0.250,0.460,0.450, 0.940) both',
                'slide-top-sm': 'slide-top-sm .25s linear both',
                'scale-up': 'scale-up 1s linear both',
                'slide-bottom': 'slide-bottom 0.5s cubic-bezier(0.250,0.460,0.450, 0.940) both',
                'tlit-in-fwd': 'tlit-in-fwd 0.5s cubic-bezier(0.250,0.460,0.450, 0.940) both'
            },
            flex: {
                1: '1 1 0%',
                2: '2 2 0%',
                3: '3 3 0%',
                4: '4 4 0%',
                5: '5 5 0%',
                9: '9 9 0%'
            },
            keyframes: {
                'slide-top': {
                    '0%': {
                        '-webkit-transform': 'translateY(10px)',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        '-webkit-transform': 'translateY(-20px)',
                        transform: 'translateY(-20px)'
                    }
                },
                'slide-top-sm': {
                    '0%': {
                        '-webkit-transform': 'translateY(10px)',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        '-webkit-transform': 'translateY(0px)',
                        transform: 'translateY(0px)'
                    }
                },
                'slide-bottom': {
                    '0%': {
                        '-webkit-transform': 'translateY(-20px)',
                        transform: 'translateY(-20px)'
                    },
                    '100%': {
                        '-webkit-transform': 'translateY(10px)',
                        transform: 'translateY(10px)'
                    }
                },
                'scale-up': {
                    ' 0%': {
                        '-webkit-transform': 'scale(0.5)',
                        transform: 'scale(0.5)'
                    },
                    '100%': {
                        '-webkit-transform': 'scale(1)',
                        transform: 'scale(1)'
                    }
                },
                'tlit-in-fwd': {
                    '0%': {
                        '-webkit-transform':
                            'rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)',
                        transform: 'rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)',
                        opacity: '0'
                    },
                    '100%': {
                        '-webkit-transform': 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
                        transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
                        opacity: '1'
                    }
                }
            }
        }
    },
    plugins: [],
    mode: 'jit'
};
