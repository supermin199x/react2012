import React from 'react';
import '../components/Content.css';

const Content = () => {
    return (
        <div className="container">
            <div className="nav"></div>
            <div className="content">
                <header className="header">
                    <p>WHATSAPP WEB</p>
                </header>
                <body className="paper">
                    <div className="top">
                        <div className="top-left">
                            <p>To use WhatsApp on your computer :</p>
                            <ul>
                                <ol>1. Open WhatsApp on your phone</ol>
                                <ol>2. Tap Menu : or Settings and select<p>WhatsApp Web</p></ol>
                                <ol>3. Point your phone to this screen to capture the code</ol>
                            </ul>
                            <a className="link" href="">Need help to get started?</a>
                        </div>
                        <div className="top-right">
                            <p className="qrcode"></p>
                            <p className="redais">CLICK TO RELOAD QR CODE</p>
                            <p>
                                <input type="checkbox" name="" id=""/> : Keep me signed in
                            </p>
                        </div>
                    </div>

                </body>
            </div>
            
        </div>
    );
}

export default Content;