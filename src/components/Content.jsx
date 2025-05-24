import React from 'react'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data =[
    {name: `Expense Tracker`,
     img: `src/assets/expensetracker.png`,
     programming: `React js`,
     team: `1`,
     duration: `14 Days`,
     description: `The Expense Tracker is a front-end application developed with React.js. Utilizing React's component-based architecture, the app allows users to add, edit, and delete expenses through a responsive user interface. It features a stateful component structure that dynamically updates the expense list in real-time, providing instant feedback on user interactions. The application includes a controlled form for inputting details such as title, category, and amount, ensuring data validation.`
    },
    {name: `College Dashboard`,
        img: `src/assets/Image 12.png`,
        programming: `React Js, Node Js, Express Js, mongoDB`,
        team: `4`,
        duration: `30 Days`,
        description: `The chatbot can be integrated with AI to provide personalized recommendations based on the user's past choices and browsing history. It can also utilize natural language processing (NLP) to understand the user's queries and provide relevant responses.`
    },
    {name: `Speech To Text Conversion`,
        img: `src/assets/speech.png`,
        programming: `HTML,CSS and Ai model`,
        team: `4`,
        duration: `15 Days`,
        description: `HTML structures content, CSS styles it, and JavaScript adds interactivity. The page includes a nav bar with Home, Contact, and Sign In links. Users can securely sign in with a username and password. Key features include Start and Stop Recording buttons using the Web Speech API for real-time audio processing.`
    },
    {name: `Portfolio`,
        img: `src/assets/portfolio.png`,
        programming: `React Js, Tailwind css`,
        team: `1`,
        duration: `7 Days`,
        description: `HTML structures content, CSS styles it, and JavaScript adds interactivity. The page includes a nav bar with Home, Contact, and Sign In links. Users can securely sign in with a username and password. Key features include Start and Stop Recording buttons using the Web Speech API for real-time audio processing.`
    },
]


