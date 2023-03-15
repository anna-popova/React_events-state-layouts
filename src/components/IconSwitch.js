function IconSwitch({icon, onSwitch}) {
	return (
		<div className="button-container">
			<button className="icon-switch" type="button" onClick={() => onSwitch(icon)}><i class="material-icons">{ icon }</i></button>
		</div>
	)
}

export default IconSwitch;