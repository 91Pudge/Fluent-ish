import { InputGroup, Form, ButtonGroup, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const Addword = () => {
  const [message, setMessage] = useState();
  const [word, setWord] = useState();
  const [flag, setFlag] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();

  const handleSubmit = async () => {};

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formWordword">
            <InputGroup>
              <InputGroup.Text id="formWord">{">"}</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <InputGroup>
              <InputGroup.Text id="formDescriptionr">{">"}</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Addword;
