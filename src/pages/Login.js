import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './static/login.scss';

function App() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Логика для входа
    if (username === 'root' && password === 'admin') { 
      console.log('Пользователь вошёл');
      navigate('/dashboard'); // Перенаправление на Dashboard
    } else {
      setError('Неверный логин или пароль'); // Установка ошибки
    }
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Проверка совпадения паролей
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    // Логика для регистрации
    if (username === 'root' && password === 'admin') { 
      console.log('Пользователь зарегистрировался');
      navigate('/dashboard'); // Перенаправление на Dashboard
    } else {
      setError('Ошибка регистрации'); // Установка ошибки
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <input type="checkbox" id="check" />
          <div className="login form">
            <header>Вход</header>
            <form onSubmit={handleLoginSubmit}>
              {error && <p className="error">{error}</p>}
              <input type="text" name="username" placeholder="Введите логин" required />
              <input type="password" name="password" placeholder="Введите пароль" required />
              <div className="crumps">
                <a href="/">Забыли пароль?</a>
              </div>
              <input type="submit" className="button" value="Вход" />
            </form>
            <div className="signup">
              <span className="signup">У Вас нет аккаунта?
                <label htmlFor="check">Зарегистрироваться</label>
              </span>
            </div>
          </div>
          <div className="registration form">
            <header>Регистрация</header>
            <form onSubmit={handleRegSubmit}>
              {error && <p className="error">{error}</p>}
              <input type="text" name="username" placeholder="Введите логин" required />
              <input type="password" name="password" placeholder="Введите пароль" required />
              <input type="password" name="confirmPassword" placeholder="Повторите пароль" required />
              <input type="submit" className="button" value="Зарегистрироваться" />
            </form>
            <div className="signup">
              <span className="signup">У вас уже есть аккаунт?
                <label htmlFor="check">Войти</label>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
