import ContactInfoItem from "./footer-widget/contact-info/contact-info-item/ContactInfoItem";
import SocialMediaItem from "./footer-widget/contact-info/social-media-item/SocialMediaItem";
import FooterWidget from "./footer-widget/FooterWidget";
import InfoItem from "./footer-widget/info-item/InfoItem";
import Payment from "./payment/Payment";

const contactInfoItems = 
[
    {iconClassName: 'fa fa-map-marker', contactData: '123 E Store, Los Angeles, USA'},
    {iconClassName: 'fa fa-envelope', contactData: 'email@example.com'},
    {iconClassName: 'fa fa-phone', contactData: '+123-456-7890'}
];

const socialMediaIconsClassNames = 
[
    'fab fa-twitter',
    'fab fa-facebook-f',
    'fab fa-linkedin-in',
    'fab fa-instagram',
    'fab fa-youtube'
];

const companyInfoItems = 
[
    'About Us',
    'Privacy Policy',
    'Terms & Condition'
];

const purchaseInfoItems = 
[
    'Payment Policy',
    'Shipping Policy',
    'Return Policy'
];

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <FooterWidget heading='Get in Touch'>
                        <div className="contact-info">
                            {contactInfoItems.map(contact =>
                                <ContactInfoItem key={contact.contactData} {...contact} />
                            )}
                        </div>
                    </FooterWidget>
                    <FooterWidget heading='Follow Us'>
                        <div className="contact-info">
                            <div className="social">
                                {socialMediaIconsClassNames.map(socialMedia =>
                                    <SocialMediaItem key={socialMedia} iconClassName={socialMedia} />
                                )}
                            </div>
                        </div>
                    </FooterWidget>
                    <FooterWidget heading='Company Info'>
                        <ul>
                            {companyInfoItems.map(companyInfoItem =>
                                <InfoItem key={companyInfoItem} item={companyInfoItem} />
                            )}
                        </ul>
                    </FooterWidget>
                    <FooterWidget heading='Purchase Info'>
                        <ul>
                            {purchaseInfoItems.map(purchaseInfoItem =>
                                <InfoItem key={purchaseInfoItem} item={purchaseInfoItem} />
                            )}
                        </ul>
                    </FooterWidget>
                </div>
                {/* <Payment /> */}
            </div>
        </div>
    );
}