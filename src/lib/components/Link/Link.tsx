import React from 'react'
import Box from '@mui/material/Box'

type Props = {
  href: any
  children: any
  newTab?: boolean
  sx?: any
  onClick?: any
}

/**
 * [Docs](https://react-location.tanstack.com/docs/api#link)
 * @example
 * <link href='/' />
 */
export default function Link(props: Props) {
  return <LinkContent content={props.children} sx={props.sx} {...props} />
}

const LinkContent = React.forwardRef(
  ({ onClick, href, content, sx, newTab }: any, ref) => {
    const newTabProps = newTab
      ? {
          rel: 'noopener',
          target: '_blank',
        }
      : {}

    return (
      <Box
        component='a'
        href={href}
        onClick={onClick}
        ref={ref}
        sx={{
          textDecoration: 'none',
          '&:active': {
            color: 'currentColor',
          },
          ...sx,
        }}
        {...newTabProps}
      >
        {content}
      </Box>
    )
  },
)
