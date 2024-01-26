import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton
} from '@ionic/react';



const Tabs2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TAB 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton expand='full' routerLink='/app/tab2/tab2_1'>
          go deep 2
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs2;