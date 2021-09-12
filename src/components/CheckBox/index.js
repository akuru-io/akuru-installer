import{
Input,
Label,
Indicator,
} from './styled';

export default function Checkbox ({
  id=1,
  disabled =false,
  label ='x',
  checked ,
  value,
  onChange,
}){
    return(

      <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input
        id={id}
        type="checkbox"
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={(event) =>onChange(event.target.checked)}
      />
      <Indicator checked={checked} />
    </Label>
    )
}

