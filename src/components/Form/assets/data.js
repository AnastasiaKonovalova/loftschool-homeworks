const user = {
    firstname: 'James',
    lastname: 'Bond',
    password: '007'
  }
  
  const fieldTranslation = {
    firstname: 'Имя',
    lastname: 'Фамилия',
    password: 'Пароль'
  }
  
  const errorMessageTypes = {
    emptyInput: {
      firstname: 'Нужно указать имя',
      lastname: 'Нужно указать фамилию',
      password: 'Нужно указать пароль'
    },
    wrongInput:{
      firstname: 'Имя указано не верно',
      lastname: 'Фамилия указана не верно',
      password: 'Пароль указан не верно'
    }
  }

  export {user, fieldTranslation, errorMessageTypes}