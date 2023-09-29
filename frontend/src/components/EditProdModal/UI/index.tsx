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
         type Props
} from '../'
import { useState } from "react"
import { useForm } from 'react-hook-form'

export const EditProdModal: React.FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm()
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
    return(
        <Container>
            <Head>
                <Title>
                    Edit Product
                </Title>
                <Exit onClick={()=>dispatch(open())} />
            </Head>
            <Form>
                <LeftSide>
                    <ImgInput $bg={img} type="file" onChange={imgHandle} />
                    <LeftInputs>
                        <SimpleInput placeholder="Quantity" />
                        <SimpleInput placeholder="Per Price" />
                    </LeftInputs>
                    <CheckBoxes>
                        <CheckBoxContainer>
                            <CheckBox type="checkbox" />
                            <CheckBoxText>
                                Active {/*Поставить Active из бд*/}
                            </CheckBoxText>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <CheckBox type="checkbox" />
                            <CheckBoxText>
                                Draft
                            </CheckBoxText>
                        </CheckBoxContainer>
                    </CheckBoxes>
                </LeftSide>
                <RightSide>
                    <SimpleInput placeholder="Public Name" />
                    <Filters>
                        <Filter placeholder={'Product Category'} classNamePrefix={'Select'} /> {/*Добавить категории из бд*/}
                        <Filter placeholder={'Sub Category'} classNamePrefix={'Select'} />
                    </Filters>
                    <SimpleTextArea $height={'272px'} placeholder="Product  Description" />
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