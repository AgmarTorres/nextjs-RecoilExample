import { useRecoilState, useRecoilValue } from 'recoil';
import { charState, nameState } from '../../state/state';

const Display = () => {
  const charname = useRecoilValue(charState);
  const [name, setName] = useRecoilState(nameState);
  return (
    <div>
      <p>My name is {name}</p>
      <p>My name has {charname} characters</p>
    </div>
  );
};

export default Display;
