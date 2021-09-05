import{
Input,
Label,
rotate,
Indicator,
} from './styled';

export default function Checkbox ({
  id=1,
  disabled =false,
  label ='x',
  checked ,
  //name='xcv',
  value,
  onChange,
}){
    return(

      <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input
        id={id}
        type="checkbox"
        //name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={(event) =>onChange(event.target.checked)}
      />
      <Indicator checked={checked} />
    </Label>
    )
}

