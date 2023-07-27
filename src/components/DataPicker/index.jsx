import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';


const BasicRangeShortcuts = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    return (
        <>
            <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="backwards"
            />
        </>
    )
}

export default BasicRangeShortcuts;