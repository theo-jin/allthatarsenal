'use client'

import { useState ,useEffect } from "react"
import { Button, Grid,Spacer, Input,Text} from "@nextui-org/react";

export default function Comment({result}) {
  let [comment,setComment]= useState('')
  let [data,setData]=useState([])
  useEffect(()=>{
    fetch('/api/comment/list?id='+result._id).then(r=>r.json()).then((result)=>{
      setData(result)
    })
  },[]) 
  console.log(data)
  return (
    <Grid.Container justify="center">
    <Grid xs={12}  justify="center">
        <Text h2>Comment</Text>
        </Grid> 
     
        {data.length>0 ? data.map(function(a,i){
          return(
            <Grid xs={12}  justify="center">
               <Text h4>{data[i].comment}</Text>
              </Grid> 
          ) 
      }): 'Please write the first comment!'}
     <Grid xs={12}  justify="center">
        <Input size="lg"  placeholder="Write comment" onChange={(e)=>{ setComment(e.target.value) }} />
        <Button  size="xs" onClick={()=>{
             fetch('/api/comment/new',{
              method:'POST',
              body:JSON.stringify({
                comment : comment,
                 _id :result._id }) 
            })
        }}>submit</Button>
  
        </Grid>
       
       
  
        </Grid.Container>
  )
}  