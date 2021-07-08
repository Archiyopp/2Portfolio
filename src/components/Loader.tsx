import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: auto;
`;

function Loader() {
  return (
    <PacmanLoader color="#ffe737" loading={true} css={override} size={70} />
  );
}

export default Loader;
