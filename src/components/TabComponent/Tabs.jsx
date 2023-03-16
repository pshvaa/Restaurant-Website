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
     <h1 className="heading">Gündəlik Yenilənən Menyu</h1>
     <p className="text">Müəllif qəlyanaltıların və salatların ləzzətli çeşidi, sac və manqalda hazırlanan yeməklər və, əlbəttəki, inanılmaz dada malik şərq şirniyyatları bugünədək görmədiyiniz fərqli bir dad çalarlarını yaradacaqlar.</p>
     <div className="Tabs">
      {/* Tab nav */}       
      <ul className="nav-tab">
        <TabNavItem title="Səhər Yeməyi" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Qəlyanaltı" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Nahar" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Dessert" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="İçkilər" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
           <TabContent className='row' id="tab1" activeTab={activeTab}>{
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
           <TabContent className='row' id="tab2" activeTab={activeTab}>{
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
           <TabContent className='row' id="tab3" activeTab={activeTab}>{
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
           <TabContent className='row' id="tab4" activeTab={activeTab}>{
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
           <TabContent className='row' id="tab5" activeTab={activeTab}>{
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
           <TabContent className='row' id="tab1" activeTab={activeTab}>{
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

           <TabContent className='row' id="tab2" activeTab={activeTab}>{
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

           <TabContent className='row' id="tab3" activeTab={activeTab}>{
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

           <TabContent className='row' id="tab4" activeTab={activeTab}>{
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

           <TabContent className='row' id="tab5" activeTab={activeTab}>{
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

    {/* <div className="section-divider"></div> */}
      </div>
    </>
     );

}

export default Tabs