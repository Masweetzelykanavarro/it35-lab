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

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        {/* Websites / Apps */}
        <h3 style={{ padding: '10px', margin: 0 }}>📌 Websites / Apps</h3>
        <IonList>
          <IonItem button>Gmail</IonItem>
          <IonItem button>Facebook</IonItem>
          <IonItem button>YouTube</IonItem>
        </IonList>

        {/* Music / Playlists */}
        <h3 style={{ padding: '10px', margin: 0 }}>🎵 Music / Playlists</h3>
        <IonList>
          <IonItem button>Playlist: "Bini Music" on Spotify</IonItem>
          <IonItem button>Favorite Song: "Here With You" by Bini</IonItem>
          <IonItem button>Album: "Born To Win" by Bini</IonItem>
        </IonList>

        {/* Destinations / Travel */}
        <h3 style={{ padding: '10px', margin: 0 }}>✈ Destinations / Travel</h3>
        <IonList>
          <IonItem button>Dream Vacation Spot: South Korea</IonItem>
          <IonItem button>Travel Vlog: Siargao, Palawan</IonItem>
        </IonList>

        {/* Personal Information */}
        <h3 style={{ padding: '10px', margin: 0 }}>👤 About Ma. Sweetzel Lyka Navarro</h3>
        <IonList>
          <IonItem>Name: Ma. Sweetzel Lyka Navarro</IonItem>
          <IonItem>Age: 23</IonItem>
          <IonItem>Address: Damilag, Manolo Fortich, Bukidnon</IonItem>
        </IonList>

        {/* Educational Background */}
        <h3 style={{ padding: '10px', margin: 0 }}>🎓 Educational Background</h3>
        <IonList>
          <IonItem>Elementary: Damilag Elementary School</IonItem>
          <IonItem>High School: Alae National High School</IonItem>
          <IonItem>Senior High: Alae National High School (ICT Strand)</IonItem>
          <IonItem>College: Northern Bukidnon State College</IonItem>
          <IonItem>Course: Bachelor of Science in Information Technology</IonItem>
        </IonList>

        {/* Hobbies */}
        <h3 style={{ padding: '10px', margin: 0 }}>🎭 Hobbies</h3>
        <IonList>
          <IonItem>Watching K-Dramas</IonItem>
          <IonItem>Reading Wattpad Stories</IonItem>
          <IonItem>Playing Badminton</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
