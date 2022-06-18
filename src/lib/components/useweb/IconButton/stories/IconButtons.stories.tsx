import React from 'react'
import IconButton, { type IconButtonProps } from '@useweb/ui/IconButton'

import IconHamburger from '../../../icons/IconChevron'

export default {
  title: 'Lib/components/IconButton',
}

const Template = (args) => {
  return (
    <div style={{ padding: '20px' }}>
      <IconButton {...args}>
        <IconHamburger />
      </IconButton>
    </div>
  )
}

export const Default = Template.bind({}) as any

const defaultArgs: IconButtonProps = {
  name: 'IconButton',
}

Default.args = defaultArgs

// export const Variant = Template.bind({}) as any

// const VariantArgs: IconButtonProps = {
//  ...defaultArgs,
//  name: 'World',
// }

// Variant.args = VariantArgs
