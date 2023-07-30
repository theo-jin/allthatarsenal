'use client'

import { Input,Button ,Grid,Text} from '@nextui-org/react';
import { redirect } from 'next/dist/server/api-utils';
import { useState,FormEvent } from 'react';


export default function App() {
  const [name, setName] = useState<string>("Player Name");
  const [role, setRole] = useState<string>("Role");
  const [nation, setNation] = useState<string>("Nation Code");
  const [describe, setDescribe] = useState<string>("Describe");
  const [birth, setBirth] = useState<Date>(new Date(2000, 0, 1));
  const [pic, setPic] = useState<string>("");
  const [pic2, setPic2] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [pace, setPace] = useState<number>(0);
  const [dribble, setDribble] = useState<number>(0);
  const [pass, setPass] = useState<number>(0);
  const [shot, setShot] = useState<number>(0);
  const [physical, setPhysical] = useState<number>(0);
  const [defence, setDefence] = useState<number>(0);

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/createplayer/new', {
        method: 'POST',
        body: JSON.stringify({
          name,
          role,
          nation,
          describe,
          birth,
          pic,
          pic2,
          number,
          height,
          pace,
          dribble,
          pass,
          shot,
          physical,
          defence,
        }),
    
      });

      if (response.ok) {
        // 요청이 성공적으로 완료되었을 때 수행할 작업
        window.location.href = '/list'
      } 
    } catch (error) {
      // 요청이 실패하거나 예외가 발생했을 때 수행할 작업
    }
  };
  
   

  return (
      <>
          <form onSubmit={handleSubmit}>
      <Grid.Container  gap={1} justify="center">
        
      <Grid xs={12} justify="center" ><Text h1>Create New Player</Text></Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Player Name" placeholder={name} 
      initialValue={name}  value={name} onChange={(e) => setName(e.target.value)}/>
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Role" placeholder={role}
      initialValue={role} value={role} onChange={(e) => setRole(e.target.value)}/>
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"  clearable label="Nation code" placeholder={nation} 
      initialValue={nation} value={nation}onChange={(e) => setNation(e.target.value)} />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"   label="Number" type="number"
              
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))} />
      </Grid>
      <Grid xs={3  } justify="center" >
      <Input 
          width="200px" 
          label="Birth" 
          type="date" 
          value={birth.toISOString().slice(0, 10)}
          onChange={(e) => setBirth(new Date(e.target.value))}
        />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px"   label="Height" placeholder="Height (cm)"  type="number"
     value={height}    onChange={(e) => setHeight(Number(e.target.value))} />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px" clearable  label="Picture" placeholder="Picture" 
       value={pic}  onChange={(e) => setPic(e.target.value)} />
      </Grid>
      <Grid xs={3} justify="center" >
      <Input   width="200px" clearable   label="Picture2" placeholder="Picture2" 
      initialValue="Picture2" value={pic2} onChange={(e) => setPic2(e.target.value)} />
      </Grid>
      
      <Grid  xs={4} justify="center">
      <Input  label="pace"  type="number"
      value={pace} onChange={(e) => setPace(Number(e.target.value))} />
      </Grid>
      <Grid xs={4} justify="center">
      <Input label="dribble"  type="number"
      value={dribble}  onChange={(e) => setDribble(Number(e.target.value))}/>
      </Grid>
      <Grid xs={4} justify="center">
      <Input  label="shot"  type="number"
       value={shot} onChange={(e) => setShot(Number(e.target.value))} />
      </Grid>
      <Grid xs={4} justify="center">
      <Input  label="pass" type="number"
      value={pass} onChange={(e) => setPass(Number(e.target.value))} />
      </Grid>
      <Grid xs={4} justify="center">
      <Input label="physical" type="number"
     value={physical} onChange={(e) => setPhysical(Number(e.target.value))}/>
      </Grid>
      <Grid xs={4} justify="center">
      <Input clearable label="defence" placeholder="defence" 
     value={defence} onChange={(e) => setDefence(Number(e.target.value))} />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={1.5} css={{ mt: "10px" }} justify="center">
    <Grid>
        <Input width="500px" label="Describe" placeholder="Describe"  height="20px"
        value={describe} onChange={(e) => setDescribe(e.target.value)} />
      </Grid>
      <Grid  xs={12} justify="center" >
          <Button flat color="primary" type="submit" >
            Submit
          </Button>
        </Grid>
      </Grid.Container>
      </form> 
    </>
    )
  }