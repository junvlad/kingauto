'use client';
import { useState } from 'react';
import NavLink from './NavLink.js';
import Button from '../buttons/Button.js';

export default function Navigation() {
  const [isSubMenuServiceOpen, setIsSubMenuServiceOpen] = useState(false);
  const [isSubMenuModulesOpen, setIsSubMenuModulesOpen] = useState(false);
  function toggleSubServiseMenu() {
    setIsSubMenuServiceOpen(!isSubMenuServiceOpen);
  }
  function toggleSubModuleMenu() {
    setIsSubMenuModulesOpen(!isSubMenuModulesOpen);
  }

  return (
    <div id="navBar">
      <div>
        <form id="nvb-search-bar" type="search" name="client">
          <input
            style={{ width: '80%' }}
            id="inputSearch"
            placeholder="поиск"
            type="search"
          ></input>
        </form>
      </div>
      <div>
        <ul>
          <li>
            <Button text="Сервис" onClick={toggleSubServiseMenu} />
            {isSubMenuServiceOpen && (
              <ul>
                <li style={{ marginLeft: '15px' }}>
                  <NavLink href="/pages/clients" title="Новый клиент" />
                </li>
                <li style={{ marginLeft: '15px' }}>
                  <NavLink href="/pages/orders" title="Новый заказ" />
                </li>
              </ul>
            )}
          </li>

          <li>
            <Button text="Модули" onClick={toggleSubModuleMenu} />
            {isSubMenuModulesOpen && (
              <ul>
                <li style={{ marginLeft: '15px' }}>
                  <NavLink href="/pages/jobs" title="Работы" />
                </li>
                <li style={{ marginLeft: '15px' }}>
                  <NavLink href="/pages/orders" title="Новый заказ" />
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink href="/pages/statistics" title="Статистика" />
          </li>
        </ul>
      </div>
    </div>
  );
}
