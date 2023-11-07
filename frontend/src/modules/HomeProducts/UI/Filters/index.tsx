import React from "react"
import { Wrapper, Header, Title, ButtonReset, Divider, OnDesctop, OnMobile, OpenFilters, Popup, PopupContent } from "./Filters.styled"
import { Price } from "./components/Price"
import { setCategories, setCities, setPrice } from "../../../../store/slices/filtersSlice"
import { Categories } from "./components/Categories"
import { Cities } from "./components/Cities"
import { useAppSelector } from "../../../Dashboard"

export const Filters: React.FC = ({ }) => {

    const [isMobileOpen, setisMobileOpen] = React.useState(false)
    const [dissapear, setDissapear] = React.useState(false)
    const filters = useAppSelector((state) => state.filtersSlice)


    React.useEffect(() => {
        if (!isMobileOpen) {
            const timeout = setTimeout(() => {
                setDissapear(true)
            }, 300);

            return () => clearTimeout(timeout);
        }
        setDissapear(false)
    }, [isMobileOpen]);


    return (
        <Wrapper>
            <OnDesctop>
                <Header>
                    <Title>Filter</Title>
                    <ButtonReset onClick={() => {
                        setPrice(0)
                        setCategories({})
                        setCities({})
                    }}>Reset</ButtonReset>
                </Header>
                <Divider $mb={'10px'} />
                <Price />
                <Divider $mb={'20px'} />
                <Categories />
                <Divider $mb={'20px'} />
                <Cities />
            </OnDesctop>

            <OnMobile>
                <Header>
                    <Title>Filter</Title>
                    <OpenFilters src={require('../assets/filter.png')} onClick={() => {
                        setisMobileOpen(p => !p)
                        setDissapear(false)
                    }} />
                </Header>
                <Popup $isOpen={isMobileOpen} $dissapear={dissapear} onClick={() => setisMobileOpen(false)}>
                    <PopupContent $isOpen={isMobileOpen} onClick={e => {
                        e.stopPropagation()
                    }}>
                        <Title $mb="10px">Filter</Title>
                        <ButtonReset onClick={() => {
                            setPrice(0)
                            setCategories({})
                            setCities({})
                        }} $mb={'10px'}>Reset</ButtonReset>
                        <Divider $mb={'10px'} />
                        <Price />
                        <Divider $mb={'20px'} />
                        <Categories />
                        <Divider $mb={'20px'} />
                        <Cities />
                    </PopupContent>
                </Popup>
            </OnMobile>
        </Wrapper>
    )
}