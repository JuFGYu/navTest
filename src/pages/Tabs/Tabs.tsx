import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { triangle, ellipse, options, help, home } from 'ionicons/icons';
import Tabs1 from './Tab1';
import Tabs2 from './Tab2';
import Tabs3 from './Tab3';
import Tabs1_1 from './Tab1_1';
import Tabs1_2 from './Tab1_2';
import Tabs2_1 from './Tab2_1';
import Tabs2_2 from './Tab2_2';
import Tabs3_1 from './Tab3_1';
import Tabs3_2 from './Tab3_2';



const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/app/tab1" component = {Tabs1}/>
        <Route exact path="/app/tab1/tab1_1" component = {Tabs1_1}/>
        <Route exact path="/app/tab1/tab1_1/tab1_2" component = {Tabs1_2}/>

        <Route exact path="/app/tab2" component = {Tabs2}/>
        <Route exact path="/app/tab2/tab2_1" component = {Tabs2_1}/>
        <Route exact path="/app/tab2/tab2_1/tab2_2" component = {Tabs2_2}/>

        <Route exact path="/app/tab3" component = {Tabs3}/>
        <Route exact path="/app/tab3/tab3_1" component = {Tabs3_1}/>
        <Route exact path="/app/tab3/tab3_1/tab3_2" component = {Tabs3_2}/>

        <Route exact path="/app">
          <Redirect to='/app/tab1'/>
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot='bottom'>
        <IonTabButton tab='tab1' href='/app/tab1'>
          <IonIcon icon={home}></IonIcon>
          <IonLabel>Tab1</IonLabel>
        </IonTabButton>

        <IonTabButton tab='tab2' href='/app/tab2'>
          <IonIcon icon={help}></IonIcon>
          <IonLabel>Tab2</IonLabel>
        </IonTabButton>

        
        <IonTabButton tab='tab3' href='/app/tab3'>
          <IonIcon icon={options}></IonIcon>
          <IonLabel>Tab3</IonLabel>
        </IonTabButton>
        
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;