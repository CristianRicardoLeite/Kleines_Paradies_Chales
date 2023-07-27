import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { format, set } from 'date-fns'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

export const Schedule = () => {

  const date = new Date()
  const formatDate = format(date, 'dd/MM/yyyy')

  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  function getExtendedMonth(mes) {
    const arrayMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return arrayMes[mes - 1]
  }

  const handleSelect = (ranges) => {


    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: addDays(endDate, 0),
    color: '#39391B',
    key: 'selection',
    dragSelectionEnabled: false
  }
  const refOne = useRef(null)

  useEffect(() => {

    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutSide, true)
  }, [startDate, endDate])

  const hideOnEscape = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const hideOnClickOutSide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '-80px', height: '50px', zIndex: 99 }}>
        {!open && <input type='text' placeholder={`${formatDate} - ${formatDate}`} onClick={() => setOpen(!open)} />}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>

          </div>
          <div ref={refOne}>
            {open &&
              <>
                <DateRangePicker
                  minDate={new Date()}
                  className='datePicker'
                  onChange={handleSelect}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={[selectionRange]}
                  direction="horizontal"
                  preventSnapRefocus={true}
                  calendarFocus="forward"

                />
                <div style={{ display: 'flex', justifyContent: 'space-between', background: "#fff", padding: '20px', outline: 'none' }}>
                  <h2>Hospedes</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PeopleAltIcon />
                    <input type="number" min={1} max={6} defaultValue={1} style={{ width: '25px', margin: '0 5px' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px' }}>
                  <button onClick={() => setOpen(!open)} style={{ width: '200px', height: '50px', borderRadius: '40px', border: 'none' }}>Cancelar</button>
                  <button style={{ width: '200px', height: '50px', borderRadius: '40px', border: 'none' }}>Pesquisar Data</button>
                </div>
              </>}
          </div>
        </div>
      </div>
    </div>
  )
}
