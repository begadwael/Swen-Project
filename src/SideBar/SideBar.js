import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (
        <div>
            <div className="SideBar">
                <img src="https://m.media-amazon.com/images/I/71TEJjGgHnL._SL1500_.jpg" alt="book cover" />
                {/*book Title*/}
                <h2>Dog Man 10: Mothering Heights (The New Blockbusting International Bestseller)</h2>

                {/*book author*/}
                <h3>Dav Pilkey</h3>

                {/*book description*/}
                <p>
                    Dog Man And Petey Face Their Biggest Challenges Yet In The Tenth Dog Man Book From Worldwide Bestselling Author And Illustrator Dav Pilkey
                    . Dog Man Is Down On His Luck, Petey Confronts His Not So Purr-Fect Past, And Grampa Is Up To No Good. The World Is Spinning Out Of Control
                    As New Villains Spill Into Town. Everything Seems Dark And Full Of Despair. But Hope Is Not Lost. Can The Incredible Power Of Love Save The Day?
                    Dav Pilkey'S Wildly Popular Dog Man Series Appeals To Readers Of All Ages And Explores Universally Positive Themes, Including: Empathy Kindness Persistence
                    And The Importance Of Doing Good. Full Colour Pages Throughout.
                    Everyone Digs Dog Man "High-Intensity, Heartwarming, And, Above All, Hysterically Funny." - Kirkus Reviews, Starred Review "Riotously Funny And Original."
                </p>

                {/*book price*/}
                <h4>29.99 AED</h4>

                {/*add to cart button*/}
                <button>Add To Cart</button>

            </div>
        </div>
    );
};

export default SideBar;
