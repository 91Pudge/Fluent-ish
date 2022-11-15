import { InputGroup, Form, ButtonGroup, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import WordDataService from "../WordServices";
import { useUserAuth } from "../context/UserAuthContext";

const Addword = (id, setWordId) => {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");
  const [translation, setTranslation] = useState("");
  const [message, setMessage] = useState("");

  const { user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (word === "" || description === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }
    const newWord = {
      word,
      description,
      translation,
      uid: user.uid,
      created_at: new Date()
    };
    console.log(newWord);
    try {
      if (id !== undefined && id !== "") {
        await WordDataService.updateWords(id, newWord);
        setWordId("");
        setMessage({ error: false, msg: "Updated succesfully added" });
      } else {
        await WordDataService.addWords(newWord);
        setMessage({ error: false, msg: "New word succesfully added" });
      }
    } catch (error) {
      console.log(error.message);
      setMessage({ error: true, msg: error.message });
    }
    setWord("");
    setDescription("");
    setTranslation("");
  };

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
          <Form.Group className="mb-3" controlId="formDescription">
            <InputGroup>
              <InputGroup.Text id="formDescriptionr">{">"}</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Translation"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
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
