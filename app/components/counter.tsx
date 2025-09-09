"use client"

import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

  return <>
  <h1>Clicked: {count} times</h1>
  <button type="button" onClick={() => setCount(count + 1)}>Click Me</button>
  </>
}