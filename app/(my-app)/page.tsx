import Landing from "@/components/landing/landing"
import Featured from "@/components/featured/featured"
import Quiz from "@/components/quiz/quiz"
import Testimony from "@/components/testimony/testimony"
import Contact from "@/components/contact/contact"
import Footer from "@/components/footer/footer"

export default function Home(){
    return(<>
    <Landing />
    <Featured />
    <Quiz />  
    <Testimony /> 
    <Contact /> 
    <Footer />
    </>
        
    )
    
}