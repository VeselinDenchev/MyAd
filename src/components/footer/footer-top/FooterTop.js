import ContactInfoItem from "./footer-widget/contact-info/contact-info-item/ContactInfoItem";
import SocialMediaItem from "./footer-widget/contact-info/social-media-item/SocialMediaItem";
import FooterWidget from "./footer-widget/FooterWidget";
import InfoItem from "./footer-widget/info-item/InfoItem";
import Payment from "./payment/Payment";

const footerWidgetHeadings = 
[
    'Get in Touch',
    'Follow Us',
    'Company Info',
    'Purchase Info'
];

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
        <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <FooterWidget heading={footerWidgetHeadings[0]}>
                        <div class="contact-info">
                            {contactInfoItems.map(contact =>
                                <ContactInfoItem {...contact} />
                            )}
                        </div>
                    </FooterWidget>
                    <FooterWidget heading={footerWidgetHeadings[1]}>
                        <div class="contact-info">
                            <div class="social">
                                {socialMediaIconsClassNames.map(socialMedia =>
                                    <SocialMediaItem iconClassName={socialMedia} />
                                )}
                            </div>
                        </div>
                    </FooterWidget>
                    <FooterWidget heading={footerWidgetHeadings[2]}>
                        <ul>
                            {companyInfoItems.map(companyInfoItem =>
                                <InfoItem item={companyInfoItem} />
                            )}
                        </ul>
                    </FooterWidget>
                    <FooterWidget heading={footerWidgetHeadings[3]}>
                        <ul>
                            {purchaseInfoItems.map(purchaseInfoItem =>
                                <InfoItem item={purchaseInfoItem} />
                            )}
                        </ul>
                    </FooterWidget>
                </div>
                <Payment />
            </div>
        </div>
    );
}