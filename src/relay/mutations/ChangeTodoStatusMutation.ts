import { commitMutation } from 'react-relay';
import { Environment } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation ChangeTodoStatusMutation($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      completed
    }
  }
`;

const commit = (environment: Environment, completed: boolean, id: string) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      id,
      input: { completed },
    },
  });
};

export default commit;
