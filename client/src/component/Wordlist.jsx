import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import WordDataService from "../WordServices";

const Wordlist = ({ getWordId }) => {
  const [word, setWord] = useState("");
  console.log(word);
  useEffect(() => {
    getWords();
  }, []);
  const getWords = async () => {
    const data = await WordDataService.getAllWords();
    setWord(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div className="p-4 m-auto table-responsive">
      <div className="mb-2 "></div>
      <Table className="" striped bordered hover size="sm">
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Wordlist;
