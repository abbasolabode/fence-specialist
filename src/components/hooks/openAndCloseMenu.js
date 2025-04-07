//This is a custom hook that's responsible for the opening and closing of the mobile menu
export function openAndCloseMenu(isOpenState, handleIsOpen){

    function handleOpen() {
		handleIsOpen((isOpenState ) => !isOpenState );
	};

    return{handleIsOpen,  isOpenState, handleOpen};
}

