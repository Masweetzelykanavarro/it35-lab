import {
  IonAlert,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{
  message: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
        className="ion-padding"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80") no-repeat center center fixed',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '12%',
            padding: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            maxWidth: '450px',
            marginLeft: 'auto',
            marginRight: 'auto',
            animation: 'fadeIn 1s ease-out',
          }}
        >
          {/* Cat Avatar */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Cat Avatar"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              marginBottom: '20px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          />

          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#333',
              marginBottom: '30px',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '1px',
            }}
          >
            Login Your Again
          </h1>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            style={{
              width: '100%',
              maxWidth: '400px',
              marginBottom: '20px',
              borderRadius: '15px',
              '--highlight-color-focused': '#4facfe',
              boxShadow: '0 0 8px rgba(79, 172, 254, 0.2)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.transform = 'scale(1.02)')}
            onBlur={(e) => (e.target.style.transform = 'scale(1)')}
          />

          <IonInput
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            style={{
              width: '100%',
              maxWidth: '400px',
              marginBottom: '30px',
              borderRadius: '15px',
              '--highlight-color-focused': '#4facfe',
              boxShadow: '0 0 8px rgba(38, 53, 66, 0.2)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>

          <IonButton
            onClick={doLogin}
            expand="block"
            shape="round"
            style={{
              width: '100%',
              maxWidth: '400px',
              marginBottom: '20px',
              background: 'linear-gradient(to right,rgb(97, 101, 104), #00f2fe)',
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              padding: '12px 20px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          >
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/app/home/signup"
            expand="block"
            fill="clear"
            shape="round"
            style={{
              width: '100%',
              maxWidth: '400px',
              color: '#4facfe',
              textTransform: 'none',
              fontSize: '0.95rem',
            }}
          >
            Don't have an account? <strong>&nbsp;Sign Up</strong>
          </IonButton>

          <a
            href="#"
            style={{
              marginTop: '12px',
              color: '#6c757d',
              textDecoration: 'none',
              fontSize: '0.9rem',
              textAlign: 'center',
              display: 'block',
            }}
          >
            Forgot Password?
          </a>
        </div>

        {/* Reusable AlertBox Component */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* IonToast for success message */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
