import React, { forwardRef } from 'react'
import Box from '@mui/material/Box'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

type Props = {
  children: any
  onSubmit: (data: any) => any
  defaultValues?: object
  sx?: object
}

const Form = forwardRef(
  ({ children, onSubmit, defaultValues = {}, sx = {} }: Props, ref) => {
    const methods = useForm({ defaultValues })

    return (
      <FormProvider {...methods}>
        <FormElement onSubmit={onSubmit} ref={ref} sx={sx}>
          {children}
        </FormElement>
      </FormProvider>
    )
  },
)

const FormElement = forwardRef(({ children, onSubmit, sx }: Props, ref) => {
  const { handleSubmit, register } = useFormContext()

  return (
    <Box component='form' ref={ref} onSubmit={handleSubmit(onSubmit)} sx={sx}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </Box>
  )
})

export default Form
