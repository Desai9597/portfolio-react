import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import profilePic from '../../assets/images/viralPic.jpg';
import restaurantLogo from '../../assets/images/restaurant_logo.jpg';
import placePickerLogo from "../../assets/images/placepicker_logo.png";
import shoppingLogo from '../../assets/images/shoppingCart.jpg';
import todoListIcon from "../../assets/images/todolisticon.jpg";
import tictactoeLogo from "../../assets/images/tictactoe.png";
import quizLogo from "../../assets/images/quiz-logo.png";
import expenseTrackerLogo from '../../assets/images/expense-tracker-logo.jpg';


export const navLinks = [
    {
        url: "/",
        text: "Home",
    },
    {
        url: "/skills",
        text: "Skills",
    },
    {
        url: "/projects",
        text: "Projects",
    },
    {
        url: "/education",
        text: "Education",
    },
    {
        url: "/achievements",
        text: "Achievements",
    },
    {
        url: "/contact",
        text: "Contact",
    },
]
export const home = [
    {
        id:1,
      pic: profilePic,
      text: "HELLO I'M",
      name: "VIRAL DESAI",
      post: "FRONTEND DEVELOPER",
      special: "SPECIALIZED IN REACT",
      desc: "Dynamic and creative UI developer with over 5+ years of experience in developing user-friendly and engaging web applications.",
    },
  ]

  export const skills = [
    {
        id: 1,
        category: "Technologies",
        values:[
            {
                id: 1,                
                name: "HTML5",
                percentage:"90%",
            },
            {
                id: 2,               
                name: "CSS3",  
                percentage: "85%",
            },
            { 
                id: 3,               
                name: "Javascript",
                percentage: "80%",
            },
            { 
                id: 4,
                name: "ReactJS",
                percentage: "75%",
            },
            {
                id: 5,
                name: "Redux",
                percentage: "75%",
            },
            {
                id: 6,
                name: "RWD",
                percentage: "80%",
            },
        ]    
    },
   /* {
        id: 2,
        category: "Tools And Databases",
        values: [
            {
                id: 1,
                name: "Visual Studio Code",
            },
            {
                id: 2,
                name: "Eclipse",
            },
            {
                id: 3,
                name: "GitHub",
            },
            {
                id: 4,
                name: "Oracle",
            },
            {
                id: 5,
                name: "MySQL",
            },
            {
                id: 6,
                name: "MongoDB"
            },
        ]
    },*/
    {
        id: 2,
        category: "Soft Skills",
        values: [
            {
                id: 1,
                name: "Creative",
                percentage:"80%",
            },
            {
                id: 2,
                name: "Communication",
                percentage:"90%",
            },
            {
                id: 3,
                name: "Problem Solving",
                percentage:"80%",
            },
            {
                id: 4,
                name: "Collaborative",
                percentage: "90%",
            },
           
            {
                id: 5,
                name: "Adaptibility",
                percentage: "80%",
            },
            {
                id: 6,
                name:"Learning",
                percentage: "90%",
            }
        ]
    }  
    
  ]

  export const projects = [
    {
        id: 1,
        projectImage: restaurantLogo,
        title: "Red Chili Restaurant",
        desc: "A Restaurant Web App made in React, to allow food items to be added or removed in a cart. Checkout Form to place the order.",
        projectLink: "https://desai9597.github.io/RestaurantApp",
        githubLink: "https://github.com/Desai9597/RestaurantApp",
        tags: [ 
            {
                tagId: 1,
                tagName: "React Context",
            },
            {
                tagId: 2,
                tagName: "React Hooks",
            },
            {
                tagId:3,
                tagName: "Firebase"
            },
        ]       
    },
    {
        id: 2,
        projectImage: placePickerLogo,
        title: "Place Picker",
        desc: "App to allow user to select places they want to visit from the available places, and remove or update their favorite list.",
        projectLink: "https://desai9597.github.io/PlacePickerReact/",
        githubLink: "https://github.com/Desai9597/PlacePickerReact",
        tags: [ 
            {
                tagId: 1,
                tagName: "React State management",
            },
            {
                tagId: 2,
                tagName: "React Hooks",
            },
            {
                tagId: 3,
                tagName: "Local Storage",
            },            
        ]       
    },
    {
        id: 3,
        projectImage: shoppingLogo,
        title: "Simply Shopping",
        desc: "App to allow user to select products from the available products, and add or remove quantity in cart.",
        projectLink: "https://desai9597.github.io/SimplyShopping/",
        githubLink: "https://github.com/Desai9597/SimplyShopping",
        tags: [ 
            {
                tagId: 1,
                tagName: "Redux Toolkit",
            },
            {
                tagId: 2,
                tagName: "React Hooks",
            },
            {
                tagId: 3,
                tagName: "Firebase"
            },
        ]       
    },
    {
        id: 4,
        projectImage: todoListIcon,
        title: "To Do App",
        desc: "App to create new to do items. Also includes features like allow update, delete and mark completed for any task.",
        projectLink: "https://desai9597.github.io/ToDoApp/",
        githubLink: "https://github.com/Desai9597/ToDoApp",
        tags: [ 
            {
                tagId: 1,
                tagName: "React Hooks",
            },
            {
                tagId: 2,
                tagName: "Local Storage",
            },
            {
                tagId: 3,
                tagName: "MaterialUI Icons"
            },
            {
                tagId: 4,
                tagName: "Custom Hook"
            },
        ]       
    },
    {
        id: 5,
        projectImage: tictactoeLogo,
        title: "TicTacToe Game",
        desc: "Game to play TicTacToe with 2 players. Also includes features like strike through line for winning, Scoreboard and Play Again.",
        projectLink: "https://desai9597.github.io/TicTacToe/",
        githubLink: "https://github.com/Desai9597/TicTacToe",
        tags: [ 
            {
                tagId: 1,
                tagName: "CSS",
            },
            {
                tagId: 2,
                tagName: "React State and props",
            },  
            {
                tagId: 3,
                tagName: "React Hooks",
            },        
        ]       
    },
    {
        id: 6,
        projectImage: quizLogo,
        title: "Quiz",
        desc: "Quiz to let user answer the questions by selecting from multiple choices and finally show statistics.",
        projectLink: "https://desai9597.github.io/Quiz/",
        githubLink: "https://github.com/Desai9597/Quiz",
        tags: [ 
            {
                tagId: 1,
                tagName: "CSS",
            },
            {
                tagId: 2,
                tagName: "React State and props",
            },  
            {
                tagId: 3,
                tagName: "React Hooks",
            },                
        ]       
    },
    {
        id: 7,
        projectImage: expenseTrackerLogo,
        title: "Expense Tracker",
        desc: "Tracker to allow adding new expense and then showing all the expenses month-wise and filtered by year. Displayed in List and Bar chart.",
        projectLink: "https://desai9597.github.io/ExpenseTracker/",
        githubLink: "https://github.com/Desai9597/ExpenseTracker",
        tags: [ 
            {
                tagId: 1,
                tagName: "CSS",
            },
            {
                tagId: 2,
                tagName: "React State and props",
            },  
            {
                tagId: 3,
                tagName: "React Hooks",
            },  
            {
                tagId: 4,
                tagName: "Local Storage",
            },             
        ]       
    },

  ]

  export const achievements = [
    {
        id: 1,
        category: "Trophies",
        values: [
            {
                id: 1,
                icon: <EmojiEventsIcon />,
                name: "Awarded Gold Medal for Topper of University in BCA",
                downloadLink:"/medal/1",
            },
            {
                id: 2,
                icon: <EmojiEventsIcon />,
                name: "Awarded Gold Medal for Topper of University in MCA",
                downloadLink:"/medal/2"
            },
        ]
    },
    {
        id: 2,
        category: "Certifications",
        values: [
            {
                id: 1,
                icon: <WorkspacePremiumIcon />,
                name: "Meta certified in HTML and CSS",
                downloadLink: "https://coursera.org/share/e824b02179df5f460e2a4cdec4dd8c03",
            },
            {
                id: 2,
                icon: <WorkspacePremiumIcon />,
                name: "Meta certified in JavaScript",
                downloadLink: "https://coursera.org/share/88fb0697fb78054ebea521e8fa07670b",
            },
          
            {
                id: 3,
                icon: <WorkspacePremiumIcon />,
                name: "Meta certified in React Basics",
                downloadLink: "https://coursera.org/share/fe838d7bf2e0cd1272bf241b1551034c",
            },
            {
                id: 4,
                icon: <WorkspacePremiumIcon />,
                name: "Meta certified in Advanced React",
                downloadLink: "https://coursera.org/share/eb47c2734ce4faa9e0cd9423a117c92a",
            },
        ]
    }
  ]