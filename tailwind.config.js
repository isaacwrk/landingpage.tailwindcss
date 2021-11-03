module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "bookmark-purple": "#5267DF",
                "b-red": "#FA5959",
                "bookmark-blue": "#242A45",
                "bookmark-grey": "#9194A2",
                "text-personal-white": "#f7f7f7",
                
            },
        },
        container:{
            center:true,
            padding:"1rem",
            screens:{
                lg:"1124px",
                xl:"1124px",
                "2xl":"1124px"
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
