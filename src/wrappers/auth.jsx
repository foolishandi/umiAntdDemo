import React from 'react';
import { Redirect } from 'umi';
export default function auth(props) {
  const token = localStorage.getItem('token');
  return token ? <>{props.children}</> : <Redirect to="/login"></Redirect>;
}
