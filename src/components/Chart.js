import { Bar} from 'react-chartjs-2';

import React from 'react'

export const Chart = ({ chartData }) => {



    return (
        <div className="chart-container" style = {{display:"flex", flexDirection: "column", gap: "4rem"}}>
            <div style={{ width: "70rem", height: "10rem", margin: "2rem 1rem" }}>
                <Bar
                    data={chartData}
                    options={
                        {title: {
                            display: true,
                            text: 'Leads Per City',
                            fontSize: 20,
                        },
                        legend: {
                            display: false,
                            position: 'bottom'
                        }}

                    }
                />

            </div>
           
        </div>
    )
}
