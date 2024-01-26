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



const Tabs2_1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref='/app/tab2'/>
          </IonButtons>
          <IonTitle>TAB 2.1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand='full' routerLink='/app/tab2/tab2_1/tab2_2'>
          go deeper...2
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tabs2_1;