//const heading = React.createElement('h1', {id:'heading'} , 'Hello world from React !');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    //root.render(heading);

 const parent = React.createElement('div', {},[
    React.createElement('div',{id:'parent1'},[React.createElement('h2',{},'I am in Parent1 H2'),React.createElement('h1',{},'I am in Parent1 H1')]),
    React.createElement('div',{id:'parent2'},[React.createElement('h2',{},'I am in Parent2 H2'),React.createElement('h1',{},'I am in Parent2 H1')])
 ]) ;
 root.render(parent)