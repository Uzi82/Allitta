import { useNavigate } from "react-router-dom"
import { Logo, 
         Props, 
         SimpleBlur, 
         lowerCase, 
         navElements, 
         openModal, 
         useAppSelector,
         open,
         logout,
         useJWT,
         getUser
} from "../"
import { Container, 
         Navigation, 
         Element, 
         Img, 
         Profile, 
         ProfileHead, 
         LogoutBtn, 
         LogoutImg, 
         LogoutText, 
         LogoLink, 
         LogOutModal,
         LogOutTitle,
         LogOutText,
         LogOutBtn,
         LogOutBtns
} from "./styled"
import { User } from "./User"
import { useAppDispatch } from "../../Products"
import { useMutation, useQuery } from "react-query"

export const DashboardNav: React.FC<Props> = ({ active }) => {
    const navigate = useNavigate()
    if(active===undefined) active = ''
    const burgerOpened = useAppSelector(state=>state.shopMenuBurger.opened)
    const modal = useAppSelector(state=>state.products)
    const dispatch = useAppDispatch()
    const jwt = useJWT()
    const getUserQuery = useQuery(['userCard', { jwt }], () => {
        if(jwt !== undefined) return getUser(jwt)
    }, {
        refetchOnWindowFocus: false
    })
    const logoutQuery = useMutation(()=>logout())
    const Logout = async () => {
        await logoutQuery.mutateAsync()
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
        dispatch(open())
        navigate('/signin')
    }
    return(
        <Container $active={burgerOpened}>
            <LogoLink to={'/shop'}>
                <Logo color="#5D20D6">ALLITTA</Logo>
            </LogoLink>
            <Navigation>
                {
                    navElements.map(el=>{
                        return(
                            <Element key={el.title} $active={lowerCase(active) === lowerCase(el.title)} onClick={() => navigate(`/shop/${el.title.replace(/[A-Z]/g, (u) => u.toLowerCase())}`)}>
                                <Img src={lowerCase(active) === lowerCase(el.title) ? el.active : el.img} />
                                { el.title }
                            </Element>
                        )
                    })
                }
            </Navigation>
            <Profile>
                <ProfileHead>
                    Profile
                </ProfileHead>
                <User name={getUserQuery.data !== undefined ? getUserQuery.data.data.name : 'User'} img={getUserQuery.data !== undefined ? getUserQuery.data.data.img_path : undefined} status="Merchant" />
                <LogoutBtn onClick={()=>dispatch(openModal({
                        type: 'logout',
                        id: ''
                    }))}>
                    <LogoutImg />
                    <LogoutText>
                        Logout
                    </LogoutText>
                </LogoutBtn>
            </Profile>
            <SimpleBlur customWidth active={modal.opened && modal.type === 'logout'}>
                <LogOutModal>
                    <LogOutTitle>
                        Confirm Logout
                    </LogOutTitle>
                    <LogOutText>
                        Are you sure you want to logout ?
                    </LogOutText>
                    <LogOutBtns>
                        <LogOutBtn $confirm onClick={()=>Logout()}>
                            Logout
                        </LogOutBtn>
                        <LogOutBtn onClick={()=>dispatch(open())}>
                            Cancel
                        </LogOutBtn>
                    </LogOutBtns>
                </LogOutModal>
            </SimpleBlur>
        </Container>
    )
}