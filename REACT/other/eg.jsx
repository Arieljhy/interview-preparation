const {createContext} = require('react');
const myContext = new createContext();

function Parent(params) {
    return <myContext.Provider value={{a: 1, b: 2}}>
        <Child>
            <Child></Child>
        </Child>
    </myContext.Provider>
}

function Child(){
    const context = useContext(myContext);
    return <div>{context}</div>
}