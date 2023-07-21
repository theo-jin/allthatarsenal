'use client'

import { useState ,useEffect } from "react"

export default function Comment(props) {
  let [comment,setComment]= useState('')
  let [data,setData]=useState([])
  useEffect(()=>{
    fetch('/api/comment/list?id='+props.result._id).then(r=>r.json()).then((result)=>{
      setData(result)
    })
  },[]) 
  console.log(data)
  return (
      <div>
        <div>댓글목록</div>
        {data.length>0 ? data.map(function(a,i){
          return(
            <div>
              {data[i].comment}
              </div>
          ) 
      }): '로딩중...'}
        <input onChange={(e)=>{ setComment(e.target.value) }} />
        <button onClick={()=>{
             fetch('/api/comment/new',{
              method:'POST',
              body:JSON.stringify({
                comment : comment,
                 _id : props.result._id }) 
            })
        }}>댓글전송</button>
      </div>
  )
}  