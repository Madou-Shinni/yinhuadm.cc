import {PacmanLoader} from "react-spinners";
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
    return <div className="flex items-center justify-center w-screen h-screen">
        <PacmanLoader css={override} size={15} color={'#333333'} />
    </div>
}

export default Loading;