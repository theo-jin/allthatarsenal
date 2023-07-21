'use client'
import { Input,Textarea ,Grid,Text,Spacer} from '@nextui-org/react';

export default function App() {
    
  return (
      <>
      <Grid.Container  gap={1} justify="center">
      <Grid xs={12} justify="center" ><Text h1>Create New Player</Text></Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Player Name" placeholder="Player Name" initialValue="Player Name" />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Role" placeholder="Role " initialValue="Role" />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Nation code" placeholder="Nation code" initialValue="Nation code" />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Number" placeholder="Number" initialValue="Number" />
      </Grid>
      <Grid xs={3  } justify="center" >
      <Input 
          width="200px" 
          label="Birth" 
          type="date" 
        />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Height" placeholder="Height (cm)" initialValue="Height" />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Picture1" placeholder="Picture1" initialValue="Picture1" />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Picture2" placeholder="Picture2" initialValue="Picture2" />
      </Grid>
      
      <Grid  xs={4} justify="center">
      <Input clearable label="pace" placeholder="pace" initialValue="0" />
      </Grid>
      <Grid xs={4} justify="center">
      <Input clearable label="dribble" placeholder="dribble" initialValue="0" />
      </Grid>
      <Grid xs={4} justify="center">
      <Input clearable label="shot" placeholder="shot" initialValue="0" />
      </Grid>
      <Grid xs={4} justify="center">
      <Input clearable label="pass" placeholder="pass" initialValue="0" />
      </Grid>
      <Grid xs={4} justify="center">
      <Input clearable label="physical" placeholder="physical" initialValue="0" />
      </Grid>
      <Grid xs={4} justify="center">
      <Input clearable label="defence" placeholder="defence" initialValue="0" />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={2.5} css={{ mt: "10px" }} justify="center">
    <Grid>
        <Textarea placeholder="describe" />
      </Grid>
      </Grid.Container>
    </>
    )
  }