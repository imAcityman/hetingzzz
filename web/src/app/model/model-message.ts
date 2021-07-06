import {ModelUser} from './model-user';

export interface ModelMessage {
  id: number;
  content: string;
  state: number;
  deleteuserid: number;
  createtime: string;
  updatetime: string;
  user: ModelUser;
  targetuser: ModelUser;
  replies: ModelMessage[];
  fatherMessage: ModelMessage;
}
