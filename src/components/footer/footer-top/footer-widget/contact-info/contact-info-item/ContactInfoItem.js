export default function ContactInfoItem({iconClassName, contactData}) {
    return (
        <p><i className={iconClassName}></i>{contactData}</p>
    );
}