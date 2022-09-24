export const posts = /* GraphQL */ `
  query posts($after: String, $before: String, $first: Int, $last: Int) {
    posts(after: $after, before: $before, first: $first, last: $last) {
      nodes {
        body
        id
        title
        user {
          id
          name
          gender
        }
      }
    }
  }
`;

export const getPostById = /* GraphQL */ `
  query post($id: ID!) {
    post(id: $id) {
      body
      id
      title
      user {
        id
        name
        gender
      }
      comments {
        nodes {
          body
          email
          id
          name
        }
      }
    }
  }
`;
