import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import WordDataService from "../WordServices";

const Wordlist = ({ getWordId }) => {
  const [word, setWord] = useState([]);

  useEffect(() => {
    getWords();
  }, []);
  const getWords = async () => {
    const data = await WordDataService.getAllWords();
    setWord(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await WordDataService.deleteWord(id);
    getWords();
  };

  return (
    <div className=" m-auto table-responsive-sm">
      <div className="mb-2 ">
        <Button variant="dark edit" onClick={getWords}>
          Refresh List
        </Button>
      </div>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Word</th>
            <th>Translation</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {word.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.word}</td>
                <td>{doc.description}</td>
                <td>{doc.translation}</td>
                <td>
                  {/* <Button onClick={(e) => getBookId(doc.id)}>edit</Button> */}
                  <Button onClick={(e) => deleteHandler(doc.id)}>delete</Button>
                </td>
                <td>delete</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Wordlist;
