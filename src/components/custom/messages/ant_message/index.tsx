import { message, MessageArgsProps } from "antd";
import { TypeOpen } from "antd/es/message/interface";
import React from "react";

export const MessageError = (text: any) => {
  message.error(text!);
};

export const MessageSuccess = (text: any) => {
  message.success(text!);
};

export const MessageWarning = (text: any) => {
  message.warning(text!);
};
