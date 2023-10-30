import { Flex, 
         FormWrapper, 
         Select, 
         Subtitle, 
         Title 
} from "./styled"
import { Input, 
         Button, 
         useProfileForm,
         ICreateProfile,
         onError,
         Exit,
         useAppDispatch,
         open
} from '../'
import { SubmitHandler } from "react-hook-form"
import { ToastContainer } from "react-toastify"

export const EditMerchantModal: React.FC = () => {
    const { handleSubmit, registerInput } = useProfileForm()
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<ICreateProfile> = async (data) => {
        console.log(data)
    }
    return(
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} autoComplete='off' $gap='20px' $maxWidth='644px' >
            <Exit onClick={() => dispatch(open())} />
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
            <Title $mb='10px'>Edit Profile details</Title>
            <Subtitle>Your Informations</Subtitle>
            <Flex>
                <Input placeholder='First name' type='text' {...registerInput('first_name')} />
                <Input placeholder='Last name' type='text' {...registerInput('last_name')} />
            </Flex>
            <Input placeholder='Full name' type='text' {...registerInput('full_name')} />
            <Flex >
                <Input placeholder='Birthday (DD/MM/YYYY)' type='date' {...registerInput('birthday')} />
                <Select placeholder='Gender'{...registerInput('gender')} >
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                </Select>
            </Flex>
            <Flex $mb='10px'>
                <Input placeholder='Mobile Number' type='tel' {...registerInput('phone_number')} />
            </Flex>
            <Subtitle >Home Address</Subtitle>
            <Input placeholder='Street Address' {...registerInput('street')} />
            <Flex $mb='20px'>
                <Input placeholder='City' type='text'{...registerInput('city')} />
                <Input placeholder='Zip Code' {...registerInput('zip_code')} />
            </Flex>
            <Button type='submit' br='10px'>Continue</Button>
        </FormWrapper>
    )
}