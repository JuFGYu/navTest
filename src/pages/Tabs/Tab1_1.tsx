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



const Tabs1_1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref='/app/tab1'/>
          </IonButtons>
          <IonTitle>TAB 1.1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand='full' routerLink='/app/tab1/tab1_1/tab1_2'>
          go deeper... 1
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs1_1;