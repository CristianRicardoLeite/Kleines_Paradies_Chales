import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { set } from 'date-fns'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

export const Schedule = () => {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      color: '#39391B',
      key: 'selection',
      dragSelectionEnabled: false
    }
  ]);

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState('')



  const data = new Date()
  const day = data.getDate()

  function getExtendedMonth(mes) {
    const arrayMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return arrayMes[mes - 1]
  }

  const refOne = useRef(null)

  const month = getExtendedMonth(data.getMonth());

  useEffect(() => {

    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutSide, true)
  }, [])

  const hideOnEscape = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const hideOnClickOutSide = (e) => {

    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(true)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '-80px' }}>
        {!open && <input type='text' placeholder={`${day} ${month}, 2023`} onClick={() => setOpen(!open)} />}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>

          </div>
          <div ref={refOne}>
            {open &&
              (<>
                <DateRangePicker
                  className='datePicker'
                  onChange={item => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                  preventSnapRefocus={true}
                  calendarFocus="backwards"

                />
                <div style={{ display: 'flex', justifyContent: 'space-between', background: "#fff", padding: '20px' }}>
                  <h2>Hospedes</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PeopleAltIcon />
                    <input type="number" min={1} max={6} defaultValue={1} style={{ width: '25px', margin: '0 5px' }} />
                  </div>
                </div>
              </>)}
          </div>
        </div>
      </div>
    </div>
  )
}
