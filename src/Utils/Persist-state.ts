import { State } from '../Shared/interfaces/state';
export function persistState(storageKey: string, state: any): void {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

export const getInitialState = (storageKey: string): State => {
  const savedState = localStorage.getItem(storageKey);
  try{
    if(!savedState){
      return { backendUrl: "" }
    }else{
      const parsedState = JSON.parse(savedState ?? '{}');
      if (!parsedState.backendUrl) {
        parsedState.backendUrl = ""; // initialize the backendUrl property with an empty string if it doesn't exist
      }
      return parsedState;
    }
  }catch(err){
      console.log("Error loading state");
      return { backendUrl: "" };
  }
}

