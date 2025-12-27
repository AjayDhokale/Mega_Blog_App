import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="text-sm text-slate-400 mb-1 block">
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                ref={ref}
                className={`w-full px-3 py-2 rounded-lg
        bg-slate-900 text-slate-100
        border border-slate-700
        focus:ring-2 focus:ring-indigo-500
        outline-none ${className}`}
                {...props}
            />
        </div>
    )
})

export default Input