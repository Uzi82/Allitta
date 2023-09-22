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

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
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

export const DashboardPie: React.FC = () => {
    const data = {
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
                    <Pie data={data} options={options} />
                </PieContainer>
            </Chart>
            <LowStock>
                <LowStockHeader>
                    Low stock Products
                </LowStockHeader>
                <List>
                    <LowStockEl>
                    <LowStockTitle>
                        Product name
                    </LowStockTitle>
                    <LowStockRemain>
                        Remaining 10%
                    </LowStockRemain>
                </LowStockEl>
                <LowStockEl>
                    <LowStockTitle>
                        Product name
                    </LowStockTitle>
                    <LowStockRemain>
                        Remaining 10%
                    </LowStockRemain>
                </LowStockEl>
                <LowStockEl>
                    <LowStockTitle>
                        Product name
                    </LowStockTitle>
                    <LowStockRemain>
                        Remaining 10%
                    </LowStockRemain>
                </LowStockEl>
                <LowStockEl>
                    <LowStockTitle>
                        Product name
                    </LowStockTitle>
                    <LowStockRemain>
                        Remaining 10%
                    </LowStockRemain>
                </LowStockEl>
                <LowStockEl>
                    <LowStockTitle>
                        Product name
                    </LowStockTitle>
                    <LowStockRemain>
                        Remaining 10%
                    </LowStockRemain>
                </LowStockEl>
                <LowStockEl>
                    <LowStockTitle>
                        Product name
                    </LowStockTitle>
                    <LowStockRemain>
                        Remaining 10%
                    </LowStockRemain>
                </LowStockEl>
                </List>
                
                
            </LowStock>
        </Container>
    )
}