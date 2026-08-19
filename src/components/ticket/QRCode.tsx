"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type Props = {
  value: string;
};

export default function TicketQRCode({ value }: Props) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(value).then(setSrc);
  }, [value]);

  if (!src) return null;

  return (
    <img
      src={src}
      alt="QR Code"
      className="h-48 w-48"
    />
  );
}