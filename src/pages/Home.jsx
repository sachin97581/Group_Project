import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Home() {
  return (
    <div>
       <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
    </div>
  )
}

export default Home