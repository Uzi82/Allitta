import { Cancel, CheckBox, CheckBoxContainer, CheckBoxText, CheckBoxes, Container, 
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
         open
} from '../'
import { useState } from "react"


export const AddProdModal: React.FC = () => {
    const dispatch = useAppDispatch()
    const [img, setImg] = useState<string | ArrayBuffer | null>(null)
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
                    Add Product
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
                                Active
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
                        <Filter placeholder={'Product Category'} classNamePrefix={'Select'} />
                        <Filter placeholder={'Sub Category'} classNamePrefix={'Select'} />
                    </Filters>
                    <SimpleTextArea $height={'272px'} placeholder="Product  Description" />
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