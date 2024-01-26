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



const Tabs3_2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons>
            <IonBackButton defaultHref='/app/tab3/tab3_1'/>
          </IonButtons>
          <IonTitle>TAB 3.2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand='full'>
          FINAL 3
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs3_2;