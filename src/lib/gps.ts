"use client";

import { useState, useEffect, useCallback } from "react";

interface GeolocationState {
  coordinates: { lat: number; lng: number } | null;
  error: string | null;
  isWatching: boolean;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    isWatching: false,
  });

  const [watchId, setWatchId] = useState<number | null>(null);

  const stopWatching = useCallback(() => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
      setState((s) => ({ ...s, isWatching: false }));
    }
  }, [watchId]);

  const startWatching = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setState((s) => ({
        ...s,
        error: "Geolocation is not supported by your browser",
      }));
      return;
    }

    // Use a single getCurrentPosition to avoid watchPosition spamming state updates
    // which causes WebGL context loss due to excessive re-renders.
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          error: null,
          isWatching: true,
        });
      },
      (error) => {
        setState((s) => ({ ...s, error: error.message, isWatching: false }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000,
      }
    );
  }, []);

  useEffect(() => {
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [watchId]);

  return { ...state, startWatching, stopWatching };
}

// Calculate distance between two coordinates in meters using the Haversine formula
export function calculateDistanceInMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth radius in meters
  const p1 = (lat1 * Math.PI) / 180;
  const p2 = (lat2 * Math.PI) / 180;
  const dp = ((lat2 - lat1) * Math.PI) / 180;
  const dl = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dp / 2) * Math.sin(dp / 2) +
    Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) * Math.sin(dl / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
