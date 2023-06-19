import React from 'react';

const Contact = () => {
    return (
        <div className="w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.034406756229!2d105.8786921098439!3d21.151028983488537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313507a2346516c7%3A0xb5d95160203d5070!2zTOG7lyBHaWFvIFZp4buHdCBIw7luZyDEkMO0bmcgQW5oIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1682047463963!5m2!1svi!2s"
                width="100%"
                height="350"
                zoom="110%"
                className="w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Contact;
