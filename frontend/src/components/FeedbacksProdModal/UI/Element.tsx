import { makeStars, type feedBack } from "../"
import { El, 
         ElFeedback, 
         ElText, 
         ElTitle, 
         Star, 
         Stars 
} from "./styled"

export const Element: React.FC<feedBack> = ({ name, text, stars }) => {
    return(
        <El>
            <ElText>
                <ElTitle>
                    {
                        name
                    }
                </ElTitle>
                <ElFeedback>
                    {
                        text
                    }
                </ElFeedback>
            </ElText>
            <Stars>
                {
                    makeStars(stars).map((el, index)=><Star key={index} $active={el} />).reverse()
                }
            </Stars>
        </El>
    )
}