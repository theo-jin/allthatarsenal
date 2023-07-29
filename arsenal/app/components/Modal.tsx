'use client'

import {useState} from "react";
import { Modal, Input, Row, Checkbox,Link,Button, Text } from "@nextui-org/react";


export default function App(comment) {
  const [visible, setVisible] = useState(false);
  let [com,setCom]= useState(`${comment.comment.comment}`)
  const handler = () => setVisible(true);       
  const closeHandler = () => {
    setVisible(false);
  };

  const handleEdit = ()=>{
    fetch('/api/comment/edit',{
        method : 'POST', 
        body:JSON.stringify({
            comment :com,
            _id :comment.comment._id})}).then(()=>{setVisible(false)})
 }

 const handleDelete = () => {
  fetch('/api/comment/delete', {
    method: 'DELETE',
    body: comment.comment._id
  })
};


  return (
    <div>
      <Button auto css={{ background:"#687076"}} onPress={handler}>
      ✎ or 🗑️
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Comment 수정 및 삭제
          </Text>
        </Modal.Header>
        <Modal.Body>
        
          <Input
          
            bordered
            fullWidth
            color="primary"
            size="lg"
            initialValue={com}
            onChange={(e)=>{ setCom(e.target.value) }} 
          />
        
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat onPress={handleEdit}>
           Edit
          </Button>
          <Link   href={`/detail/${comment.comment.parent}`}>  
          <Button auto flat  color="error" onPress={handleDelete} >
            Delete
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}