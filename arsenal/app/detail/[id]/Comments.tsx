'use client'

import { useState ,useEffect } from "react"
import { Button, Grid,Card, Input,Text} from "@nextui-org/react";
import Modal from "./Modal"
import { ObjectId } from "mongodb";

interface CommentItem {
  comment: string;
  _id: ObjectId;
  author:string;
  parent: ObjectId;
}

interface CommentProps {
  result: {
    _id: ObjectId;
  };
}

export default function Comment({ result }: CommentProps) {
  
  let [comment,setComment]= useState('')
  let [data, setData] = useState<CommentItem[]>([]);

  useEffect(()=>{
    fetch('/api/comment/list?id='+result._id).then(r=>r.json()).then((result)=>{
      setData(result)
    })
  },[data]);
 


  const submitHandler=()=>{
    fetch('/api/comment/new',{
     method:'POST',
     body:JSON.stringify({
       comment : comment,
        _id :result._id }) 
   }).then(()=>fetch('/api/comment/list?id='+result._id).then(r=>r.json()).then((result)=>{
    setData(result)
  }))
}

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
                <Grid xs={7}>#{i+1}. {data[i].comment}  </Grid>
                <Grid xs={4}>작성자:{data[i].author} </Grid>
                <Grid justify="flex-end" xs={1}>
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
        <Button auto css={{ background:"#687076"}}  onPress={submitHandler}>submit</Button>

        </Grid>
       
       
  
        </Grid.Container>
  )
}  