import React, { useState, useEffect } from 'react'

export default ({ isCounting, total, totalPause, start, reset, setWork, setPause }) => {

  const [menu, setMenu] = useState(false)
  useEffect(() => {
    if (menu) {
      document.querySelector('footer').style.height = '248px'
    } else {
      document.querySelector('footer').style.height = '56px'
    }
  }, [menu])

  return (
    <footer>

      <div className="navbar">

        <button onClick={reset}>
          <i className="material-icons">menu</i>
        </button>

        <button onClick={() => !isCounting ? start() : reset()} className="overlap">
          <i className="material-icons">{ !isCounting ? 'play_arrow' : 'stop' }</i>
        </button>

        <button onClick={() => setMenu(!menu)}>
          <i className="material-icons">{ !menu ? 'timer' : 'close' }</i>
        </button>

      </div>

      <div className="menu">
        <ul>
          <li>
            <label htmlFor="work">Work</label>
            <input
              onChange={(event) => setWork(event.target.value)}
              id="work"
              type="number"
              min="1"
              value={total / 60}
            />
          </li>
          <li>
            <label htmlFor="pause">Pause</label>
            <input
              onChange={(event) => setPause(event.target.value)}
              id="pause"
              type="number"
              min="1"
              value={totalPause / 60}
            />
          </li>
        </ul>
      </div>

    </footer>
  )
}
