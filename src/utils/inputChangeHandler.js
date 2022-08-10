export default function inputChangeHandler(setForm, form, event) {
    setForm({...form, [event.target.name]:  event.target.type === 'text' ?  event.target.value : event.target.checked});
}