function Content() {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

      const bettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        pauseOnHover: true, 
      };

      const educationData = [
        {
          title: "UG DEGREE",
          institution: "Bannari Amman Institute of Technology",
          location: "SATHYAMANGALAM - ERODE",
          yearOfPassing: "2025",
          branch: "Mechanical Engineering",
          cgpa: "8.01",
        },
        {
          title: "HIGH SCHOOL",
          institution: "VELAMMAL VIDYALAYA",
          location: "KARUR",
          yearOfPassing: "2021",
          percentage: "81%",
        },
      ];

      const skills = [
        { category:'plang',name: 'c Language', percentage: 80 },
        { category:'plang', name: 'c++ Language', percentage: 70 },
        { category:'plang', name: 'Python', percentage: 60 },
      ];

      const weblang =[ 
        { category:'weblang', name: 'HTML', percentage: 90 },
        { category:'weblang', name: 'Tailwind CSS', percentage: 90 },
        { category:'weblang', name: 'React Js', percentage: 80 },
        { category:'weblang', name: 'My SQL', percentage: 50 },
      ]

      const uiux = [
        { category:'ui', name: 'Canva', percentage: 95 },
        { category:'ui', name: 'Figma', percentage: 90 },
      ]

      const achievements = [
        {detail:'Best Paper Award in National Conference on Treands in Avaiation and Aeroscpace Sustainable Future and Growth conducted by ASET College of Science and technology, Chennai.'},
        {detail:'Solved 20+ Leetcode Problems'},
      ]

      const hobbies =[
        {hob:'Reading Books'},
        {hob:'Playing Cricket'},
        {hob:'Listening to podcasts on Youtube'},
        {hob:'LIstening Musics'},
        {hob:'Cooking'},
      ]

      const languages =[
        {lang:'English', read:'true', write: 'true' ,speak:'true'},
        {lang:'Tamil', read:'true', write: 'true' ,speak:'true'},
        {lang:'Hindi', read:'true', write: 'false' ,speak:'true'},
      ]

  return (
    <div>
        <div className='Home scroll-mt-24 mt-27' id='Home'>
        <div className="lg:block hidden lg:absolute lg:top-0 lg:right-0 lg:mt-25 lg:mr-5">
          <img
            src="assets/ChatGPT Image Apr 4, 2025, 11_10_25 AM.png"
            alt="Profile Image"
            className="rounded-full hover:border-4 hover:shadow-2xl hover:shadow-white hover:border-white w-150 h-150"
          />
        </div>
            <h1 className="text-5xl mt-20 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 p-5">
            Welcome to Kumaran's Portfolio
        </h1>

        <h2 className='mt-5 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-400 p-5'>
            CAREER OBJECTIVE
        </h2>

        <p className='text-xl text-white mt-5 w-3/5 p-5'>
        A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my skills.
        </p>
            <div className='flex lg:mt-20 mt-10 lg:flex-row flex-col items-center'>
        <div className='flex flex-row align-middle'>
            <img src="/assets/linkedin.png" className='h-10 w-10 mt-7 lg:ml-25 ml-5'/>
        <a href="https://www.linkedin.com/in/kumaran-b-8b895a233/" className='text-white hover:text-blue-700 p-5 mt-4 text-xl'>
            Linkedin
        </a>
        </div>

        <div className='flex flex-row align-middle'>
            <img src="/assets/github.png" className='h-10 w-10 mt-7 lg:ml-25 bg-white'/>
        <a href="https://github.com/KUMARANB17" className='text-white hover:text-gray-400 p-5 mt-4 text-xl'>
            Github
        </a>
        </div>
        
        <div className='flex flex-row align-middle'>
            <img src="/assets/gmail.png" className='h-10 w-10 mt-7 lg:ml-25'/>
        <a href="kumaran164b@gmail.com" className='text-white hover:text-green-700 p-5 mt-4 text-xl'>
            Gmail
        </a>
        </div>
        </div>
        </div>

        <div className="Education  scroll-mt-24" id="Education">
      <div className="lg:my-38 lg:mt-50">
        <h1 className="text-5xl mt-20 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-300 p-5 flex justify-center">
          Education Details
        </h1>
        <div className="lg:flex lg:justify-evenly lg:mt-20">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="flex justify-center flex-col align-middle lg:p-5 lg:hover:border-1 lg:hover:border-t-gray-400 hover:border-l-gray-400 p-10"
            >
              <h2 className="mt-5 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-400 p-5 flex justify-center">
                {education.title}
              </h2>
              <div className="lg:flex lg:align-middle lg:mt-7">
                <h2 className="text-xl font-extrabold text-gray-400 lg:ml-5">
                  INSTITUTION:
                </h2>
                <p className="text-white text-xl font-bold lg:ml-2">
                  {education.institution}
                </p>
              </div>

              <div className="lg:flex align-middle lg:mt-7">
                <h2 className="text-xl font-extrabold text-gray-400 lg:ml-5">
                  LOCATION:
                </h2>
                <p className="text-white text-xl font-bold lg:ml-2">
                  {education.location}
                </p>
              </div>

              <div className="flex align-middle mt-5">
                <h2 className="text-xl font-extrabold text-gray-400 lg:ml-5">
                  Year of Passing:
                </h2>
                <p className="text-white text-xl font-bold ml-2">
                  {education.yearOfPassing}
                </p>
              </div>

              {education.branch && (
                <div className="flex align-middle mt-5">
                  <h2 className="text-xl font-extrabold text-gray-400 lg:ml-5">
                    Branch:
                  </h2>
                  <p className="text-white text-xl font-bold ml-2">
                    {education.branch}
                  </p>
                </div>
              )}

              {education.cgpa && (
                <div className="flex align-middle mt-5">
                  <h2 className="text-xl font-extrabold text-gray-400 lg:ml-5">
                    CGPA:
                  </h2>
                  <p className="text-green-400 text-xl font-bold ml-2">
                    {education.cgpa}
                  </p>
                </div>
              )}

              {education.percentage && (
                <div className="flex align-middle mt-5">
                  <h2 className="text-xl font-extrabold text-gray-400 lg:ml-5">
                    PERCENTAGE:
                  </h2>
                  <p className="text-green-400 text-xl font-bold ml-2">
                    {education.percentage}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className='Projects  scroll-mt-24' id='Projects'>
  <div className='lg:my-28 w-4/5 mx-auto'>
    <h1 className='text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-300 p-5 text-center'>
      Projects
    </h1>
    <Slider {...settings} className='mt-5'>
      {data.map((project, index) => (
        <div key={index} className=' rounded-xl shadow-lg p-6 ml-3 transition-transform transform scale-105 hover:shadow-xl'>
          <h2 className='text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-400 text-center mb-2'>
            {project.name}
          </h2>
          <div className='flex flex-col items-center'>
            <img src={project.img} alt={project.name} className='w-3/5 mb-4 rounded-md shadow-lg lg:h-90 ' />
            <div className='w-3/5'>
              <div className='space-y-1'>
                <div className='flex'>
                  <h3 className='text-lg font-semibold text-gray-400 mr-3'>Programming Language:   </h3>
                  <p className='text-white text-lg font-medium'>{project.programming}</p>
                </div>
                <div className='flex'>
                  <h3 className='text-lg font-semibold text-gray-400 mr-3'>Team Size:</h3>
                  <p className='text-white text-lg font-medium'>{project.team}</p>
                </div>
                <div className='flex'>
                  <h3 className='text-lg font-semibold text-gray-400 mr-3'>Duration:</h3>
                  <p className='text-white text-lg font-medium'>{project.duration}</p>
                </div>
                <div className='flex'>
                  <h3 className='text-lg font-semibold text-gray-400 mr-3'>Description:</h3>
                  <p className='text-white text-sm mt-1'>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

<div className="Skills  scroll-mt-24" id="Skills">
      <div className="lg:my-33 w-4/5 mx-auto">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-300 p-5 text-center">
          Skills
        </h1>
        <Slider {...bettings} className="mt-5">
          <div>
            <div className="mb-18">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4 text-center">
                Programming Languages
              </h2>
              {skills.map((skill, index) => (
                <div className="p-3" key={index}>
                  <div className="flex flex-row items-center justify-center">
                    <div className="text-white mb-2 p-3">{skill.name}</div>
                    <div className="w-2/5 bg-gray-200 h-4 rounded-full">
                      <div
                        className="bg-blue-600 h-4 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm mt-1 ml-5 text-white">{skill.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4 text-center">
                Web Technologies
              </h2>
              {weblang.map((wlang, index) => (
                <div className="p-2" key={index}>
                  <div className="flex flex-row items-center justify-center">
                    <div className="text-white mb-2 p-3">{wlang.name}</div>
                    <div className="w-2/5 bg-gray-200 h-4 rounded-full">
                      <div
                        className="bg-green-600 h-4 rounded-full"
                        style={{ width: `${wlang.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm mt-1 ml-5 text-white">{wlang.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-400 mb-4 text-center">
                UI/UX Design
              </h2>
              {uiux.map((u, index) => (
                <div className="p-2" key={index}>
                  <div className="flex flex-row items-center justify-center">
                    <div className="text-white mb-2 p-3">{u.name}</div>
                    <div className="w-2/5 bg-gray-200 h-4 rounded-full">
                      <div
                        className="bg-purple-600 h-4 rounded-full"
                        style={{ width: `${u.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm mt-1 ml-5 text-white">{u.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
    
    <div id="Add-ons" className="Add-ons scroll-mt-24 mb-30">
  <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-300 p-5 text-center mb-5">
    Add-ons
  </h1>
  <div className="flex lg:justify-evenly flex-col lg:flex-row p-10 mb-10">
    <div className="bg-white rounded-xl lg:w-1/3 ml-2 border border-gray-300 shadow-md p-4 mt-8">
      <h1 className="text-center font-extrabold text-2xl text-gray-700 mb-4">
        ACHIEVEMENTS
      </h1>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-800 p-2 border-b border-gray-200 last:border-b-0">
            {achievement.detail}
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white rounded-xl lg:w-1/3 ml-2 border border-gray-300 shadow-md p-4 mt-8">
      <h1 className="text-center font-extrabold text-2xl text-gray-700 mb-4">
        Languages Known
      </h1>
      <ul className="space-y-2">
        {languages.map((language, index) => (
          <li key={index} className="text-gray-800 p-2 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center">
              <span className="text-xl mr-4">{language.lang}</span>
              <div className="flex space-x-2">
                <SkillIndicator skill="R" value={language.read} />
                <SkillIndicator skill="W" value={language.write} />
                <SkillIndicator skill="S" value={language.speak} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white rounded-xl lg:w-1/3 ml-2 border border-gray-300 shadow-md p-4 mt-8">
      <h1 className="text-center font-extrabold text-2xl text-gray-700 mb-4 ">
        Hobbies
      </h1>
      <ul className="space-y-2">
        {hobbies.map((hobbie, index) => (
          <li key={index} className="text-gray-800 p-2 border-b border-gray-200 last:border-b-0">
            {hobbie.hob}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


    </div>

  )
}

function SkillIndicator({ skill, value }) {
  let bgColor = 'bg-white';
  let textColor = 'text-gray-500';

  if(value==='false') return(<></>);

  if (value) {
    bgColor = 'bg-green-500';
    textColor = 'text-white';
  }

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} border border-gray-300`}
    >
      <span className={`font-semibold ${textColor}`}>{skill}</span>
    </div>
  );
}

export default Content