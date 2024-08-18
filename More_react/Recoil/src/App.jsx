import { useRecoilValue, RecoilRoot ,useRecoilState, useSetRecoilState} from 'recoil';
import { networkAtom,jobsAtom,notificationsAtom,messagingAtom } from './atoms';
import { useMemo } from 'react';
import './App.css';


function App() {
  return (
    <RecoilRoot>
      <NetworkButtons />
    </RecoilRoot>
  );
}


function NetworkButtons() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilState(messagingAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  

  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>
      <ButtonRender />
      
    </>
  );
}

function ButtonRender(){
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return <>
  <button onClick={()=>{
    setMessagingAtomCount(c=>c+1);
  }}>Me</button>
  <button onClick={()=>{
    setMessagingAtomCount(c=>0);
  }}> Badmos</button>
  </>
}

export default App;
