'use client'
import { Input,Spacer,Button,Grid } from '@nextui-org/react';

export default function Register() {
    return (
      <div>
         <Grid.Container gap={4}>
       <form method="POST" action="/api/auth/signup">
      {/* <Spacer y={2.5} /> */}
      <Grid>
      <Input clearable label="EMAIL" placeholder="Name" type="text" initialValue="arsenal@arsenal" />
      </Grid>
      <Grid>
      <Input.Password labelPlaceholder="Password" type="password" initialValue="narsenal" />
      </Grid>
      <Grid>
      <Input.Password labelPlaceholder="Password Confirm" initialValue="arsenal" />
      </Grid>
      <Grid>
      <Button flat color="primary"  type="submit">Submit</Button>
      </Grid>
      </form>
      </Grid.Container>
    </div>
    )
  }