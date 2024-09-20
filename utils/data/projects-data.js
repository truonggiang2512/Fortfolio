import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Online Freelancing Marketplace Website',
        description: "Me built a website provides freelance services, uploads and manages jobsapplication. created the UI using Material UI, Typescript and React Slick ",
        tools: ['React', 'SCSS', 'OpenAI API', 'TypeScript', 'JWT', 'Redux/toolkit', 'Yup'],
        role: 'FrontEnd Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Shoes Ecommerce Website',
        description: 'I have designed and developed a E-commerce website to sell shoes, customers can manage the product through a cart using Axios, ReactJs, Material UI, Formik, Yup, React-Router-Dom, Redux/toolkit, Javascript.',
        tools: ['React', 'SCSS', 'OpenAI API', 'TypeScript', 'JWT', 'Redux/toolkit', 'Yup', 'React-Router-Dom'],
        role: 'Front End Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Spotify Clone',
        description: 'Me developed a Spotify clone using Next.js 13, React, and TailwindCSS for a sleek, responsive UI. We integrated Stripe for seamless recurring payments and Supabase with PostgreSQL to handle database operations and user authentication, including GitHub login. The app supports song uploads, file and image storage via Supabase, and features like playlists, liked songs, and a favorites system. We built an advanced audio player, added Tailwind animations for smooth transitions, and ensured full responsiveness across devices. Additionally, we created efficient route handlers (POST, GET, DELETE) and enabled direct database access in server-side React components, bypassing the need for APIs. Stripe subscription management',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },