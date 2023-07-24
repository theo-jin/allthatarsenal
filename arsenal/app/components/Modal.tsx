'use client'

import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";


export default function App(comment) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);       
  const closeHandler = () => {
    setVisible(false);
  };

  
  return (
    <div>
      <Button auto css={{ background:"#687076"}} onPress={handler}>
      ✎ or 🗑️
      </Button>
      <Modal
        closeButton
        blur
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
            placeholder="Password"
            initialValue={comment.comment}
          />
        
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat onPress={closeHandler}>
           Edit
          </Button>
          <Button auto flat  color="error" onPress={closeHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}