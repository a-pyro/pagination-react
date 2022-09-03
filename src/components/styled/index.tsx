import styled from '@emotion/styled'

type ButtonProps = {
  isActive?: boolean
  isArrow?: boolean
}

export const Button = styled('div')<ButtonProps>(
  ({ isActive = false, isArrow = false }) => ({
    textAlign: 'center',
    borderRadius: '8px',
    border: 'unset',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    opacity: '0.5',
    backgroundColor: isActive ? 'teal' : 'lightgray',
    margin: `0px ${isArrow ? 10 : 5}px`,
    width: '25px',
    height: '25px',
    padding: isArrow ? '0.6em 1.2em' : '0px 0px',
    color: isActive ? 'white' : undefined,
    transform: isActive ? 'scale(1.2)' : undefined,
    transition: 'all .1s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      backgroundColor: '#213547',
      color: 'white',
    },
    '&:active': {
      backgroundColor: '#1a1a1a28',
    },
  })
)

export const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
})
