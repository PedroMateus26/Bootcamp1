export const CLIENT_ID = "dscatalog";
export const CLIENT_SECRET = "dscatalog123";

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
  firsName: string;
  userId: string;
};



export const SaveSessionData=(loginResponse:LoginResponse)=>{
    localStorage.setItem('authData',JSON.stringify(loginResponse));
};

export const getSessionData = ()=>{
  const sessionData=localStorage.getItem('authData')?? '{}';
  const parsedSessionData=JSON.parse(sessionData);
  return parsedSessionData as LoginResponse;
};
