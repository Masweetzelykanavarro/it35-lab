import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel 
} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <h2 style={{ padding: '15px', textAlign: 'center' }}>🌟 Daily Motivation 🌟</h2>
        
        {/* Quotes Section */}
        <h3 style={{ padding: '10px', margin: 0 }}>💬 Quotes</h3>
        <IonList>
          <IonItem>
            <IonLabel>“Success is not final, failure is not fatal: It is the courage to continue that counts.” — Winston Churchill</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>"Your only limit is your mind."</IonLabel>
          </IonItem>
        </IonList>

        {/* Affirmations Section */}
        <h3 style={{ padding: '10px', margin: 0 }}>💡 Affirmations</h3>
        <IonList>
          <IonItem>
            <IonLabel>“I am capable of achieving great things.”</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>“I believe in my potential and my ability to grow.”</IonLabel>
          </IonItem>
        </IonList>

        {/* Life Advice Section */}
        <h3 style={{ padding: '10px', margin: 0 }}>📖 Life Advice</h3>
        <IonList>
          <IonItem>
            <IonLabel>"Don’t be afraid to fail. Be afraid not to try."</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>“Stay focused, work hard, and trust the process.”</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
