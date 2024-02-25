import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Msg() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Closed Beta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This Web Page is under constrution. If found any bugs till now and want to give any suggestions or features to be added furture,
          contact admin  
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Msg;