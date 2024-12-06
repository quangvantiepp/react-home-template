import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import { InboxStyles as styles } from "../../styles/pages/inbox/styles";
import { css } from "@emotion/css";
import axios from "axios";
import {
  MessageError,
  MessageSuccess,
} from "../../components/custom/messages/ant_message";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

interface DataMessage {
  id: any;
  message: any;
  user: {
    id: any;
    fullName: any;
    userName: any;
    passWord: any;
    age: any;
    email: any;
  };
}

const { Search } = Input;
const Inbox = () => {
  const { userInfo } = useContext(MainContext);

  const [message, setMessage] = useState<any>("");
  const [getMessage, setGetMessage] = useState<DataMessage[]>([]);
  const [isSendOk, setIsSendOk] = useState<boolean>(false);

  const onSendMessage = () => {
    console.log("message:", message);
    setMessage("");
    const link = "http://localhost:8080/messages/user_messages";
    axios
      .post(`${link}?message=${message}&person_id=${userInfo?.id}`)
      .then((response) => {
        console.log("send:", response.data);
        MessageSuccess("Sended");
        setIsSendOk(!isSendOk);
      })
      .catch((error) => {
        MessageError("Send failed");
      });
  };

  useEffect(() => {
    // get
    const linkGet = "http://localhost:8080/messages/list_messages?";
    axios
      .get(`${linkGet}user_id=${userInfo?.id}`)
      .then((response) => {
        MessageSuccess("get ok");
        console.log("getMessage:", response.data);
        setGetMessage(response?.data?.data);
      })
      .catch((error) => {
        MessageError("get failed");
      });
  }, [isSendOk]);

  const onTyping = (value: any) => {
    setMessage(value);
  };
  console.log("getmess:", getMessage);
  return (
    <div className={styles.boxContainAll}>
      <div className={styles.boxChatInput}>
        <div className={styles.boxChat}>
          <h4>Inbox page</h4>

          {getMessage?.length > 0 &&
            getMessage?.map((item, index) =>
              item.id === 1 ? (
                <TextArea
                  className={styles.chatContent}
                  value={item.message}
                ></TextArea>
              ) : (
                <TextArea
                  className={styles.chatContent2}
                  value={item.message}
                ></TextArea>
              )
            )}
        </div>
      </div>
      <Input
        className={styles.inputStyles}
        onChange={(e) => onTyping(e.target.value)}
        value={message}
        onPressEnter={() => onSendMessage()}
        suffix={
          <SendOutlined
            style={{ color: "#1677ff", fontSize: 22 }}
            onClick={() => onSendMessage()}
          />
        }
      />
    </div>
  );
};

export default Inbox;
