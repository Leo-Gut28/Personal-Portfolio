import six from '../assets/png/Robot_Image.png'
import nine from '../assets/png/pokemonpicture.png'
import ten from '../assets/png/Portfolio_Image.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Arduino Robot',
        projectDesc: 'Build a Robot that is able to complete various tasks such as autonomous movement, color identification, and metal sensing.',
        tags: ['Arduino', 'Microcontrollers', 'Sensors', 'Circuits'],
        code: 'https://github.com/Leo-Gut28/Arduino_Bot',
        demo: '/arduinorobot',
        image: six
    },
    {
        id: 2,
        projectName: 'PokeRandom',
        projectDesc: 'Kotline project that uses a Pokemon API to display random Pokemons, including a picture, name and the weight of each. This is done using a recycle view.',
        tags: ['Kotlin', 'RestAPI', 'Android Studio', 'UI/UX'],
        code: 'https://github.com/Leo-Gut28/PokeRandom_App',
        demo: '/pokerandom',
        image: nine
    },
    {
        id: 3,
        projectName: 'Personal Portfolio',
        projectDesc: 'Personal Portfolio to display my information in a more visually appealing way than just my resume. Built upon a template found on GitHub. ',
        tags: ['React', 'CSS', 'JavaScript', 'Git'],
        code: 'https://github.com/Leo-Gut28/Personal-Portfolio',
        demo: '/personalwebsite',
        image: ten
    },
    /*
    {
        id: 4,
        projectName: 'Travel Agency',
        projectDesc: 'This project about travel agency management.',
        tags: ['React', 'CSS', 'Material Ui'],
        code: 'https://github.com/said7388/Travel-Agency-client',
        demo: '/#projects',
        image: eight
    },
*/

]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/