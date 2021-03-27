import React from "react";
import { useRouter } from "next/router";

function AnouncementDetails() {
  const router = useRouter();

  return <div>Hi {router.query.anouncementId}</div>;
}

export default AnouncementDetails;
