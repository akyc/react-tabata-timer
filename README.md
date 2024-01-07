[![Netlify Status](https://api.netlify.com/api/v1/badges/58a3a327-b925-4657-a84c-fea2f31f7e37/deploy-status)](https://app.netlify.com/sites/react-tabata-timer/deploys)
# Таймер для табата тренировок
C использование библиотеки [React](https://react.dev/)

[Демо](http://tabata-timer.ru/)

#TODO

1. Добавить [react-router](https://reactrouter.com/en/main) и подстраницы:
   * Welcome со слайдером ([swiper](https://github.com/nolimits4web/Swiper)) и кнопкой входа
   * Login для авторизации (+ через соц. сети)
   * Register для регистрации (возможно [паспорт](https://www.passportjs.org/))
2. Добавить RTK
   * Все props перенести в redux
   * Сохранять настройки в localStorage с redux-persist
3. Добавить backend на nestjs
