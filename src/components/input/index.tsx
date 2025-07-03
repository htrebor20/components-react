import { useForm } from 'react-hook-form';
import './input.sass';
import { InputProps } from './types';

function Input({ label, placeHolder, helperText }: InputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form className="input-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <label className="input-label">{label}</label>

            <div className={`placeHolder-wrapper ${errors.search ? 'error' : ''}`}>
                <input
                    type="text"
                    placeholder={placeHolder}
                    {...register("search", { required: "Este campo es obligatorio" })}
                />
            </div>

            {typeof errors.search?.message === 'string' && (
                <p className="error-message">{errors.search.message}</p>
            )}

            {helperText && !errors.search && <p>{helperText}</p>}

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Input;
