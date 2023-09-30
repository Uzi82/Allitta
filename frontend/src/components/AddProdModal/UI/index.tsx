import { Cancel, CheckBox, CheckBoxContainer, CheckBoxText, CheckBoxes, Container, 
         Exit, 
         Filter, 
         Filters, 
         Form, 
         Head,
         HiddenInput,
         ImgInput,
         LeftInputs,
         LeftSide,
         Publish,
         PublishBtns,
         RightSide,
         SimpleInput,
         SimpleTextArea,
         Title
} from "./styled"
import {
         useAppDispatch,
         open,
         type Add,
         type option,
         getCategories,
         categories,
         sendAddForm
} from '../'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation, useQuery } from "react-query";

export const AddProdModal: React.FC = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading, isError } = useQuery('productCategories', getCategories)
    const sendForm = useMutation((values: Add) => sendAddForm(values))
    if(isError) console.error('AddModal: Categories query error')
    const [img, setImg] = useState<string | ArrayBuffer | null>(null)
    const { register, handleSubmit, setValue } = useForm<Add>()
    function imgHandle(e: React.ChangeEvent<HTMLInputElement>) {
        var target = e.target;
        if(target.files){
            if (!FileReader) {
                setImg(null)
                return;
            }

            if (!target.files.length) {
                setImg(null)
                return;
            }

            var fileReader = new FileReader();
            fileReader.onload = function() {
                setImg(fileReader.result);
            }

            fileReader.readAsDataURL(target.files[0]);
        }
    }
    const onSubmit = (data: Add) => {
        sendForm.mutate(data)
    }
    const onError = () => {
        toast('Something went wrong, check your inputs.')
    }
    const category = (data: option | null) => {
        if(data) setValue('category', data?.value)
    }
    const subcategory = (data: option | null) => {
        if(data) setValue('subcategory', data?.value)
    }
    return(
        <Container>
            <Head>
                <ToastContainer
                    position="top-center"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    draggable={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                    theme="dark"
                    />
                <Title>
                    Add Product
                </Title>
                <Exit onClick={()=>dispatch(open())} />
            </Head>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <LeftSide>
                    <ImgInput {...register('img', { required: true })} $bg={img} type="file" onChange={imgHandle} />
                    <LeftInputs>
                        <SimpleInput {...register('quantity', { required: true })} placeholder="Quantity" />
                        <SimpleInput {...register('price', { required: true })} placeholder="Per Price" />
                    </LeftInputs>
                    <CheckBoxes>
                        <CheckBoxContainer>
                            <CheckBox {...register('active')} type="checkbox" />
                            <CheckBoxText>
                                Active
                            </CheckBoxText>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox {...register('draft')} type="checkbox" />
                            <CheckBoxText>
                                Draft
                            </CheckBoxText>
                        </CheckBoxContainer>
                    </CheckBoxes>
                </LeftSide>
                <RightSide>
                    <SimpleInput {...register('publicName', { required: true })} placeholder="Public Name" />
                    <Filters>
                        <Filter isLoading={isLoading} options={categories(data?.categories)} onChange={category} placeholder={'Product Category'} classNamePrefix={'Select'} />
                        <HiddenInput {...register('category', { required: true })} />
                        <Filter isLoading={isLoading} options={categories(data?.subcategories)} onChange={subcategory} placeholder={'Sub Category'} classNamePrefix={'Select'} />
                        <HiddenInput {...register('subcategory', { required: true })} />
                    </Filters>
                    <SimpleTextArea {...register('description', { required: true, minLength: 50 })} $height={'272px'} placeholder="Product Description" />
                    <PublishBtns>
                        <Publish>
                            Publish
                        </Publish>
                        <Cancel onClick={()=>dispatch(open())}>
                            Cancel
                        </Cancel>
                    </PublishBtns>
                </RightSide>
            </Form>
        </Container>
    )
}