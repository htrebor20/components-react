import './input.sass';
import { InputProps } from './types';

function Input({ label, placeHolder, helperText, value, onChange }: InputProps) {
    const errors = {
        search: false
    }
    return (
        <div className="input-wrapper" >
            <label className="input-label">{label}</label>

            <div className={`placeHolder-wrapper ${errors.search ? 'error' : ''}`}>
                <input
                    type="text"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}
                />
            </div>

            {/* {typeof errors.search?.message === 'string' && (
                <p className="error-message">{errors.search.message}</p>
            )}

            {helperText && !errors.search && <p>{helperText}</p>} */}

        </div>
    );
}

export default Input;
