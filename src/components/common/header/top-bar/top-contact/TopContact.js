export default function TopContact({iconClassName, contactAddress})
{
    return (
        <div className="col-sm-6">
            <i className={iconClassName} />
            {contactAddress}
        </div>
    );
}