import { useLocation } from "react-router-dom";
import React, { useMemo } from "react";

export default function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

// ! CARA PAKE:
// const query = useQuery();
//   const page = parseInt(query.get("page")) || 1;
//   const limit = parseInt(query.get("limit")) || 10;
