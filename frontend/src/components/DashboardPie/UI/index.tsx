import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Chart, 
         Color, 
         Container,
         DescEl,
         DescTitle,
         Header,
         List,
         LowStock,
         LowStockEl,
         LowStockHeader,
         LowStockRemain,
         LowStockTitle,
         PieContainer,
         Text
} from './styled';
import { useQuery } from 'react-query';
import { LazyLoad, getLowStock } from '../';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DashboardPie: React.FC = () => {
    const { data, isError, isLoading } = useQuery('lowStockProducts', getLowStock)
    if(isError) console.error('LowStock: Query error')
    const chartData = {
        labels: ['Added Stock', 'Available Stock'],
        datasets: [
            {
                data: [9, 1],
                backgroundColor: [
                'rgba(93, 32, 214, 1)',
                'rgba(93, 32, 214, 0.2)'
                ]
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return(
        <Container>
            <Chart>
                <Text>
                    <Header>
                        Stock Summery
                    </Header>
                    <DescEl>
                        <Color $color="rgba(93, 32, 214, 1)"/>
                        <DescTitle>
                            Added Stock
                        </DescTitle>
                    </DescEl>
                    <DescEl>
                        <Color $color="rgba(93, 32, 214, 0.2)"/>
                        <DescTitle>
                            Available Stock
                        </DescTitle>
                    </DescEl>
                </Text>
                <PieContainer>
                    <Pie data={chartData} options={options} />
                </PieContainer>
            </Chart>
            <LowStock>
                <LowStockHeader>
                    Low stock Products
                </LowStockHeader>
                <List>
                    {
                        isLoading
                            ? <LazyLoad $width='100%' $height='140px'/>
                            : data && data.length > 0
                                ? data.map(el=>{
                                    return(
                                        <LowStockEl key={el.id}>
                                            <LowStockTitle>
                                                { el.title }
                                            </LowStockTitle>
                                            <LowStockRemain>
                                                Remaining { el.remaining }%
                                            </LowStockRemain>
                                        </LowStockEl>
                                    )
                                })
                                : <LazyLoad $height='140px' $width='100%' />
                    }
                </List>
            </LowStock>
        </Container>
    )
}