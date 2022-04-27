import React, { useState } from 'react';
import axios from 'axios';
import { ClientRequest } from 'http';

interface TestResponse {
  hello: string;
}

async function testRequest() {
  try {
    console.log("About to request from /api");
    const result = await axios.get<TestResponse>('/api');
    console.log("Returned results from /api");
    return JSON.stringify(result.data);
  } catch (error) {
    if (error instanceof Error) {
      return "Error! " + error.message;
    }
    return "Unknown error occurred";
  }
}

export function TestRequestButton() {
  const [result, setResult] = useState('');
  async function handleClick() {
    const result = await testRequest();
    setResult(result);
  }

  return result ? (
    <>
      <p>{result}</p>
      <button onClick={() => setResult('')}>Reset</button>
    </>
  ) : (
    <button onClick={handleClick}>Perform Test Request</button>
  );
}