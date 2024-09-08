/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import tailwindScroll from "tailwind-scrollbar";

export default withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                mobile: "600px",
                xl: "1280px",
                tablet: "930px",
            },
        },
    },
    plugins: [tailwindScroll],
});
