import { graphql } from 'react-apollo';
import { LOGIN } from '../Data/Login';
import Login from '../Layout/Auth';

const Authenticate = graphql(LOGIN)(Login);

export default Authenticate;
