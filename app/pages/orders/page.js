'use client'
import { useState } from "react"

import Jobs from "@/app/ui/newOrdersComponents/jobs"
import Main from "@/app/ui/newOrdersComponents/main"

export default function Neworder () {

const [isActive, setisActive] = useState (<Main />)

function handleSelectWindow (event)  {

let selectedMenuItem = event.target.textContent

switch (selectedMenuItem) {
case "Основная": 
return setisActive(<Main />)

case "Работы": 
return setisActive(<Jobs />)
}
}


  return (
    <div id='navBarNewOrderNavigation'>
        <div id='navBarMenuList'>
            <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
                <li style={{ marginRight: "10px", padding: "3px", cursor:'pointer' }}
                onClick={handleSelectWindow}
                >
                Основная
                </li>
                <li style={{ marginRight: "10px", padding: "3px",cursor:'pointer' }}
                onClick={handleSelectWindow}>
                    Работы
                </li>
                <li style={{ marginRight: "10px", padding: "3px",cursor:'pointer' }}>
                    Цена
                </li>
                <li style={{ marginRight: "10px", padding: "3px" }}>
                    Итог
                </li>
                               
                
            </ul>
        </div>
        <div>
      {isActive}
        </div>
    </div>
)
}








