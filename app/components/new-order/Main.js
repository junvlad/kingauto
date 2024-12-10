import { useState } from 'react';

useState;

export default function Main() {
  const [note, setNote] = useState();

  return (
    <div id="main-new-order-page">
      <h1>Основная информация</h1>
      <div>
        <form>
          <div>
            <div>
              <label htmlFor="clientName">Имя клиента</label>
              <br />
              <input id="clientName" name="name" type="text" />
            </div>
            <div>
              <label htmlFor="clientLastName">Фамилия</label>
              <br />
              <input id="clientLastName" name="lastname" type="text" />
            </div>
          </div>

          <div>
            <label htmlFor="vehicle-registration-plate">Госномер</label>
            <br />
            <input
              id="vehicle-registration-plate"
              name="numberAuto"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Пробег</label>
            <br />
            <input id="mileage" name="mileage" type="text" />
          </div>
          <div>
            <label>Причина обращения</label>
            <br />
            <textarea value={note} style={{ resize: 'none' }}></textarea>
          </div>
          <div>
            <button>Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
