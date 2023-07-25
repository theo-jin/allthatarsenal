'use client'

import { useState ,useEffect } from "react"
import { Button, Grid,Card, Input,Text} from "@nextui-org/react";
import Modal from "../../components/Modal"
export default function Comment({result}) {
  let [comment,setComment]= useState('')
  let [data,setData]=useState([])
  useEffect(()=>{
    fetch('/api/comment/list?id='+result._id).then(r=>r.json()).then((result)=>{
      setData(result)
    })
  },[data]) 

  return (
    <Grid.Container justify="center">
    <Grid xs={12}  justify="center">
        <Text h2 css={{margin:"0px"}}>
          Comment
          </Text>
        </Grid> 
     
        {data.length>0 ? data.map(function(a,i){
          return(
            <Grid xs={12}  justify="center">
               <Card  variant="bordered" borderWeight="normal" 
               css={{  p: "$4", mw: "500px",borderRadius:"5px" ,margin:"1px",padding:"1px"}} >
               <Grid.Container justify="center">
                <Grid xs={6}>#{i+1}. {data[i].comment} </Grid>
                <Grid justify="flex-end" xs={6}>
                <Modal comment={data[i]}/>
                </Grid>  
                </Grid.Container>
                </Card>
              
            </Grid>
          ) 
      }): 'Please write the first comment!'}
     <Grid xs={12}  justify="center">
        <Input size="lg"  placeholder="Write Comment" 
        onChange={(e)=>{ setComment(e.target.value) }} />
        <Button    auto css={{ background:"#687076"}}    onClick={()=>{
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