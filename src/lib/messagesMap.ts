type MessageType = {
  [key: string]: any;
};

const messages: MessageType = {
  NOT_FILE_ERROR: 'It is not a folder, please choose a folder and try again',
};

export const feedbackMessages = (key: string) => messages[key];
