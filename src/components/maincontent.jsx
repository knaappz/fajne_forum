import { WelcomeCard } from "./main_things/welcomecard";
import { WomenImage } from "./main_things/womanimg";
import { RightBlock } from "./main_things/rightblock";

export function MainContent() {
    return(
        <main>
           {/* <LeftBlock/> */}
           <WelcomeCard/>
           <WomenImage/>  
           <RightBlock/>
        </main>
    )
}

export default MainContent;