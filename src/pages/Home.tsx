import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const navigation = useIonRouter()

  const doLogin = () => {
    navigation.push('/app', 'root', 'replace')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME PAGE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton expand='full' onClick={()=> doLogin()}>
          Enter Tabs
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
