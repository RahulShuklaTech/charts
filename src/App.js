
import { Chart } from './components/Chart';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function App() {
  const classes = useStyles();
  
  const dummyData = {
    1: [2,3,4,5,6],
    3: [10,13,14,17,19],
    6: [40,50,60,80,100]
  }

  const [numberOfMonths, setNumberOfMonths] = useState(1);
  const [chartData, setChartData] = useState({
    labels: ['New York', 'London', 'Tokyo', 'Beijing', 'New Delhi'],
    datasets: [ {
        label: 'Leads By City',
        data: dummyData[numberOfMonths],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FFA600',
            '#36A2EB'
         ]
    }],
    options: {
      title: {
          display: true,
          text: 'Leads Per City',
          fontSize: 20,
      },
      legend: {
          display: true,
          position: 'bottom'
      }
      
  }
})

  const handleChange = (event) => { 
    setNumberOfMonths(event.target.value);
    let copy = {...chartData};
    copy.datasets[0].data = dummyData[event.target.value]; 
    setChartData(copy);
    
  }
  
  return (
    <div className="App" style = {{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems : "center", marginTop:'3rem' }}>
      <h2>
        <span style = {{color: "blue", border: "2px solid lightgrey", padding: "1rem" }}>Charts Example</span>
      </h2>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Select Number of Months</InputLabel>
        <Select
          labelId="Select Number of Months"
          id="demo-simple-select-outlined"
          value={numberOfMonths}
          onChange={handleChange}
          label="Select Number of Months"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Daily</MenuItem>
          <MenuItem value={3}>Weekly</MenuItem>
          <MenuItem value={6}>Monthly</MenuItem>
        </Select>
      </FormControl>
      <Chart chartData = {chartData} height = {5} width = {100}/>
    </div>
  );
}

export default App;
