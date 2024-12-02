import React, { useState } from 'react';

export default function Jobs() {
    const [vin, setVin] = useState('');

    return (
        <div id='new-order-page'>
            <h1>Новый заказ-наряд</h1>

            <form id='new-order-form'>
                <div>
                    <label htmlFor='date'>Дата создания:</label>
                    <input
                        type='text'
                        name='date'
                        readOnly
                    />
                </div>

                <div>
                    <label htmlFor='clientName'>Имя клиента:</label>
                    <input
                        id='clientName'
                        placeholder='Имя клиента'
                    />
                </div>

                <div>
                    <label htmlFor='vin'>VIN номер:</label>
                    <input
                        id='vin'
                        placeholder='VIN номер'
                        value={vin}
                        onChange={(e) => setVin(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor='cost'>Стоимость работ:</label>
                    <input
                        id='cost'
                        placeholder='Стоимость работ'
                    />
                </div>

                <button type='submit' style={{ width: "100px" }}>Отправить</button>
            </form>
        </div>
    );
}
