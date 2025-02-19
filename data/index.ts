export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I am very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently looking for work as a Front End Developer",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to work together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Probit Academy",
        des: "School management system(students, teachers, parents and administration) for the programming school Probit Academy.",
        img: "probit-academy-page.png",
        iconLists: ["/vue.svg", "/bootstrap.svg", "/javascript.svg", "/ts.svg", '/pinia.svg', '/primevue.svg', '/laravel.svg'],
        link: "https://probitschool.com",
    },
    {
        id: 2,
        title: "Kosovo - Women for Women",
        des: "Blog page for the non-profit organization Kosovo - Women for Women",
        img: "/kw4w.png",
        iconLists: ["/wordpress.svg", "/elementor.svg", "/php.svg"],
        link: "https://www.k-w4w.org/",
    },
    {
        id: 3,
        title: "Helvetas",
        des: "A landing page made for the non-profit organization Helvetas, Kosovo Branch.",
        img: "/helvetas.png",
        iconLists: ["/wordpress.svg", "/elementor.svg", "/php.svg"],
        link: "ui.canva.com",
    },
];

// export const testimonials = [
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
// ];

export const experiences = [
    {
        id: 1,
        name: "vue",
        img: "/vue.svg",
        nameImg: "/vueName.svg",
    },
    {
        id: 2,
        name: "react",
        img: "/re.svg",
        nameImg: "/reactName.svg",
    },
    {
        id: 3,
        name: "node.js",
        img: "/nodejs.svg",
        nameImg: "/nodeName.svg",
    },
    {
        id: 4,
        name: "javascript",
        img: "/javascript.svg",
        nameImg: "/javascriptName.svg",
    },
    {
        id: 5,
        name: "typescript",
        img: "/ts.svg",
        nameImg: "/typescriptName.svg",
    },
    {
        id: 6,
        name: "next",
        img: "/nextjs.svg",
        nameImg: "/nextName.svg",
    },
    {
        id: 7,
        name: "nuxt",
        img: "/nuxt.svg",
        nameImg: "/nuxtName.svg",
    },
    {
        id: 8,
        name: "laravel",
        img: "/laravel.svg",
        nameImg: "/laravelName.svg",
    },
    {
        id: 9,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Wordpress Developer",
        desc: "Created two websites using Wordpress with Elementor, boosting performance and user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Front-end Developer",
        desc: "Created a complex School Management System with Vue.js in collaboration with Laravel developers. The website has highly boosted productivity and business for the school.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/LimaniAlbin"
    },
    {
        id: 2,
        img: "/insta.svg",
        link: "https://www.instagram.com/albin_limani/"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/albin-limani-299639265/"
    },
];