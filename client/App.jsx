import React, { useState, useEffect } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import InputComp from './components/InputComp';
import ListComp from './components/ListComp';

import './styles/App.scss';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [postList, setPostList] = useState('');

  const endpoint = 'http://localhost:8000/graphql';
  const GqlClient = new GraphQLClient(endpoint);

  function handleChange(event) {
    setPostList(event.target.value);
  }

  async function getList() {
    const query = gql`
      {
        getAllList {
          id title time
        }
      }
    `

    try {
      const req = await GqlClient.request(query);
      setTodoList(req.getAllList);
    }
    catch (err) {
      console.error(err, undefined, 2);
      process.exit(1);
    }
  }

  async function handleSubmit() {
    // GraphQL addList Mutation Query
    const mutation = gql`
      mutation {
        addList(title: "${postList}") {
          id title done time
        }
      }
    `
    // Error Handling
    try {
      const req = await GqlClient.request(mutation);
      console.log(req.addList);
    }
    catch (err) {
      console.error(JSON.stringify(err, undefined, 2));
      process.exit(1);
    }

    setPostList('');
    getList();
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }

  const handleClickBtn = () => handleSubmit();

  useEffect(() => {
    document.title = 'Fullstack GraphQL';
    getList();
  }, []);

  return (
    <div className="app">
      <div className="appWrap">

        <div className="main">
          <InputComp
            inputValue={postList}
            handleChange={(event) => handleChange(event)}
            handleEnter={(event) => handleEnter(event)}
            handleClickBtn={() => handleClickBtn()}
          />
          <div className="listComp">
            {
              todoList.map((item) => {
                return (
                  <ListComp
                    key={item.id}
                    list={item}
                  />
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
