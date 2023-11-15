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
import { Props } from '../';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DashboardPie: React.FC<Props> = ({ percent, stock_summary }) => {
    const chartData = {
        labels: ['Added Stock', 'Available Stock'],
        datasets: [
            {
                data: [percent, 100 - percent],
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
                        stock_summary !== undefined
                        && stock_summary.map(el=>{
                            return(
                                <LowStockEl key={el.id}>
                                    <LowStockTitle>
                                        { el.product_name }
                                    </LowStockTitle>
                                    <LowStockRemain>
                                        Remaining { el.available_stock_percent }%
                                    </LowStockRemain>
                                </LowStockEl>
                            )
                        })
                    }
                </List>
            </LowStock>
        </Container>
    )
}