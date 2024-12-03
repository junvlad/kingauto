# Пример очистки дампа с установкой нового для линукс
# Создаем БД kingauto с пользователем kingauto даем админские права пользователю kingauto
cat scripts/schema.pg.sql | sudo -u kingauto psql
# Копируем данные дампа если есть
cat scripts/dump.sql | sudo -u kingauto psql kingauto
