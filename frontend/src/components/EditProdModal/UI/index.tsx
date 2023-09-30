import { Cancel, 
         CheckBox, 
         CheckBoxContainer, 
         CheckBoxText, 
         CheckBoxes, 
         Container, 
         Delete, 
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
         useAppDispatch,
         open,
         type Props,
         Edit,
         option,
         getCategories,
         categories,
         sendEditForm
} from '../'
import { useState } from "react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from "react-query";

export const EditProdModal: React.FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch()
    const sendForm = useMutation((values: Edit)=>sendEditForm(values))
    const { data, isLoading, isError } = useQuery('productCategories', getCategories)
    if(isError) console.error('EditModal: Categories query error')
    const { register, handleSubmit, setValue } = useForm<Edit>()
    const [img, setImg] = useState<string | ArrayBuffer | null>(null) // добавить сюда фото из бд
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
    const onSubmit: SubmitHandler<Edit> = (data) => {
        sendForm.mutate(data)
    }
    function onError() {
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
                    Edit Product
                </Title>
                <Exit onClick={()=>dispatch(open())} />
            </Head>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <LeftSide>
                    <ImgInput {...register('img', { required: true })} $bg={img} type="file" onChange={imgHandle} />
                    <LeftInputs>
                        <SimpleInput type="number" {...register('quantity', { required: true, min: 1 })} placeholder="Quantity" />
                        <SimpleInput type="number" {...register('price', { required: true, min: 100 })} placeholder="Per Price" />
                    </LeftInputs>
                    <CheckBoxes>
                        <CheckBoxContainer>
                            <CheckBox {...register('active')} type="checkbox" />
                            <CheckBoxText>
                                Active {/*Поставить Active из бд*/}
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
                        <Filter isLoading={isLoading} options={categories(data?.categories)} onChange={category} placeholder={'Product Category'} classNamePrefix={'Select'} /> {/*Добавить категории из бд*/}
                        <HiddenInput {...register('category', { required: true })} />
                        <Filter isLoading={isLoading} options={categories(data?.subcategories)} onChange={subcategory} placeholder={'Sub Category'} classNamePrefix={'Select'} />
                        <HiddenInput {...register('subcategory', { required: true })} />
                    </Filters>
                    <SimpleTextArea {...register('description', { required: true, minLength: 50 })} $height={'272px'} placeholder="Product Description" />
                    <PublishBtns>
                        <Delete>
                            Delete
                        </Delete>
                        <Publish>
                            Save
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