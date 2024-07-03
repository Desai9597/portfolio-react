import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";
import { Hero } from "./Hero";
import { Education } from "../pages/Education";
import { Achievements } from "../pages/Achievements";
import { Contact } from "../pages/Contact";
export const Home = () => {
    return(
        <>
       
         <Hero></Hero>
         <Skills />         
         <Projects></Projects>
         <Education />
         <Achievements />
         <Contact />
        </>
        )
}