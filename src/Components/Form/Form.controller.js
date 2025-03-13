import {useState} from "react";
import booksObserver from "../../Store/Books.observer";

export const useForm = (props) => {
    const [formData, setFormData] = useState({ name: "", author: "" });

    const onSubmit = async (e) => {
        e.preventDefault();
        await booksObserver.add(formData);
        setFormData({ name: "", author: "" })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return {...props, onSubmit, handleChange, formData}
}