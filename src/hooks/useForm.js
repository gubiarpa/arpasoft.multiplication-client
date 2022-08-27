import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const setFieldState = ({name, value}) => {
        setFormState({
            ...formState,
            [name]: value
        });
    }
    
    const onInputChange = ({ target }) => {
        setFieldState(target);
    }

    const resetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        setFieldState,
        onInputChange,
        resetForm
    };
}
