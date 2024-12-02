"use client";
import Link from "next/link";
import { useState } from "react";
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
            style={{ width: "80%" }}
            id="inputSearch"
            placeholder="поиск"
            type="search"
          ></input>
        </form>
      </div>
      <div>
        <ul>
          <li>
            <div onClick={toggleSubServiseMenu}>Сервис</div>
            {isSubMenuServiceOpen && (
              <ul>
                <li style={{ marginLeft: "15px" }}>
                  <Link href="/pages/clients">Make new client</Link>
                </li>
                <li style={{ marginLeft: "15px" }}>
                  <Link href="/pages/orders">Make a new order</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={toggleSubModuleMenu}>Модули</div>
            {isSubMenuModulesOpen && (
              <ul>
                <li style={{ marginLeft: "15px" }}>
                  <Link href="/pages/jobs">Работы</Link>
                </li>
                <li style={{ marginLeft: "15px" }}>
                  <Link href="/pages/orders">Make a new order</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/pages/statistics">Статистика</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
