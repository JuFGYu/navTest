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



const Tabs2_2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons>
            <IonBackButton defaultHref='/app/tab2/tab2_1'/>
          </IonButtons>
          <IonTitle>TAB 2.2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand='full'>
          FINAL 2
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs2_2;