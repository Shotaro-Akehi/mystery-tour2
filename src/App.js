import React, { useState } from 'react';
import AttributeInput from './components/AttributeInput';
import RouteSelection from './components/RouteSelection';
import MissionTour from './components/MissionTour';
import TourCompletion from './components/TourCompletion';
import './styles/global.css';

const INITIAL_PRICE = 30000;

const App = () => {
  const [step, setStep] = useState('attribute');
  const [userAttributes, setUserAttributes] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [destination, setDestination] = useState(null);
  const [price, setPrice] = useState(INITIAL_PRICE);

  const handleAttributeSubmit = (attributes) => {
    setUserAttributes(attributes);
    const dummyRoute = {
      start: "金沢駅",
      destination: "金沢駅",
      missions: [
        "100m先を右に曲がってください",
        "そこは異国情緒あふれる場所である, なにやら像が置かれているみたいだ, そのような場所でカレーを食べて画像をアップロードせよ",
        "桜の木が立ち並ぶ通りを歩き、一番大きな木の前で立ち止まってください。"
      ],
      coordinates: [
        { lat: 35.6812362, lng: 139.7671248 },
        { lat: 35.6851763, lng: 139.7675388 },
        { lat: 35.6832755, lng: 139.7716797 }
      ]
    };
    setSelectedRoute(dummyRoute);
    setStep('route');
    setPrice(prevPrice => prevPrice - 1000);
  };

  const handleStartTour = () => {
    setStep('mission');
    setPrice(prevPrice => prevPrice - 1000);
  };

  const handleTourComplete = (finalDestination) => {
    setDestination(finalDestination);
    setStep('completion');
    setPrice(prevPrice => prevPrice - 1000);
  };

  return (
    <div className="App">
      <header>
        <h1>ミステリーツアー</h1>
      </header>
      {step === 'attribute' && <AttributeInput onSubmit={handleAttributeSubmit} price={price} />}
      {step === 'route' && <RouteSelection route={selectedRoute} onStartTour={handleStartTour} price={price} />}
      {step === 'mission' && <MissionTour route={selectedRoute} onComplete={handleTourComplete} price={price} setPrice={setPrice} />}
      {step === 'completion' && <TourCompletion destination={destination} price={price} />}
    </div>
  );
};

export default App;


