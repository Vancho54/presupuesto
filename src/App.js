import Question from './components/Question'
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import List from './components/List'
import ControlBudget from './components/ControlBudget'

function App() {

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [spends, setSpend] = useState([])
  const [spend, saveSpend] = useState({})
  const [createSpend, saveCreateSpend] = useState(false)

  useEffect(() => {
    if (createSpend) {
      setSpend([...spends, spend])
      console.log(spends)
    }

    const remainingBudget = remaining - spend.money
    setRemaining(remainingBudget)

    saveCreateSpend(false)
  }, [spend, createSpend, spends, remaining])


  return (
    <div className="Container">
      <header>
        <h1>Gasto semanal</h1>
        <div className='contenido-principal contenido'>
          {showQuestion ? <Question 
            setBudget={setBudget}
            setRemaining={setRemaining}
            setShowQuestion={setShowQuestion}
          /> :           
          <div className='row' >
            <div className='one-half column'>
              <Form 
                saveSpend={saveSpend}
                saveCreateSpend={saveCreateSpend}
              />
            </div>
          <div className='one-half column'>
            <List 
              spends={spends}
            />
            <ControlBudget 
              budget={budget}
              remaining={remaining}
            />
          </div>
        </div>
        }
        </div>
      </header>
    </div>
  );
}

export default App;
