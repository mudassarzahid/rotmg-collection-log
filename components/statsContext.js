import React, {useState, useContext} from 'react';

const obtainedContext = React.createContext();
const obtainedUpdateContext = React.createContext();
const statsContext = React.createContext();
const statsUpdateContext = React.createContext();


export function useStats() {
  return useContext(statsContext)
}

export function useStatsUpdate() {
  return useContext(statsUpdateContext)
}

export function useObtained() {
  return useContext(obtainedContext)
}

export function useObtainedUpdate() {
  return useContext(obtainedUpdateContext)
}

export function StatsProvider({children}) {
  const [obtained, setObtained] = useState(false)
  const [count, setCount] = useState(0)

  function setObtainedEx() {
    setObtained(!obtained)
  }

  function setCountEx() {
    obtained ? setCount(count + 1) : setCount(count - 1)
  }

  return (
    <statsContext.Provider value={count}>
      <statsUpdateContext.Provider value={setCountEx}>
        <obtainedContext.Provider value={obtained}>
          <obtainedUpdateContext.Provider value={setObtainedEx}>
            {children}
          </obtainedUpdateContext.Provider>
        </obtainedContext.Provider>
      </statsUpdateContext.Provider>
    </statsContext.Provider>
  )
}