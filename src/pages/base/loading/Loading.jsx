import {PacmanLoader} from "react-spinners";
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = (props) => {
    return <div className={` flex items-center justify-center w-screen h-screen ${props.className ? props.className : ''}`}>
        <PacmanLoader css={override} size={15} color={'#f78ca0'} />
    </div>
}

export default Loading;