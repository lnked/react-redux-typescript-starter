import * as React from 'react'

export interface P {
  id: string,
  label?: string;
  error?: string;
  required?: boolean;
}

export default function Input ({ id, label = '', error = '', ...attrs }: P) {
  const textInput = React.createRef<HTMLInputElement>()

  React.useEffect(() => {
    textInput.current!.focus()
  }, [])

  return (
    <div className='inputWrapper'>
      <div className='labelsWrapper'>
        {label
          && <label className='inputLabel' htmlFor={id}>{label}</label>
        }
        {attrs.required
          && <span className='inputRequired'>Required</span>
        }
      </div>

      <input
        ref={textInput}
        name={id}
        id={id}
        {...attrs}
      />

      {error
        && <span className='inputError'>{error}</span>
      }
    </div>
  )
}
