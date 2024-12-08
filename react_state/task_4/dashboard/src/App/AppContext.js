import React, { createContext } from 'react';

const userObject= {
	email: '',
	password: '',
	isLoggedIn: false,
};

const defaultLogOut= () => {
	console.log('Logging out...');
};

const AppContext = React.createContext({
	user: userObject,
	logOut: defaultLogOut,
  });

  export { AppContext, userObject, defaultLogOut };
