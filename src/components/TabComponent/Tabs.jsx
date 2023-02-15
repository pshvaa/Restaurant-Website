import React, {useState} from 'react'
import TabNavItem from "../TabNavItem";
import TabContent from "../TabContent";
import TabCard1 from '../TabCard1';
import TabCard2 from '../TabCard2';

import './Tabs.css'
import receiptData from '../../receipts.json'

const Tabs = () => {

const [activeTab, setActiveTab] = useState("tab1");
     return (
    <>
      <div className="tab-menu">
      <p className="handwriting">Start Eating Better</p>
     <h1 className="heading">Daily New Fresh Meals</h1>
     <p className="text">Steak In has the perfect place to enjoy fine food and great cocktails with excellent service, in comfortable atmospheric surroundings. We have a soft dining room, combined with an open kitchen, coffee take out bar and alovely awesome on site coffee roastery.</p>
     <div className="Tabs">
      {/* Tab nav */}       
      <ul className="nav-tab">
        <TabNavItem title="Breakfast" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Lunch" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Dinner" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Dessert" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Drinks" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
           <TabContent id="tab1" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type1 == 'breakfast';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard1 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>
           <TabContent id="tab2" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type1 == 'lunch';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard1 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }   
           </TabContent>
           <TabContent id="tab3" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type1 == 'dinner';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard1 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>
           <TabContent id="tab4" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type1 == 'dessert';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard1 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>
           <TabContent id="tab5" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type1 == 'drink';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard1 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>


           {/* For type-2 cards which left-side is image right-side is card */}
           <TabContent id="tab1" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type2 == 'breakfast';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard2 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>

           <TabContent id="tab2" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type2 == 'lunch';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard2 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }   
           </TabContent>

           <TabContent id="tab3" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type2 == 'dinner';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard2 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>

           <TabContent id="tab4" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type2 == 'dessert';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard2 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>

           <TabContent id="tab5" activeTab={activeTab}>{
            receiptData.filter(filteredList => {
              return filteredList.type2 == 'drink';
            })
            .map(filteredList => {
              return(
                <>
                  {/*receiptImage, content, price, name*/}
                <TabCard2 receiptImage={filteredList.receiptImage} content = {filteredList.content} price={filteredList.price} name = {filteredList.name} />
                </>
              )
            })
           }
           </TabContent>
      </div>
    </div>
      </div>
    </>
     );

}

export default Tabs