import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton
} from '@ionic/react';



const Tabs3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TAB 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton expand='full' routerLink='/app/tab3/tab3_1'>
          go deep 3
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs3;