import React from 'react'

function FormInput({ changeCallBack, inputType, defValue, colMdSize, label }) {
    return (
        <div className={colMdSize}>
            <label htmlFor="customInput" className="form-label">
                {label}
            </label>
            <input
                required
                type={inputType}
                className="form-control"
                id="customInput"
                defaultValue={defValue}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        frontCamera: e.target.value,
                    });
                }}
            />
        </div>
    )
}

export default FormInput
