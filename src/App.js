

function App() {
  return(
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/sign-up" element={<Cadastro/>} />
       <Route path="/subscriptions" element={<TodayContext.Provider value={TodayValue}><UserContext.Provider value={UserValue}><Histórico/></UserContext.Provider></TodayContext.Provider>}/>
       <Route path="/home" element={<Hoje/>}/>
       <Route path="/subscriptions/:ID_DO_PLANO" element={<TodayContext.Provider value={TodayValue}><HabitsContext.Provider value={HabitsValue}><UserContext.Provider value={UserValue}><Hábitos add={add} setAdd={setAdd}/></UserContext.Provider></HabitsContext.Provider></TodayContext.Provider>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
