import axios, { AxiosResponse } from 'axios';

interface WaitingListData {
  email: string;
  languageCode: string;
}

const  addToWaitingList = async (email: string, languageCode: string): Promise<AxiosResponse> =>  {
  const data: WaitingListData = {
    email,
    languageCode,
  };

  try {
    const response = await axios.post('/waiting-list', data);
    return response;
  } catch (error) {
    throw new Error('Failed to add to waiting list');
  }
}

export default addToWaitingList