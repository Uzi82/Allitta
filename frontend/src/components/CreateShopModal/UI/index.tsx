import { useState } from "react"
import { Container, 
         Form, 
         Input, 
         Part, 
         PartTitle, 
         Title 
} from "./styled"
import {
         Filters
} from '../'
import { useForm } from "react-hook-form"

export const CreateShopModal: React.FC = () => {
    const [stage, setStage] = useState<number>(1)
    const { register, handleSubmit } = useForm()
    const submit = (data: any) => {
        console.log(data)
    }
    return(
        <Container onSubmit={()=>handleSubmit(submit)}>
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
                                <Input placeholder="Shop Name" {...register('name', { required: true })}/>
                                <Filters $full $regular $height="45px" classNamePrefix={'Select'} />
                            </Part>
                        </Form>
                    </>
                    : stage === 2
                    ?<> stage 2
                    </>
                    : stage === 3 && <> stage 3
                    </>
            }
        </Container>
    )
}