import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressCircle(){
    const value = 0.75;
    return(
        <CircularProgressbar 
        value={value} 
        maxValue={1} 
        text={`${value * 100}%`} 
        strokeWidth={5}
        styles={buildStyles({
        pathColor: 'rgb(5, 105, 255)',
        trailColor:'#f5f5f5',
        textColor: 'black',
    })}
        />
    );
};