//Create a variable to define what our state should be when it is initialized.
const initialState = {
	count: 0,
};

function reducer(state = initialState, action) {
	const stateCopy = Object.assign({}, state);
	if (action.type === 'INCREMENT') {
		stateCopy.count++;
		return stateCopy;
	}
	if (action.type === 'DECREMENT') {
		stateCopy.count--;
		return stateCopy;
	}
	return state;
}
//We use the reducer function we defined to create a store.
// ! Remember redux runs this when our page starts, this means we start with our initial state.
const store = Redux.createStore(reducer);

// We define this function to tell the document what to update in our ui when the state changes.
function render() {
	const state = store.getState();
	const countElement = document.getElementById('count');
	countElement.innerHTML = state.count;
}
//We tell our store to run the render function we defined when the state changes.
store.subscribe(render);

//In this block we go to our dom and find some buttons, that we will use to dispatch
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
// We attach event listeners to the buttons, they will dispatch some actions.
incrementButton.addEventListener('click', function () {
	store.dispatch({ type: 'INCREMENT' });
});
decrementButton.addEventListener('click', function () {
	store.dispatch({ type: 'DECREMENT' });
});
