import React from 'react'
import { useState } from 'react'
import BasicRangeShortcuts from '../DataPicker'

export const Schedule = () => {

  const [search, setSearch] = useState(false)

  const data = new Date()
  const dia = data.getDate()
  const ano = data.getYear()




  function getMesExtenso(mes) {

    const arrayMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    return arrayMes[mes - 1]
  }

  const mes = getMesExtenso(data.getMonth());


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type='text' placeholder={`${dia} ${mes}, 2023`} onClick={() => setSearch(!search)} />
        <button onClick={() => setSearch(!search)}>Busque sua data</button>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div></div>
          <div></div>
          <div>

          </div>
          {search && <BasicRangeShortcuts />}
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
