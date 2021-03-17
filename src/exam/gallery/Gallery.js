import { useState } from 'react';
import './Gallery.css';
import AppHeader from '../gallery/components/AppHeader';
import AppSearch from '../gallery/components/AppSearch';
import TattooItem from '../gallery/components/TattooItem';
import TattooPost from '../gallery/components/TattooPost';
import cats from '../gallery/data/cats';

function Gallery() {
    const [selectedTattoo, setSelectedTattoo] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onTattooOpenClick(tattoo) {
        setSelectedTattoo(tattoo);
    }

    function onTattooCloseClick() {
        setSelectedTattoo(null);
    }

    const tattooItems = cats.filter((tattoo) => {
        return tattoo.title.includes(searchText);
    }).map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
    });

    let tattooPost = null;
    if (!!selectedTattoo) {
        tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />;
    }

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {tattooItems}
                    </div>
                </div>
            </section>
            {tattooPost}
        </div>
    );
}

export default Gallery;
