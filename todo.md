BACKLOG
- [ ] Реализовать api
  - [ ] Реализовать запрос к базе данных за timeline не текущего месяца
  - [ ] /[yyyymm] - отрисовывает Timeline и DiaryEntry textarea если сегодня
- [ ] реализовать страницы
    - [ ] реализовать листание Timeline по месяцам (isCurrentMonth)
  - [ ] /[yyyymmdd] - отрисовывает Timeline месяца и DiaryEntry
    - [ ] реализовать компонент DiaryEntry с props {date, text} для отображения прошлых записей
- [ ] написать добавление записи
  - [ ] реализовать DiaryEntry с textarea для текущего дня
  - [ ] не сохранять если другой день
  - [ ] реализовать функцию взять координаты каретки https://hashnode.com/post/how-do-you-get-the-position-of-the-cursor-in-pixelsinside-a-textarea-cje14wjck0d1om3wtvfem6ofg
  - [ ] onSave - по интервалу
- [ ] * пофиксить шифт временных зон

    Девочки
- [ ] Сверстать компонент Timeline



  TODO 30.01.23

  DONE
- [x] Реализовать запрос к базе данных за timeline текущего месяца
- [x] / - редирект на /[yyyymm] текущего месяца
- [x] реализовать middleware для динамического роутинга
- [x] реализовать компонент Timeline с props {timeline: [{dayNumber, wordsCount}], month(yyyymm)}
- [x] сверстать textarea в виде тетрадного листа
- [x] разобраться с добавлением динамики на страницы
- [x] Перенести страницы в app
- [x] отрисовывать количество слов на таймлайне
- [x] autosize textarea
- [x] onSave - по Ctrl_S
- [x] loader
- [x] POST /api/today сохраняет запись
