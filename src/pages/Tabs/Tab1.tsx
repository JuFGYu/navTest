import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton
} from '@ionic/react';



const Tabs1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TAB 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton expand='full' routerLink='/app/tab1/tab1_1'>
          go deep
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs1;