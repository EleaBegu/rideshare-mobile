'use client';

import { useState } from 'react';

export function Vendndodhja() {
  const [userLocation, setUserLocation] = useState<string>('');
  const [permissionDenied, setPermissionDenied] = useState<boolean>(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setPermissionDenied(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(4);
        const lng = position.coords.longitude.toFixed(4);
        // Shfaqja e vendndodhjes bashkë me largësinë prej 12 m
        setUserLocation(`Vendndodhja ime (${lat}, ${lng}) · Largësia: 12 m`);
        setPermissionDenied(false);
      },
      (error) => {
        setPermissionDenied(true);
      }
    );
  };

  return (
    <div style={{ background: '#f4f4f5', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #e4e4e7' }}>
      <h3 style={{ marginTop: 0 }}>📍 Vendndodhja dhe Vendtakimi (Java 8)</h3>
      
      {/* 1. Leja kërkohet VETËM pas klikimit */}
      <button 
        type="button"
        onClick={handleGetLocation}
        style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '5px' }}
      >
        Përdor vendndodhjen time
      </button>

      {/* 2. Përmbledhja e vendndodhjes me largësi 12 m */}
      {userLocation && (
        <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>
          Pika e nisjes: {userLocation}
        </p>
      )}

      {/* 3. Alternativa manuale nëse leja refuzohet ose nuk mbështetet */}
      {permissionDenied && (
        <div style={{ marginTop: '10px' }}>
          <p style={{ color: '#d97706', fontSize: '14px', margin: '5px 0' }}>
            Vendndodhja automatike nuk u mor. Shkruaj vendtakimin manualisht:
          </p>
          <input 
            type="text" 
            placeholder="Shkruaj vendtakimin këtu..."
            onChange={(e) => setUserLocation(e.target.value)}
            style={{ padding: '8px', width: '100%', maxWidth: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
}
