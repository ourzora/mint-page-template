import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Box } from 'degen'
import CreateDropButton from '@components/CreateDropButton'

const CreatePage = () => {
  return (
    <Box
      display="flex"
      padding="6"
      marginBottom="12"
      alignItems="center"
      justifyContent="space-between"
    >
      <CreateDropButton />
      <ConnectButton />
    </Box>
  )
}

export default CreatePage
