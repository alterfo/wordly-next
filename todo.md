BACKLOG
- [ ] Реализовать api
  - [ ] POST /api/today сохраняет запись
  - [ ] Перенести страницы в app
  - [ ] Реализовать запрос к базе данных за timeline не текущего месяца
  - [ ] /[yyyymm] - отрисовывает Timeline и DiaryEntry textarea если сегодня
- [ ] реализовать страницы
    - [ ] реализовать листание Timeline по месяцам (isCurrentMonth)
    - [ ] Сверстать компонент Timeline
  - [ ] /[yyyymmdd] - отрисовывает Timeline месяца и DiaryEntry
    - [ ] реализовать компонент DiaryEntry с props {date, text} для отображения прошлых записей
    - [ ] реализовать DiaryEntry с textarea для текущего дня

TODO 24.01.23
- [ ] разобраться с добавлением динамики на страницы
- [ ] написать добавление записи

DONE
- [x] Реализовать запрос к базе данных за timeline текущего месяца
- [x] / - редирект на /[yyyymm] текущего месяца
- [x] реализовать middleware для динамического роутинга
- [x] реализовать компонент Timeline с props {timeline: [{dayNumber, wordsCount}], month(yyyymm)}
