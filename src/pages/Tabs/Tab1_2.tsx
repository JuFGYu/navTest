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



const Tabs1_2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons>
            <IonBackButton defaultHref='/app/tab1/tab1_1'/>
          </IonButtons>
          <IonTitle>TAB 1.2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand='full'>
          FINAL 1
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs1_2;