import React from 'react';

import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';



//redux
import { useDispatch, } from 'react-redux';
import { googleAuth } from '../../redux/reducers/auth/auth.action';

const GoogleAuth = () => {
  const {token} = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(()=>{
    if(token){
        dispatch(googleAuth(token)).then(()=> (window.location.href = "/delivery"));
    }
},[token])
return <>Loading please wait</>

}



export default GoogleAuth;
