import {useForm} from "./Form.controller";

import "./Form.styles.css"

export const Form = (props) => {
    const {onSubmit, handleChange, formData, isValid} = useForm(props);

    return (
        <form className={'form'} onSubmit={onSubmit}>
            <input className={'formInput'} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" />
            <input className={'formInput'} type="text" name="author" value={formData.author} onChange={handleChange} placeholder="author" />
            <button disabled={!isValid} className={`submitButton ${!isValid && 'disabledButton'}`} type="submit">Add book</button>
        </form>
    )
}