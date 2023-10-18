import { useState } from "react"
import { Banner, 
         BannerContainer, 
         BannerImg, 
         Btns, 
         Container, 
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
import { ToastContainer } from "react-toastify"
import {
         useShopForm,
         onError,
         Exit,
         useAppDispatch,
         open
} from '../'

export const CreateShopModal: React.FC = () => {
    const [stage, setStageNumber] = useState<number>(1)
    const [blocked, block] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { registerInput, handleSubmit, checkMainInputs, watch, setValue, formState: { errors } } = useShopForm()
    const submit = (data: any) => {
        console.log(data)
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
        setTimeout(()=>block(false), 1000)
    }
    return(
        <Container onSubmit={()=>handleSubmit(submit, onError)}>
            <Exit type="button" onClick={()=>dispatch(open())} />
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
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
                                <Input placeholder="Business Category" {...registerInput('category')} />
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
                    ?<> 
                        <Title>
                            Shop Logo
                        </Title>
                        <LogoContainer>
                            <Logo $hidden={ logoinput && logoinput.length > 0 } accept=".jpg, .jpeg, .png, .bmp, .svg, .webp" type="file" {...registerInput('logo')} />
                            { logoinput ? logoinput.length > 0 && <LogoImg $logo={URL.createObjectURL(logoinput[0])} /> : <></>}
                        </LogoContainer>
                        <Btns>
                            <SubmitBtn disabled={blocked} type="button" onClick={()=>setStage(3)}>
                                Submit
                            </SubmitBtn>
                            <SkipBtn disabled={blocked} type="button" onClick={()=>{setValue('logo', undefined); setStage(3)}}>
                                Skip
                            </SkipBtn>
                        </Btns>
                    </>
                    : stage === 3 && <> 
                        <Title>
                            Shop Banner
                        </Title>
                        <BannerContainer>
                            <Banner $hidden={ bannerinput && bannerinput.length > 0 } accept=".jpg, .jpeg, .png, .bmp, .svg, .webp" type="file" {...registerInput('banner')} />
                            { bannerinput ? bannerinput.length > 0 && <BannerImg $banner={URL.createObjectURL(bannerinput[0])} /> : <></>}
                        </BannerContainer>
                        <Btns>
                            <SubmitBtn disabled={blocked} type="submit">
                                Submit
                            </SubmitBtn>
                            <SkipBtn disabled={blocked} type="submit" onClick={()=>{setValue('banner', undefined)}}>
                                Skip
                            </SkipBtn>
                        </Btns>
                    </>
            }
        </Container>
    )
}