
import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const UMInput = ({type, name, label}) => {
   
    return <>
    {
        label ? <label htmlFor={name}>{label}</label> : null
    }
    <Controller
    name={name}
    render={({ field }) => (
        <Input  {...field} type={type}  id={name}/>
    )}
    />
    </>
};

export default UMInput;