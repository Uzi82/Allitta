import { useState } from "react"
import { Banner, 
         BannerContainer, 
         BannerImg, 
         Btns, 
         Category, 
         Container, 
         Description, 
         Form, 
         Input, 
         Logo, 
         LogoContainer, 
         LogoImg, 
         Part, 
         PartTitle, 
         SkipBtn, 
         SubmitBtn, 
         Title, 
         TwoInputs
} from "./styled"
import { ToastContainer, toast } from "react-toastify"
import {
         useShopForm,
         onError,
         Exit,
         useAppDispatch,
         open,
         type ICreateShop,
         getCategories,
         createShop,
} from '../'
import { SubmitHandler } from "react-hook-form"
import { useMutation, useQuery } from "react-query"

export const CreateShopModal: React.FC = () => {
    const [stage, setStageNumber] = useState<number>(1)
    const [blocked, block] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { registerInput, handleSubmit, checkMainInputs, watch, setValue, formState: { errors }, reset } = useShopForm()
    const getCategiesQuery = useQuery('merchantGetCategories', getCategories, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchOnMount: false,
        refetchIntervalInBackground: false
    })
    const createShopQuery = useMutation((data: ICreateShop)=>createShop(data))
    const submit: SubmitHandler<ICreateShop> = async (data) => {
        console.log(data)
        await createShopQuery.mutateAsync(data)
            .then(
                async ()=>{
                    toast('Shop created!')
                    setTimeout(()=>{
                        dispatch(open())
                        reset()
                        setStage(1)
                    }, 2000)
                    return
                },
                ()=>{
                    toast('Something gone wrong!')
                    reset()
                    setStage(1)
                    return
                }
            )
    }
    const logoinput = watch('logo')
    const bannerinput = watch('banner')
    function checkFirstStage() {
        if(checkMainInputs() !== true && Object.keys(errors).length===0) setStage(2)
        else onError(errors)
    }
    function setStage(num: number) {
        setStageNumber(num)
        block(true)
        setTimeout(()=>block(false), 100)
    }
    return(
        <Container onSubmit={handleSubmit(submit, onError)}>
            <ToastContainer position="top-center" autoClose={500} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss={false} draggable theme="dark" />
            <Exit type="button" onClick={()=>dispatch(open())} />
            {
                stage === 1
                    ?<>
                        <Title>
                            Your New Shop
                        </Title>
                        <Form>
                            <Part>
                                <PartTitle>
                                    Shop Informations
                                </PartTitle>
                                <Input placeholder="Shop Name" {...registerInput('name')}/>
                                
                                    {
                                        getCategiesQuery.data !== undefined
                                            ? <Category {...registerInput('category_id')}>
                                                    {
                                                        getCategiesQuery.data.data.map(el=>
                                                            <option key={el.id} value={el.id}>
                                                                {
                                                                    el.name
                                                                }
                                                            </option>
                                                        )
                                                    }
                                                </Category>
                                            : <></>
                                    }
                                <Input placeholder="Reg Number (Optional)" $half type="number" {...registerInput('regnumber')}/>
                            </Part>
                            <Part>
                                <PartTitle>
                                    Contact Details
                                </PartTitle>
                                <TwoInputs>
                                    <Input $half placeholder="E-mail Address" type="email" {...registerInput('email')} />
                                    <Input $half placeholder="Telephone Number" type="tel" {...registerInput('phone_number')} />
                                </TwoInputs>
                            </Part>
                            <Part>
                                <PartTitle>
                                    Shop Address
                                </PartTitle>
                                <Input placeholder="Street Address" {...registerInput('street')} />
                                <TwoInputs>
                                    <Input $half placeholder="City" {...registerInput('city')} />
                                    <Input $half placeholder="Zip Code" {...registerInput('zip_code')} />
                                </TwoInputs>
                            </Part>
                        </Form>
                        <SubmitBtn type="button" onClick={checkFirstStage}>
                            Create Shop
                        </SubmitBtn>
                    </>
                    : stage === 2
                    ? <>
                        <Title>
                            Description
                        </Title>
                        <Description maxLength={1000} placeholder="Type here..." {...registerInput('description')} />
                        <SubmitBtn disabled={blocked} onClick={()=>setStage(3)}>
                            Submit
                        </SubmitBtn>
                    </>
                    : stage === 3
                    ?<> 
                        <Title>
                            Shop Logo
                        </Title>
                        <LogoContainer>
                            <Logo $hidden={ logoinput && logoinput.length > 0 } accept=".jpg, .jpeg, .png, .bmp, .svg, .webp" type="file" {...registerInput('logo')} />
                            { logoinput ? logoinput.length > 0 && <LogoImg $logo={URL.createObjectURL(logoinput[0])} /> : <></>}
                        </LogoContainer>
                        <Btns>
                            <SubmitBtn disabled={blocked || logoinput?.length === 0} type="button" onClick={()=>setStage(4)}>
                                Submit
                            </SubmitBtn>
                            <SkipBtn disabled={blocked} type="button" onClick={()=>{setValue('logo', undefined); setStage(4)}}>
                                Skip
                            </SkipBtn>
                        </Btns>
                    </>
                    : stage === 4 &&
                    <> 
                        <Title>
                            Shop Banner
                        </Title>
                        <BannerContainer>
                            <Banner $hidden={ bannerinput && bannerinput.length > 0 } accept=".jpg, .jpeg, .png, .bmp, .svg, .webp" type="file" {...registerInput('banner')} />
                            { bannerinput ? bannerinput.length > 0 && <BannerImg $banner={URL.createObjectURL(bannerinput[0])} /> : <></>}
                        </BannerContainer>
                        <Btns>
                            <SubmitBtn disabled={blocked || bannerinput?.length === 0}>
                                Submit
                            </SubmitBtn>
                            <SkipBtn disabled={blocked} onClick={()=>{setValue('banner', undefined)}}>
                                Skip
                            </SkipBtn>
                        </Btns>
                    </>
            }
        </Container>
    )
}