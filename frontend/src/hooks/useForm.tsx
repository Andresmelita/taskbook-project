import { useState } from "react";
interface Fields {
    [key: string]: any;
}

const useForm = ({initialValues}: Fields) => {
    
    const [fields, setFields] = useState<Fields>(initialValues)
    const onChange = (event: any) => {
        const {value, name, type, checked} = event.target;
        setFields({...fields, [name]: (type === 'checkbox') ? checked :value});
    }

    return {
        getInput: (name: string) => ({
            name,
            value: fields[name],
            onChange
        }),
        fields
    }
} 

export default useForm;