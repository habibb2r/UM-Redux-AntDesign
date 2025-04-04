
import { useFormContext } from 'react-hook-form';

const UMInput = ({type, name, label}) => {
    const { register} = useFormContext()
    return <>
    {
        label ? <label htmlFor={name}>{label}</label> : null
    }
    <input type={type} id={name} {...register(name)} />
    </>
};

export default UMInput;