import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons,
  IonBackButton,
  IonButton
} from '@ionic/react';



const Tabs3_1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref='/app/tab3'/>
          </IonButtons>
          <IonTitle>TAB 3.1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand='full' routerLink='/app/tab3/tab3_1/tab3_2'>
          go deeper... 3
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs3_1;