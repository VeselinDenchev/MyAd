export default function ContactInfoItem({iconClassName, contactData}) {
    return (
        <p><i class={iconClassName}></i>{contactData}</p>
    );
}