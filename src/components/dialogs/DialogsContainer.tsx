import { StoreType } from "../../redux/store";
import { sendMessageAC, updateMessageTextAC } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

type PropsType = {
  store: StoreType;
};

export const DialogsContainer = (props: PropsType) => {
  let state = props.store.getState().dialogsPage;
  let dispatch = props.store.dispatch.bind(props.store);

  const sendMessage = () => {
    dispatch(sendMessageAC());
  };

  const onMessageChange = (body: string) => {
    dispatch(updateMessageTextAC(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onMessageChange}
      addMessage={sendMessage}
      state={state}
    />
  );
};
