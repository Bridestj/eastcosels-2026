"use client";

import { useEffect, useRef } from "react";
import {
  Html5Qrcode,
  Html5QrcodeScannerState,
} from "html5-qrcode";

type Props = {
  onScan: (registrationId: string) => void;
  paused?: boolean;
};

export default function QRScanner({
  onScan,
  paused = false,
}: Props) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scannedRef = useRef(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const container = containerRef.current;

    if (!container) {
      return;
    }

    scannedRef.current = false;

    const scannerId = `qr-reader-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}`;

    const reader = document.createElement("div");

    reader.id = scannerId;

    container.innerHTML = "";
    container.appendChild(reader);

    const scanner = new Html5Qrcode(scannerId);

    scannerRef.current = scanner;

    let isMounted = true;

    const startScanner = async () => {
      try {
        await scanner.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: {
              width: 250,
              height: 250,
            },
          },
          (decodedText) => {
            if (!isMounted || scannedRef.current) {
              return;
            }

            scannedRef.current = true;

            onScan(decodedText);
          },
          () => {}
        );
      } catch (error) {
        if (isMounted) {
          console.error("QR scanner error:", error);
        }
      }
    };

    startScanner();

    return () => {
      isMounted = false;

      const currentScanner = scannerRef.current;

      scannerRef.current = null;

      if (!currentScanner) {
        return;
      }

      try {
        const state = currentScanner.getState();

        if (
          state === Html5QrcodeScannerState.SCANNING ||
          state === Html5QrcodeScannerState.PAUSED
        ) {
          currentScanner
            .stop()
            .then(() => {
              try {
                currentScanner.clear();
              } catch {
                // Already cleared.
              }
            })
            .catch((error) => {
              console.warn(
                "QR scanner cleanup:",
                error
              );
            });
        } else {
          try {
            currentScanner.clear();
          } catch {
            // Already cleared.
          }
        }
      } catch {
        // Scanner was already stopped or destroyed.
      }

      if (container) {
        container.innerHTML = "";
      }
    };
  }, [onScan, paused]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="mx-auto max-w-md overflow-hidden rounded-2xl"
      />

      {!paused && (
        <p className="mt-4 text-sm text-gray-500">
          Point the camera at the attendee's QR code.
        </p>
      )}
    </div>
  );
}