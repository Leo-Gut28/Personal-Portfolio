import one from '../assets/png/Robot_Image.png'
import two from '../assets/png/pokemonpicture.png'
import three from '../assets/png/Portfolio_Image.png'
import four from '../assets/png/WeatherIcon.png'
import five from '../assets/png/soccer_ball3.avif'


export const projectsData = [
    {
        id: 1,
        projectName: 'Arduino Robot',
        projectDesc: 'Build a Robot that is able to complete various tasks such as autonomous movement, color identification, and metal sensing.',
        tags: ['Arduino', 'Microcontrollers', 'Sensors', 'Circuits'],
        code: 'https://github.com/Leo-Gut28/Arduino_Bot',
        demo: '/arduinorobot',
        image: one
    },
    {
        id: 2,
        projectName: 'PokeRandom',
        projectDesc: 'Kotline project that uses a Pokemon API to display random Pokemons, including a picture, name and the weight of each. This is done using a recycle view.',
        tags: ['Kotlin', 'RestAPI', 'Android Studio', 'UI/UX'],
        code: 'https://github.com/Leo-Gut28/PokeRandom_App',
        demo: '/pokerandom',
        image: two
    },
    {
        id: 3,
        projectName: 'Soccer Sentiment Analysis',
        projectDesc: 'Python project that uses several APIs to conduct sentiment analysis. The website was created using Flask.',
        tags: ['Python', 'RestAPI', 'Flask', 'NLP'],
        code: 'https://github.com/Leo-Gut28/Soccer_Sentiment_Analysis',
        demo: '/soccersentiment',
        image: five
    },
    {
        id: 4,
        projectName: 'Weather App',
        projectDesc: 'This is a starter project that will display the weather of the entered city',
        tags: ['HTML', 'CSS', 'Kotlin', 'API'],
        code: 'https://github.com/Leo-Gut28/Weather_App',
        demo: '/weatherapp',
        image: four
    },
    {
        id: 5,
        projectName: 'Personal Portfolio',
        projectDesc: 'Personal Portfolio to display my information in a more visually appealing way than just my resume. Built upon a template found on GitHub. ',
        tags: ['React', 'CSS', 'JavaScript', 'Git'],
        code: 'https://github.com/Leo-Gut28/Personal-Portfolio',
        demo: '/personalwebsite',
        image: three
    },


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